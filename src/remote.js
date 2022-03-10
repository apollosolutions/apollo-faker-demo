import {
  getNamedType,
  isAbstractType,
  isInputObjectType,
  Kind,
  TypeInfo,
  visit,
  visitWithTypeInfo,
} from "graphql";

/**
 * @param {import("graphql").DocumentNode} operation
 * @param {import("graphql").GraphQLSchema} schema
 * @param {Record<string, any>} variables
 * @returns {{ operation: import("graphql").DocumentNode; variables:  Record<string, any> }}
 */
export function ensureValidOperation(operation, schema, variables) {
  const typeInfo = new TypeInfo(schema);

  /** @type {Record<string, import("graphql").GraphQLInputObjectType>} */
  const variableNamesToTypes = {};

  let fieldNode;
  const validOperation = visit(
    operation,
    visitWithTypeInfo(typeInfo, {
      [Kind.FIELD]: {
        enter(node) {
          fieldNode = node;
          const parentType = typeInfo.getParentType();
          const fieldDef = typeInfo.getFieldDef();
          if (!parentType || !fieldDef || fieldDef.name.startsWith("__")) {
            return null;
          }
        },
      },
      [Kind.ARGUMENT]: {
        enter() {
          const arg = typeInfo.getArgument();
          if (!arg) {
            return null;
          }
        },
      },
      [Kind.SELECTION_SET]: {
        leave(node) {
          const type = typeInfo.getParentType();
          if (isAbstractType(type) || node.selections.length < 1) {
            return injectTypename(node);
          }
        },
      },
      // remove fields in nested field input objects
      [Kind.OBJECT_FIELD]: {
        enter(node) {
          const inputType = typeInfo.getParentInputType();
          if (isInputObjectType(inputType)) {
            if (!inputType.getFields()[node.name.value]) {
              return null;
            }
          }
        },
      },
      [Kind.VARIABLE_DEFINITION]: {
        enter(node) {
          const variableType = schema.getType(
            getNamedTypeNode(node.type).name.value
          );

          if (isInputObjectType(variableType)) {
            variableNamesToTypes[node.variable.name.value] = variableType;
          }
        },
      },
    })
  );

  return {
    operation: removeUnusedVariables(validOperation),
    variables: removeFieldsFromVariables(variables, variableNamesToTypes),
  };
}

/**
 *
 * @param {import("graphql").TypeNode} typeNode
 * @returns {import("graphql").NamedTypeNode}
 */
function getNamedTypeNode(typeNode) {
  if (typeNode.kind === Kind.NON_NULL_TYPE) {
    return getNamedTypeNode(typeNode.type);
  } else if (typeNode.kind === Kind.LIST_TYPE) {
    return getNamedTypeNode(typeNode.type);
  }
  return typeNode;
}

/**
 * @param {import("graphql").DocumentNode} documentAST
 */
function removeUnusedVariables(documentAST) {
  const seenVariables = Object.create(null);

  visit(documentAST, {
    [Kind.VARIABLE_DEFINITION]: () => false,
    [Kind.VARIABLE]: (node) => {
      seenVariables[node.name.value] = true;
    },
  });

  return visit(documentAST, {
    [Kind.VARIABLE_DEFINITION]: (node) => {
      if (!seenVariables[node.variable.name.value]) {
        return null;
      }
    },
  });
}

/**
 * @param {import("graphql").SelectionSetNode} node
 */
function injectTypename(node) {
  return {
    ...node,
    selections: [
      ...node.selections,
      {
        kind: Kind.FIELD,
        name: {
          kind: Kind.NAME,
          value: "__typename",
        },
      },
    ],
  };
}

/**
 *
 * @param {Record<string, any>} variables
 * @param {Record<string, import("graphql").GraphQLInputObjectType>} variableNamesToTypes
 */
function removeFieldsFromVariables(variables, variableNamesToTypes) {
  /** @type {Record<string, any>} */
  const newVariables = {};

  for (const [name, value] of Object.entries(variables)) {
    if (name in variableNamesToTypes) {
      const newValue = { ...value };
      for (const key of Object.keys(value)) {
        const inputType = variableNamesToTypes[name];
        if (!inputType.getFields()[key]) {
          delete newValue[key];
        }
      }
      newVariables[name] = newValue;
    } else {
      newVariables[name] = value;
    }
  }

  return newVariables;
}
