import { GraphQLFieldResolver, GraphQLSchema } from "graphql";

type Mocks = {
  [key: string]: (() => any) | { [key: string]: GraphQLFieldResolver };
};

interface Sources {
  combinedSchema: GraphQLSchema;
  remoteSchema: GraphQLSchema | undefined;
  mocks: Mocks;
}
