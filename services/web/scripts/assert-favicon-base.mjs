#!/usr/bin/env node
/**
 * Fail if built HTML glues base + favicon without a slash
 * (regression for BaseLayout `${base}favicon.svg`).
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const dist = join(import.meta.dirname, "..", "dist", "index.html");
if (!existsSync(dist)) {
  console.error("assert-favicon-base: dist/index.html missing — run build first");
  process.exit(1);
}
const html = readFileSync(dist, "utf8");
if (html.includes("/mondrian-projectfavicon.svg")) {
  console.error("assert-favicon-base: FAIL glued favicon path (missing slash after base)");
  process.exit(1);
}
if (!html.includes('href="/mondrian-project/favicon.svg"')) {
  console.error(
    "assert-favicon-base: FAIL expected href=\"/mondrian-project/favicon.svg\" in dist",
  );
  process.exit(1);
}
console.log("assert-favicon-base: OK");
