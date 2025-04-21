import cors from "cors";
import express, { json } from "express";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { serialize } from "../serialize/index.js";
import { execute } from "./execution.js";

const thisDir = dirname(fileURLToPath(import.meta.url));

/**
 * @param {{
 *  graphref: string | undefined,
 *  proposedFile: string,
 *  sources: () => import("../types").Sources | undefined;
 *  remoteEndpoint: string | undefined;
 *  port: number;
 * }} params
 */
export function createServer({
  graphref,
  proposedFile,
  sources,
  remoteEndpoint,
  port,
}) {
  const app = express();
  app.use(cors());

  app.use(express.static(resolve(thisDir, "../ui")));

  app.get("/data", async (_req, res) => {
    if (graphref) {
      res.json(await serialize(graphref, proposedFile));
    } else {
      res.json({ error: "missing graphref" });
    }
  });

  app.post("/", json(), async (req, res) => {
    const result = await execute(sources(), remoteEndpoint, req.body);
    res.json(result);
  });

  return app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}
