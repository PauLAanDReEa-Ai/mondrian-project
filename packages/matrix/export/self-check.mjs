/**
 * Assert-based self-check for export helpers (no test runner required).
 * Run: node scaffold/export/self-check.mjs
 */
import {
  assessQrPayload,
  buildHtmlDocument,
  buildRecipeUrl,
} from "./build-html-document.js";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#fff"/><rect x="10" y="10" width="40" height="40" fill="#c00"/></svg>`;

const html = buildHtmlDocument({
  svgMarkup: svg,
  title: "Self-check",
  credit: "geometric study after …",
  recipeUrl: "https://example.test/create/demo/?theta=12",
});

console.assert(html.includes("<!DOCTYPE html>"), "html doctype");
console.assert(html.includes(svg.trim()), "svg embedded");
console.assert(html.includes("geometric study"), "credit present");

const recipe = buildRecipeUrl("https://example.test/mondrian/", "comp-i", {
  surface: "a4",
  variation: "mirror-h",
  theta: 15,
});
console.assert(
  recipe ===
    "https://example.test/mondrian/create/comp-i/?surface=a4&variation=mirror-h&theta=15",
  `unexpected recipe: ${recipe}`,
);

const fat = assessQrPayload(`data:text/html,${html}`);
console.assert(fat.ok === false, "fat data URI must fail QR gate");
console.assert(fat.bytes > 2200 || fat.reason.includes("data:"), fat.reason);

const thin = assessQrPayload(recipe);
console.assert(thin.ok === true, thin.reason);

console.log("export self-check: ok");
