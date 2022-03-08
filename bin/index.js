#!/usr/bin/env node

import { Builtins, Cli } from "clipanion";
import DefaultCommand from "../src/commands/default.js";

const [node, app, ...args] = process.argv;

const cli = new Cli({
  binaryLabel: `My Application`,
  binaryName: `xxx`,
  binaryVersion: `1.0.0`,
  enableCapture: true,
  enableColors: true,
});

cli.register(DefaultCommand);
cli.register(Builtins.HelpCommand);
cli.runExit(args);
