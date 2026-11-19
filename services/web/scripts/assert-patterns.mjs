/**
 * Fail the web build if the build-time catalog is missing from dist/.
 */
import { existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const distPatterns = join(root, "dist", "patterns");
const required = [
  "kunsthaus-1930-rbby.json",
  "kunsthaus-1930-rbby.svg",
  "kunsthaus-1930-rbby--mirror-h.json",
  "kunsthaus-1930-rbby--invert-contrast.json",
];

if (!existsSync(distPatterns)) {
  console.error("assert-patterns: dist/patterns missing — run catalog emit before astro build");
  process.exit(1);
}

const present = new Set(readdirSync(distPatterns));
const missing = required.filter((name) => !present.has(name));
if (missing.length) {
  console.error("assert-patterns: missing", missing.join(", "));
  process.exit(1);
}

// Weight stubs must not ship (M2 triage F3).
const banned = [...present].filter((name) =>
  /--(invert-rank|complement|reciprocal|equalize)\./.test(name),
);
if (banned.length) {
  console.error("assert-patterns: banned weight stub artefacts", banned.join(", "));
  process.exit(1);
}

console.log(`assert-patterns: ok (${present.size} files in dist/patterns)`);
