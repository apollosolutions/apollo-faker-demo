import { buildASTSchema, parse, print } from "graphql";
import { ensureValidOperation } from "./remote";

test("remove fields", () => {
  const schema = buildASTSchema(
    parse(`#graphql
    type Query {
      foo(id: ID!): Foo
    }

    type Foo {
      bar: String
    }
  `)
  );

  const operation = parse(`#graphql
    query ($id: ID!, $bar: String!) {
      foo(id: $id, bar: $bar) {
        bar
        baz
      }
      quux
    }
  `);

  const { operation: actual } = ensureValidOperation(operation, schema, {});

  expect(print(actual)).toEqual(`query ($id: ID!) {
  foo(id: $id) {
    bar
  }
}`);
});

test("remove input fields", () => {
  const schema = buildASTSchema(
    parse(`#graphql
    type Query {
      x(input: X): String
      y(b: String): String
    }

    input X {
      a: String
    }
  `)
  );

  const tests = [
    ['{ x(input: { a: "1", b: "2" }) }', `{ x(input: {a: "1"}) }`],
    [
      "query ($a: String, $b: String) { x(input: { a: $a, b: $b }) }",
      "query ($a: String) { x(input: { a: $a }) }",
    ],
    ["query ($x: X) { x(input: $x) }", "query ($x: X) { x(input: $x) }"],
    ['{ y(b: "1", c: "2") }', '{ y(b: "1") }'],
  ];

  for (const [input, expectedRaw] of tests) {
    const operation = parse(input);
    const expected = print(parse(expectedRaw));
    const { operation: actual } = ensureValidOperation(operation, schema, {});
    expect(print(actual)).toEqual(expected);
  }
});

test("remove variable fields", () => {
  const schema = buildASTSchema(
    parse(`#graphql
    type Query {
      x(input: X): String
    }

    input X {
      a: String
    }
  `)
  );

  const tests = [
    ['{ x(input: { a: "1", b: "2" }) }', `{ x(input: {a: "1"}) }`],
    [
      "query ($a: String, $b: String) { x(input: { a: $a, b: $b }) }",
      "query ($a: String) { x(input: { a: $a }) }",
    ],
    ["query ($x: X) { x(input: $x) }", "query ($x: X) { x(input: $x) }"],
    ['{ y(b: "1", c: "2") }', '{ y(b: "1") }'],
  ];

  const operation = parse("query ($x: X) { x(input: $x) }");
  const expected = print(operation);
  const { operation: actual, variables } = ensureValidOperation(
    operation,
    schema,
    { x: { a: "1", b: "2" } }
  );
  expect(print(actual)).toEqual(expected);
  expect(variables).toEqual({ x: { a: "1" } });
});
