import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(fileURLToPath(import.meta.url));

describe("@mondrian/editor Probe", () => {
  it("ships the probe marker", () => {
    const src = readFileSync(join(root, "../src/Probe.svelte"), "utf8");
    expect(src).toContain('data-mondrian-probe="ok"');
  });
});
