/**
 * Assert the works collection source has exactly one measured work (M2).
 * Astro getCollection is exercised at build via content.config; this guards the glob.
 */
import { readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../../..");
const worksDir = join(root, "packages/works/works");
const entries = readdirSync(worksDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .filter((name) => existsSync(join(worksDir, name, "work.yml")));

if (entries.length !== 1) {
  console.error(`assert-works-collection: expected 1 work.yml, found ${entries.length}:`, entries);
  process.exit(1);
}
if (entries[0] !== "kunsthaus-1930-rbby") {
  console.error("assert-works-collection: unexpected slug", entries[0]);
  process.exit(1);
}
console.log("assert-works-collection: ok 1:kunsthaus-1930-rbby");
