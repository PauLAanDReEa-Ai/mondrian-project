import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

const base = process.env.BASE || "/mondrian-project";

export default defineConfig({
  site: process.env.SITE || "https://ruvebal.github.io",
  base,
  integrations: [svelte()],
  outDir: "dist",
});
