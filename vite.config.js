import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const rootDir = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(rootDir, "ui"),
  plugins: [svelte()],
  build: {
    outDir: resolve(rootDir, "src/ui"),
  },
  server: {
    proxy: {
      "/data": "http://localhost:4000",
    },
  },
});
