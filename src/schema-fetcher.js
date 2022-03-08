import { GraphQLClient } from "graphql-request";
import { getSdk } from "./studio/graphql.js";

/**
 * @param {string} graphref
 * @returns {Promise<string | undefined>}
 */
export async function fetchApiSchema(graphref) {
  if (!process.env.APOLLO_KEY) {
    console.error("missing APOLLO_KEY");
    process.exit(1);
  }

  const [serviceId, variant] = graphref.split("@");
  const variables = { serviceId, variant };
  const client = new GraphQLClient(
    "https://graphql.api.apollographql.com/api/graphql",
    {
      headers: {
        "x-api-key": process.env.APOLLO_KEY ?? "",
      },
    }
  );
  const sdk = getSdk(client);

  const data = await sdk.LatestApprovedLaunch(variables);
  if (
    data.service?.variant?.latestApprovedLaunch?.build?.result?.__typename ===
    "BuildSuccess"
  ) {
    const sdl =
      data.service.variant.latestApprovedLaunch.build.result.coreSchema
        .apiDocument;

    return sdl;
  }
}

/**
 * @param {string} graphref
 * @returns {Promise<string | undefined>}
 */
export async function fetchSupergraphSchema(graphref) {
  if (!process.env.APOLLO_KEY) {
    console.error("missing APOLLO_KEY");
    process.exit(1);
  }

  const [serviceId, variant] = graphref.split("@");
  const variables = { serviceId, variant };
  const client = new GraphQLClient(
    "https://graphql.api.apollographql.com/api/graphql",
    {
      headers: {
        "x-api-key": process.env.APOLLO_KEY ?? "",
      },
    }
  );
  const sdk = getSdk(client);

  const data = await sdk.LatestApprovedLaunch(variables);
  if (
    data.service?.variant?.latestApprovedLaunch?.build?.result?.__typename ===
    "BuildSuccess"
  ) {
    const sdl =
      data.service.variant.latestApprovedLaunch.build.result.coreSchema
        .coreDocument;

    return sdl;
  }
}

/**
 * @param {string} graphref
 * @returns {Promise<{ [key: string]: string }>}
 */
export async function fetchSubgraphSdls(graphref) {
  if (!process.env.APOLLO_KEY) {
    console.error("missing APOLLO_KEY");
    process.exit(1);
  }

  const [serviceId, variant] = graphref.split("@");
  const variables = { serviceId, variant };
  const client = new GraphQLClient(
    "https://graphql.api.apollographql.com/api/graphql",
    {
      headers: {
        "x-api-key": process.env.APOLLO_KEY ?? "",
      },
    }
  );
  const sdk = getSdk(client);

  const data = await sdk.SubgraphSdls(variables);

  if (
    data.service?.implementingServices?.__typename ===
    "FederatedImplementingServices"
  ) {
    const services = data.service.implementingServices.services;

    return Object.fromEntries(
      services.map((service) => {
        return [service.name, service.activePartialSchema.sdl];
      })
    );
  }

  return {};
}
