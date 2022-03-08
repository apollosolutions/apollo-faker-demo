import { faker } from "@faker-js/faker";
import {
  getNullableType,
  isAbstractType,
  isEnumType,
  isListType,
  isObjectType,
  isScalarType,
} from "graphql";

/**
 * @param {import("../types").Mocks} mocks
 * @param {import("graphql").GraphQLObjectType} parentType
 * @param {string} fieldName
 * @returns {import("graphql").GraphQLFieldResolver<*,*> | undefined}
 */
export function getMockForField(mocks, parentType, fieldName) {
  const parentTypeMock = mocks[parentType.name];
  if (!parentTypeMock) return;
  if (typeof parentTypeMock === "function") return;
  return parentTypeMock[fieldName];
}

/**
 * Heavily borrowed from @graphql-tools/utils. Mostly simplified (no store) and
 * also supports the @listLength directive.
 *
 * @param {import("graphql").GraphQLOutputType} fieldType
 * @param {import("../types").Mocks} mocks
 * @param {import("graphql").GraphQLSchema} schema
 * @param {import("@graphql-tools/utils").DirectiveAnnotation[]} directives
 * @returns {any}
 */
export function generateValueFromType(fieldType, mocks, schema, directives) {
  const nullableType = getNullableType(fieldType);

  if (isScalarType(nullableType)) {
    const mockFn = mocks[nullableType.name];
    if (typeof mockFn !== "function")
      throw new Error(`No mock defined for type "${nullableType.name}"`);
    return mockFn();
  } else if (isEnumType(nullableType)) {
    const mockFn = mocks[nullableType.name];
    if (typeof mockFn === "function") {
      return mockFn();
    }

    const values = nullableType.getValues().map((v) => v.value);
    return faker.helpers.shuffle(values)[0];
  } else if (isObjectType(nullableType)) {
    return {};
  } else if (isListType(nullableType)) {
    const listLength = directives.find((d) => d.name === "listLength");

    const min = listLength?.args?.min ?? 2;
    const max = Math.max(listLength?.args?.max ?? 0, min);
    const count = Math.round(Math.random() * (max - min)) + min;

    return new Array(count)
      .fill(1)
      .map(() =>
        generateValueFromType(nullableType.ofType, mocks, schema, directives)
      );
  } else if (isAbstractType(nullableType)) {
    const mock = mocks[nullableType.name];

    if (typeof mock === "function") {
      return mock();
    } else {
      const __typename = faker.helpers.shuffle(
        schema.getPossibleTypes(nullableType).slice()
      )[0]?.name;

      return { __typename };
    }
  } else {
    throw new Error(`mock for ${nullableType} not implemented`);
  }
}
