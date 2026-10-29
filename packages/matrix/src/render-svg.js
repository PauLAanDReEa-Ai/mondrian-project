/** Serialize a render plan to an SVG string (viewBox 0 0 1 1). */

/**
 * @param {object} plan
 * @returns {string}
 */
export function renderSvg(plan) {
  const parts = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1" width="100%" height="100%">',
  ];
  const sorted = [...plan.items].sort((a, b) => a.z - b.z || a.id.localeCompare(b.id));
  for (const it of sorted) {
    const w = it.x1 - it.x0;
    const h = it.y1 - it.y0;
    parts.push(
      `<rect data-kind="${it.kind}" data-role="${it.role}" data-id="${escapeAttr(it.id)}" x="${n(it.x0)}" y="${n(it.y0)}" width="${n(w)}" height="${n(h)}" class="${it.kind === "line" ? "line" : "plane"}"/>`,
    );
  }
  parts.push("</svg>");
  return parts.join("");
}

function n(v) {
  return Number(v).toFixed(9).replace(/\.?0+$/, (m) => (m.startsWith(".") ? "" : m));
}

function escapeAttr(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}
