import { Command, Option } from "clipanion";
import { config } from "dotenv";
import { observeSources } from "../sources.js";
import { createServer } from "../server/index.js";

config();

export default class DefaultCommand extends Command {
  static paths = [Command.Default];

  graphref = Option.String("--graphref");

  remoteEndpoint = Option.String("--remote");

  proposedFile = Option.String("--proposed", "proposed.graphql");

  mocksFile = Option.String("--mocks", "mocks.js");

  port = Option.String("--port", "4000");

  async execute() {
    /** @type {import("../types.js").Sources | undefined} */
    let sources;

    const subscription = observeSources({
      graphref: this.graphref,
      proposedFile: this.proposedFile,
      mocksFile: this.mocksFile,
    }).subscribe((_) => (sources = _));

    const server = createServer({
      graphref: this.graphref,
      proposedFile: this.proposedFile,
      sources: () => sources,
      remoteEndpoint: this.remoteEndpoint,
      port: +this.port,
    });

    process.on("exit", () => {
      server.close();
      subscription.unsubscribe();
    });
  }
}
