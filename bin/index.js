#!/usr/bin/env node

import { Builtins, Cli } from "clipanion";
import DefaultCommand from "../src/commands/default.js";

const [_, __, ...args] = process.argv;

const cli = new Cli({
  binaryLabel: `Apollo Faker (Demo)`,
  binaryName: `apollo-faker-demo`,
  binaryVersion: `1.0.0`,
  enableCapture: true,
  enableColors: true,
});

cli.register(DefaultCommand);
cli.register(Builtins.HelpCommand);
cli.runExit(args);
