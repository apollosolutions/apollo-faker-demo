import { mapSchema, getDirective, MapperKind } from "@graphql-tools/utils";
import { isListType, isNonNullType, parse } from "graphql";
import { faker } from "@faker-js/faker";

export const mockDirectivesDefs = parse(`
  scalar examples__JSON
  directive @fake(template: String!) on FIELD_DEFINITION
  directive @example(values: [examples__JSON]) on FIELD_DEFINITION
  directive @listLength(min: Int, max: Int) on FIELD_DEFINITION
`);

/**
 * @param {import("graphql").GraphQLSchema} schema
 */
export function addMockDirectives(schema) {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD](fieldConfig) {
      const fake = getDirective(schema, fieldConfig, "fake")?.[0];
      const example = getDirective(schema, fieldConfig, "example")?.[0];
      const listLength = getDirective(schema, fieldConfig, "listLength")?.[0];

      if (fake || example) {
        fieldConfig.resolve = makeMockResolver(
          fake?.template,
          example?.values,
          listLength
        );
      }

      return fieldConfig;
    },
  });
}

/**
 *
 * @param {string | undefined} template
 * @param {any[] | undefined} examples
 * @param {{ min?: number; max?: number } | undefined} listLength
 * @returns {import("graphql").GraphQLFieldResolver<*,*>}
 */
function makeMockResolver(template, examples, listLength) {
  return async (source, args, context, info) => {
    const isList = isNonNullType(info.returnType)
      ? isListType(info.returnType.ofType)
      : isListType(info.returnType);

    const fn = examples
      ? () => faker.random.arrayElement(examples)
      : () => faker.fake(template ?? "{{lorem.words}}");

    if (isList) {
      const min = listLength?.min ?? 2;
      const max = Math.max(listLength?.max ?? 0, min);
      const count = Math.round(Math.random() * (max - min)) + min;
      return new Array(count).fill(1).map(fn);
    }

    return fn();
  };
}
