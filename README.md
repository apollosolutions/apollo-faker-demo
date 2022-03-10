# apollo-faker-demo

**The code in this repository is experimental and has been provided for reference purposes only. Community feedback is welcome but this project may not be supported in the same way that repositories in the official [Apollo GraphQL GitHub organization](https://github.com/apollographql) are. If you need help you can file an issue on this repository, [contact Apollo](https://www.apollographql.com/contact-sales) to talk to an expert, or create a ticket directly in Apollo Studio.**

CLI tool and development server for the ["Dream Query"](https://engineeringblog.yelp.com/2020/10/dream-query.html) workflow.

1. You're developing an app that uses an existing GraphQL API.
2. You've written an operation for your app, but it's invalid because you need data that doesn't exist yet.
3. Using this tool, you can propose changes to the schema. Your proposed schema will be merged into the existing schema.
4. You can also define mocks to customize the data returned for new fields you've added.
5. After completing your app development work, you can take your proposed changes to the API team for implementation.

Heavily inspired by [graphql-faker](https://github.com/APIs-guru/graphql-faker). Also takes inspiration from [@graphql-tools/mock](https://github.com/ardatan/graphql-tools).

## Usage

[**View a video walkthrough on Youtube**](https://www.youtube.com/watch?v=BWR5QVZ4c-8)

The tool assumes that you have a federated schema published to Studio.

1. Export your user API key so that it's available for the tool.

   ```sh
   export APOLLO_KEY=<your key>
   ```

2. Run the development server:
   ```sh
   npx github:@apollosolutions/apollo-faker-demo --graphref <yourgraph>@<variant> --remote https://yourapi.com/graphql
   ```
3. Create a `proposed.graphql` and write some GraphQL schema in it. Any types, fields, arguments, etc, will be merged with the schema found in Apollo Studio.
4. Run operations against your combined schema in Sandbox. The development server proxies pre-existing types and fields to the `--remote` API. Any new fields are mocked.
   [https://studio.apollographql.com/sandbox/explorer?endpoint=http://localhost:4000](https://studio.apollographql.com/sandbox/explorer?endpoint=http://localhost:4000)
5. Customize the mocks. You have two options:
   1. Add directives to the schema in your `proposed.graphql` file.
      ```graphql
      type Foo
        bar: String @fake(template: "{{name.firstName}}")
        baz: String @example(values: ["hello", "world"])
        quux: [String] @listLength(min: 5, max: 10)
      }
      ```
   2. Create a `mocks.js` file in the current directory:
      ```js
      export default {
        Foo: {
          bar() {
            return "bar";
          },
        },
      };
      ```
      You can override fields that already exist in the schema. You can access the data from the remote endpoint on the `context` argument:
      ```js
      export default {
        Account: {
          name(source, args, context, info) {
            return context.remoteValue.toUpperCase();
          },
        },
      };
      ```
6. Determine which subgraph teams you need to bring your proposed changes to by using the schema explorer. Visit [http://localhost:4000](http://localhost:4000) to see a simplified representation of the schema that highlights the proposed changes and allows filtering/highlighting by subgraph.

## Code Overview

1. Running the tool starts up:
   1. A simple HTTP server (`src/server/index.js`) hosting:
      1. The static assets for the Proposed Changes Explorer UI.
      2. The proxy/mock GraphQL API.
      3. An endpoint for fetching all schema data.
   2. A watcher that observes (`src/sources.js`):
      1. The API schema from Studio for the given graphref.
      2. proposed.graphql
      3. mocks.js
2. The watcher naively merges the AST of the API schema from Studio with the AST from proposed.graphql using [`mergeTypeDefs`](https://www.graphql-tools.com/docs/api/modules/merge_src#mergetypedefs). This allows the proposed.graphql file to be "invalid" schema, and supports things like adding arguments to fields.
3. The GraphQL executor (`src/server/execution.js`) executes an operation in two phases:
   1. It strips out all fields from the operation that aren't part of the API schema and makes a request to the remote endpoint. This provides the "proxy" behavior.
   2. It uses the results from the remote endpoint as the `rootValue` when re-executing the entire operation. When resolving each field, the executor uses either:
      - A mock defined as a directive with `@fake` or `@example`.
      - A mock defined in `mocks.js`.
      - A value from the remote endpoint.
      - A default mocked value for the return type.
4. The Proposed Changes Explorer fetches the supergraph schema and all the subgraph schemas for the graphref and combines the data into a large dictionary of schema elements. Each element is associated to a subgraph and the directives defined in those subgraphs (to get around the lossiness of schema composition.)

## Running locally

```sh
yarn install
yarn codegen # generate code for Studio API calls
yarn vite build # build Proposed Changes Explorer frontend code
./bin/index.js --graphref mygraph@current --remote https://myapi.com/graphql
```

## Known Limitations

- No support for headers or other customizations to the proxied GraphQL requests.
- The Proposed Changes Explorer shows only Object type and Fields (still needs support for interfaces, unions, inputs, enums, and scalars).
- General lack of test coverage and error handling.
