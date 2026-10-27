import { describe, expect, it } from "vitest";
import { withBase } from "../src/lib/url";

describe("withBase", () => {
  it("prefixes the project base", () => {
    expect(withBase("/contribute/", "/mondrian-project/")).toBe(
      "/mondrian-project/contribute/",
    );
  });

  it("handles bare root base", () => {
    expect(withBase("/contribute/", "/")).toBe("/contribute/");
  });
});
