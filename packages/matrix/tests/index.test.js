import { describe, expect, it } from "vitest";
import { matrixStub } from "../src/index.js";

describe("@mondrian/matrix", () => {
  it("imports", () => {
    expect(matrixStub()).toBe("ok");
  });
});
