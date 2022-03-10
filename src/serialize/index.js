import { mergeTypeDefs } from "@graphql-tools/merge";
import { getDirective, getDirectives } from "@graphql-tools/utils";
import { readFile } from "fs/promises";
import {
  buildASTSchema,
  getNamedType,
  GraphQLObjectType,
  GraphQLSchema,
  isEnumType,
  isInputObjectType,
  isInterfaceType,
  isIntrospectionType,
  isObjectType,
  isScalarType,
  isUnionType,
  parse,
  visit,
} from "graphql";
import { mockDirectivesDefs } from "../mocks/directives.js";
import {
  fetchApiSchema,
  fetchSubgraphSdls,
  fetchSupergraphSchema,
} from "../schema-fetcher.js";

/**
 * Collect info from the API schema, supergraph schema, and all subgraph schemas
 * into a single simplified data structure for display. Includes relationships
 * between schema elements and subgraphs, as well as subgraph directives.
 *
 * @param {string} graphref
 * @param {string} proposedFile
 */
export async function serialize(graphref, proposedFile) {
  // SDLs
  const [api, supergraph, subgraphSdls, proposed] = await Promise.all([
    fetchApiSchema(graphref),
    fetchSupergraphSchema(graphref),
    fetchSubgraphSdls(graphref),
    readFile(proposedFile, "utf-8").catch(() => "type Query"),
  ]);
  assert(api, "api missing");
  assert(supergraph, "supergraph missing");

  // TypeDefs
  const apiTypeDefs = parse(api);
  // const supergraphTypeDefs = parse(supergraph);
  const subgraphTypeDefs = Object.fromEntries(
    Object.entries(subgraphSdls).map(([name, sdl]) => [name, parse(sdl)])
  );
  const proposedTypeDefs = parse(proposed);
  const combinedTypeDefs = mergeTypeDefs([
    JSON.parse(JSON.stringify(apiTypeDefs)),
    proposedTypeDefs,
    mockDirectivesDefs,
  ]);

  // Schemas
  // const apiSchema = buildASTSchema(apiTypeDefs);
  // const supergraphSchema = buildASTSchema(supergraphTypeDefs);
  const subgraphSchemas = Object.fromEntries(
    Object.entries(subgraphTypeDefs).map(([name, typeDefs]) => [
      name,
      buildASTSchema(typeDefs, { assumeValid: true, assumeValidSDL: true }),
    ])
  );
  const combinedSchema = buildASTSchema(combinedTypeDefs, {
    assumeValid: true,
    assumeValidSDL: true,
  });

  // Lists of relevant elements
  const proposedIds = collectIdsFromTypeDefs(proposedTypeDefs);
  const mockIds = collectIdsFromTypeDefs(mockDirectivesDefs);

  // Types
  const combinedTypes = Object.values(combinedSchema.getTypeMap())
    .filter((t) => !isIntrospectionType(t))
    .filter((t) => !mockIds.includes(t.name));
  const combinedDirectives = combinedSchema
    .getDirectives()
    .filter((d) => !mockIds.includes(`@${d.name}`));

  const objects = combinedTypes
    .filter(isObjectType)
    .filter(
      (o) =>
        o !== combinedSchema.getQueryType() &&
        o !== combinedSchema.getMutationType() &&
        o !== combinedSchema.getSubscriptionType()
    );
  const interfaces = combinedTypes.filter(isInterfaceType);
  const unions = combinedTypes.filter(isUnionType);
  const enums = combinedTypes.filter(isEnumType);
  const scalars = combinedTypes.filter(isScalarType);
  const inputs = combinedTypes.filter(isInputObjectType);

  /** @type {(_: { name: string; }) => string} */
  const id = (obj) => obj.name;

  return {
    subgraphs: Object.entries(subgraphSchemas).map(([name, schema]) =>
      serializeSubgraph(name, schema)
    ),
    query: combinedSchema.getQueryType()?.name,
    mutation: combinedSchema.getMutationType()?.name,
    subscription: combinedSchema.getSubscriptionType()?.name,
    objects: objects.map(id),
    interfaces: interfaces.map(id),
    unions: unions.map(id),
    enums: enums.map(id),
    scalars: scalars.map(id),
    inputs: inputs.map(id),
    directives: combinedDirectives.map((d) => `@${d.name}`),
    elements: Object.fromEntries(
      [
        ...[
          combinedSchema.getQueryType(),
          combinedSchema.getMutationType(),
          combinedSchema.getSubscriptionType(),
        ]
          .filter(
            /** @type {(_: any) => _ is GraphQLObjectType} */ ((o) => !!o)
          )
          .map((o) =>
            serializeObject(o, combinedSchema, subgraphSchemas, proposedIds)
          ),
        objects.map((o) =>
          serializeObject(o, combinedSchema, subgraphSchemas, proposedIds)
        ),
      ]
        .flat(3)
        .map((el) => [el.id, el])
    ),
  };
}

/**
 * @param {string} name
 * @param {GraphQLSchema} schema
 */
function serializeSubgraph(name, schema) {
  const contact = getDirective(schema, schema, "contact");
  return {
    id: name,
    contact,
  };
}

/**
 * @param {GraphQLObjectType} object
 * @param {GraphQLSchema} schema
 * @param {Record<string, GraphQLSchema>} subgraphSchemas
 * @param {string[]} proposed
 */
function serializeObject(object, schema, subgraphSchemas, proposed) {
  const subgraphs = Object.entries(subgraphSchemas)
    .filter(([_, schema]) => schema.getType(object.name))
    .map(([name]) => name);

  const appliedDirectives = getAllDirectives(object, schema, subgraphSchemas);

  const fields = Object.values(object.getFields()).map((f) =>
    serializeField(f, object, schema, subgraphSchemas, proposed)
  );
  return [
    {
      id: object.name,
      kind: "Object",
      description: object.description,
      subgraphs,
      proposed: proposed.includes(object.name),
      appliedDirectives,
      deprecation: appliedDirectives.find((d) => d.name === "deprecated"),
      tags: appliedDirectives
        .filter((d) => d.name === "tag")
        .map((d) => d?.args?.name)
        .filter(Boolean),
      fields: fields.map((f) => f.id),
    },
    ...fields,
  ];
}

/**
 * @param {import("graphql").GraphQLField<*,*>} field
 * @param {import("graphql").GraphQLCompositeType} parent
 * @param {GraphQLSchema} schema
 * @param {Record<string, GraphQLSchema>} subgraphSchemas
 * @param {string[]} proposed
 */
function serializeField(field, parent, schema, subgraphSchemas, proposed) {
  const subgraphs = Object.entries(subgraphSchemas)
    .filter(([_name, schema]) => findFieldInSubgraph(field, parent, schema))
    .map(([name]) => name);

  const appliedDirectives = getAllFieldDirectives(
    field,
    parent,
    schema,
    subgraphSchemas
  );

  const id = `${parent.name}.${field.name}`;
  return {
    id,
    name: field.name,
    kind: "Field",
    description: field.description,
    subgraphs,
    proposed: proposed.includes(id),
    typeRef: getNamedType(field.type).name,
    type: field.type.toString(),
    appliedDirectives,
    deprecation: appliedDirectives.find((d) => d.name === "deprecated"),
    tags: appliedDirectives
      .filter((d) => d.name === "tag")
      .map((d) => d?.args?.name)
      .filter(Boolean),
  };
}

/**
 * @param {any} cond
 * @param {string} message
 * @returns {asserts cond}
 */
function assert(cond, message) {
  if (!cond) throw new Error(message);
}

/**
 * @param {import("graphql").GraphQLNamedType} type
 * @param {GraphQLSchema} schema
 * @param {Record<string, GraphQLSchema>} subgraphSchemas
 */
function getAllDirectives(type, schema, subgraphSchemas) {
  const directives = getDirectives(schema, type);

  for (const [_name, schema] of Object.entries(subgraphSchemas)) {
    const subgraphInstance = schema.getType(type.name);
    if (!subgraphInstance) continue;

    directives.push(...getDirectives(schema, subgraphInstance));
  }

  return directives;
}

/**
 * @param {import("graphql").GraphQLField<*,*>} field
 * @param {import("graphql").GraphQLNamedType} parent
 * @param {GraphQLSchema} schema
 * @param {Record<string, GraphQLSchema>} subgraphSchemas
 */
function getAllFieldDirectives(field, parent, schema, subgraphSchemas) {
  const directives = getDirectives(schema, field);

  for (const [_name, schema] of Object.entries(subgraphSchemas)) {
    const subgraphField = findFieldInSubgraph(field, parent, schema);
    if (!subgraphField) continue;
    directives.push(...getDirectives(schema, subgraphField));
  }

  return directives;
}

/**
 * @param {import("graphql").GraphQLField<*,*>} field
 * @param {import("graphql").GraphQLNamedType} parent
 * @param {GraphQLSchema} schema
 */
function findFieldInSubgraph(field, parent, schema) {
  const subgraphInstance = schema.getType(parent.name);
  if (!subgraphInstance) return;

  if (
    isObjectType(subgraphInstance) ||
    isInterfaceType(subgraphInstance) ||
    isInputObjectType(subgraphInstance)
  ) {
    return subgraphInstance.getFields()[field.name];
  }
}

/**
 * @param {import("graphql").DocumentNode} typeDefs
 */
function collectIdsFromTypeDefs(typeDefs) {
  /** @type {string[]} */
  const ids = [];

  /** @type {string} */
  let parentId;

  visit(typeDefs, {
    ObjectTypeDefinition(node) {
      ids.push(node.name.value);
      parentId = node.name.value;
    },
    ObjectTypeExtension(node) {},
    InterfaceTypeDefinition(node) {
      ids.push(node.name.value);
      parentId = node.name.value;
    },
    InterfaceTypeExtension(node) {},
    UnionTypeDefinition(node) {
      ids.push(node.name.value);
    },
    UnionTypeExtension(node) {},
    EnumTypeDefinition(node) {
      ids.push(node.name.value);
    },
    EnumTypeExtension(node) {},
    ScalarTypeDefinition(node) {
      ids.push(node.name.value);
    },
    ScalarTypeExtension(node) {},
    InputObjectTypeDefinition(node) {
      ids.push(node.name.value);
      parentId = node.name.value;
    },
    InputObjectTypeExtension(node) {},
    FieldDefinition(node) {
      ids.push(`${parentId}.${node.name.value}`);
    },
    DirectiveDefinition(node) {
      ids.push(`@${node.name.value}`);
    },
  });

  return ids;
}
