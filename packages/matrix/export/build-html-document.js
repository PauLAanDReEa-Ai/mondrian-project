/**
 * Client-side standalone HTML export (D-26).
 * Embeds the current SVG full-bleed in a document the visitor can open offline.
 * No server. Seat 7 owns this module once moved into packages/.
 */

/**
 * @param {object} opts
 * @param {string} opts.svgMarkup — serialized <svg>…</svg> (no outer HTML)
 * @param {string} [opts.title]
 * @param {string} [opts.credit]
 * @param {string} [opts.recipeUrl] — optional absolute recipe URL for humans
 * @returns {string} complete HTML5 document
 */
export function buildHtmlDocument({
  svgMarkup,
  title = "Mondrian study",
  credit = "",
  recipeUrl = "",
}) {
  if (typeof svgMarkup !== "string" || !svgMarkup.includes("<svg")) {
    throw new Error("buildHtmlDocument: svgMarkup must include an <svg> root");
  }

  const safeTitle = escapeHtml(title);
  const safeCredit = escapeHtml(credit);
  const recipeBlock = recipeUrl
    ? `<p class="recipe"><a href="${escapeAttr(recipeUrl)}">${escapeHtml(recipeUrl)}</a></p>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${safeTitle}</title>
<style>
  :root { color-scheme: light; }
  html, body { margin: 0; height: 100%; background: #fff; color: #111; }
  body { display: flex; flex-direction: column; font-family: system-ui, sans-serif; }
  header { padding: 0.75rem 1rem; border-bottom: 1px solid #ddd; font-size: 0.875rem; }
  main { flex: 1; min-height: 0; display: grid; place-items: center; padding: 1rem; }
  main svg { width: min(100%, 100vh); height: auto; max-height: 100%; }
  .credit { color: #444; }
  .recipe { word-break: break-all; font-size: 0.75rem; }
  @media print {
    header { display: none; }
    main { padding: 0; }
    main svg { width: 100%; max-height: none; }
  }
</style>
</head>
<body>
<header>
  <strong>${safeTitle}</strong>
  ${safeCredit ? `<div class="credit">${safeCredit}</div>` : ""}
  ${recipeBlock}
</header>
<main>
${svgMarkup.trim()}
</main>
</body>
</html>`;
}

/**
 * Trigger a browser download of the HTML document.
 * @param {string} html
 * @param {string} [filename]
 */
export function downloadHtmlDocument(html, filename = "mondrian-study.html") {
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/**
 * QR capacity gate: full HTML+SVG inside a QR is almost never viable.
 * @param {string} payload
 * @param {number} [maxBytes=2200] — leave headroom under QR v40 binary ~2953
 * @returns {{ ok: boolean, bytes: number, reason: string }}
 */
export function assessQrPayload(payload, maxBytes = 2200) {
  const bytes = new TextEncoder().encode(payload).length;
  if (bytes > maxBytes) {
    return {
      ok: false,
      bytes,
      reason: `Payload ${bytes} B exceeds QR-safe budget ${maxBytes} B. Use recipe URL + HTML download (D-26).`,
    };
  }
  if (payload.startsWith("data:")) {
    return {
      ok: false,
      bytes,
      reason: "data: URIs are unreliable in phone camera QR readers. Prefer https recipe URL.",
    };
  }
  return { ok: true, bytes, reason: "within budget" };
}

/**
 * Build the handheld/kiosk handoff URL (what the QR should encode).
 * Encodes the Recipe *form* only — never SVG markup or full work JSON (D-27).
 * Typical MVP query length ≈ 120–180 characters.
 *
 * Pass the **canonical public origin** (GitHub Pages), not window.location
 * when the kiosk is on localhost/LAN — phones cannot open those (D-27 §4.4).
 *
 * @param {string} origin — e.g. https://example.github.io/mondrian-project
 * @param {string} workId
 * @param {Record<string, string | number | boolean>} recipeParams
 *   e.g. { surface: "sticker-50", var: "mirror-h", fx: 0.08, fy: 0.08, fw: 0.84, fh: 0.84, theta: 12 }
 */
export function buildRecipeUrl(origin, workId, recipeParams = {}) {
  const base = origin.replace(/\/$/, "");
  const url = new URL(`${base}/create/${encodeURIComponent(workId)}/`);
  for (const [key, value] of Object.entries(recipeParams)) {
    if (value === undefined || value === null || value === "") continue;
    url.searchParams.set(key, String(value));
  }
  return url.toString();
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(s) {
  return escapeHtml(s).replaceAll("'", "&#39;");
}
