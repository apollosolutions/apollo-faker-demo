import {
  isAbstractType,
  Kind,
  TypeInfo,
  visit,
  visitWithTypeInfo,
} from "graphql";

/**
 * @param {import("graphql").DocumentNode} operation
 * @param {import("graphql").GraphQLSchema} schema
 */
export function ensureValidOperation(operation, schema) {
  const schemaTypeInfo = new TypeInfo(schema);
  const validOperation = visit(
    operation,
    visitWithTypeInfo(schemaTypeInfo, {
      [Kind.FIELD]: {
        enter() {
          const parentType = schemaTypeInfo.getParentType();
          const fieldDef = schemaTypeInfo.getFieldDef();
          if (!parentType || !fieldDef || fieldDef.name.startsWith("__")) {
            return null;
          }
        },
      },
      [Kind.ARGUMENT]: {
        enter() {
          const arg = schemaTypeInfo.getArgument();
          if (!arg) {
            return null;
          }
        },
      },
      [Kind.SELECTION_SET]: {
        leave(node) {
          const type = schemaTypeInfo.getParentType();
          if (isAbstractType(type) || node.selections.length < 1) {
            return injectTypename(node);
          }
        },
      },
    })
  );

  return removeUnusedVariables(validOperation);
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
