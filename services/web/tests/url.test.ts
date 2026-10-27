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

  it("never glues base to favicon without a slash", () => {
    // Regression: `${base}favicon.svg` with BASE_URL=/mondrian-project → 404
    expect(withBase("/favicon.svg", "/mondrian-project")).toBe(
      "/mondrian-project/favicon.svg",
    );
    expect(withBase("/favicon.svg", "/mondrian-project/")).toBe(
      "/mondrian-project/favicon.svg",
    );
  });
});
