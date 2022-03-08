import { fetchApiSchema } from "./schema-fetcher.js";
import { buildASTSchema, parse } from "graphql";
import { mergeTypeDefs } from "@graphql-tools/merge";
import {
  catchError,
  combineLatest,
  distinct,
  filter,
  fromEvent,
  interval,
  map,
  mergeMap,
  of,
  retry,
  startWith,
} from "rxjs";
import { watch } from "chokidar";
import { readFile } from "fs/promises";
import { resolve } from "path";
import importFresh from "@small-tech/import-fresh";
import { addMockDirectives, mockDirectivesDefs } from "./mocks/directives.js";
import { defaultMocks } from "@graphql-tools/mock";

/**
 * @param {{
 *  graphref: string | undefined;
 *  proposedFile: string;
 *  mocksFile: string;
 * }} params
 * @returns {import("rxjs").Observable<import("./types").Sources>}
 */
export function observeSources({ graphref, proposedFile, mocksFile }) {
  // fetch api schema from studio every N seconds
  const studioSchema = graphref
    ? interval(60 * 1000).pipe(
        startWith(0),
        mergeMap(() => fetchApiSchema(graphref)),
        filter(Boolean),
        distinct(),
        map((sdl) => parse(sdl))
      )
    : of(parse("type Query"));

  // fetch typedefs from graphql file on every file change
  const proposed = fromEvent(watch(proposedFile), "all").pipe(
    mergeMap(() => readFile(proposedFile, "utf-8")),
    retry(10),
    map((sdl) => parse(sdl)),
    catchError((err) => of(undefined)),
    startWith(undefined)
  );

  // fetch mocks from javascript file on every file change
  const mocks = fromEvent(watch(mocksFile), "all").pipe(
    mergeMap(() => importFresh(resolve(process.cwd(), mocksFile))),
    map((mod) => mod.default ?? mod),
    map((m) => ({ ...defaultMocks, ...m })),
    retry(),
    startWith(defaultMocks)
  );

  // combine above observables into objects for execution
  return combineLatest([studioSchema, proposed, mocks]).pipe(
    map(([studioTypeDefs, proposed, mocks]) => {
      // mergeTypeDefs mutates its arguments
      const studioTypeDefsClone = JSON.parse(JSON.stringify(studioTypeDefs));
      const merged = mergeTypeDefs(
        [studioTypeDefsClone, proposed, mockDirectivesDefs].filter(mergeFilter)
      );

      const combinedSchema = addMockDirectives(buildASTSchema(merged));
      const remoteSchema = buildASTSchema(studioTypeDefs);

      return {
        combinedSchema,
        remoteSchema,
        mocks,
      };
    })
  );
}

/** @type {(_: any) => _ is import("graphql").DocumentNode} */
const mergeFilter = (_) => _;
