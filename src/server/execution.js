import { defaultFieldResolver, graphql, parse, print } from "graphql";
import { ensureValidOperation } from "../remote.js";
import { rawRequest } from "graphql-request";
import {
  generateValueFromType,
  getMockForField,
} from "../mocks/generate-value.js";
import { getDirectives } from "@graphql-tools/utils";

/**
 * @param {string} endpoint
 * @param {{ query: string; variables: Record<string, any> }} params
 * @param {import("graphql").GraphQLSchema} remoteSchema
 * @private
 */
export async function fetchRemote(endpoint, params, remoteSchema) {
  try {
    const operation = parse(params.query);
    const { operation: remoteOperation, variables } = ensureValidOperation(
      operation,
      remoteSchema,
      params.variables
    );
    const result = await rawRequest(
      endpoint,
      print(remoteOperation),
      variables
    );
    return result.data;
  } catch (e) {
    return {};
  }
}

/**
 * @param {import("../types").Sources | undefined} sources
 * @param {string | undefined} endpoint
 * @param {{ query: string; variables: Record<string, any>; operationName: string | undefined }} params
 */
export async function execute(sources, endpoint, params) {
  if (!sources) {
    return { errors: [{ message: "waiting..." }] };
  }

  const { combinedSchema, remoteSchema, mocks } = sources;

  const rootValue =
    endpoint && remoteSchema
      ? await fetchRemote(endpoint, params, remoteSchema)
      : {};

  return graphql({
    schema: combinedSchema,
    source: params.query,
    variableValues: params.variables,
    operationName: params.operationName,
    rootValue,

    fieldResolver(source, args, ctx, info) {
      const mock = getMockForField(mocks, info.parentType, info.fieldName);
      const value = defaultFieldResolver(source, args, ctx, info);

      if (!mock && value !== undefined) {
        return value;
      }

      if (mock) {
        const newCtx = { ...(ctx ?? {}), remoteValue: value };
        return mock(source, args, newCtx, info);
      }

      const directives = getDirectives(
        combinedSchema,
        info.parentType.getFields()[info.fieldName]
      );
      return generateValueFromType(
        info.returnType,
        mocks,
        combinedSchema,
        directives
      );
    },
  });
}
