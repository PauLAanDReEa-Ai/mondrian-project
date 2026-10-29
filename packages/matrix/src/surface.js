/** Surface presets and printable area helpers. */

export const PRESETS = {
  "sticker-50": { width: 50, height: 50, orientation: "square" },
  "sticker-70": { width: 70, height: 70, orientation: "square" },
  "sticker-100x70": { width: 100, height: 70, orientation: "landscape" },
  a6: { width: 105, height: 148, orientation: "portrait" },
  a5: { width: 148, height: 210, orientation: "portrait" },
  a4: { width: 210, height: 297, orientation: "portrait" },
};

/**
 * @param {string} preset
 * @param {object} [margins]
 */
export function surfaceFromPreset(preset, margins = { top: 0.04, right: 0.04, bottom: 0.04, left: 0.04 }) {
  const p = PRESETS[preset];
  if (!p) throw new Error(`unknown preset ${preset}`);
  return {
    preset,
    width: p.width,
    height: p.height,
    unit: "mm",
    orientation: p.orientation,
    margins: { ...margins },
  };
}

/** Normalize orientation swap for landscape A-series. */
export function withOrientation(surface, orientation) {
  const out = structuredClone(surface);
  out.orientation = orientation;
  if (orientation === "landscape" && out.height > out.width) {
    [out.width, out.height] = [out.height, out.width];
  } else if (orientation === "portrait" && out.width > out.height) {
    [out.width, out.height] = [out.height, out.width];
  } else if (orientation === "square") {
    const s = Math.min(out.width, out.height);
    out.width = s;
    out.height = s;
  }
  return out;
}

/** Printable area in normalized [0,1] coords of the paper. */
export function printableArea(surface) {
  const m = surface.margins;
  return {
    x: m.left,
    y: m.top,
    width: 1 - m.left - m.right,
    height: 1 - m.top - m.bottom,
  };
}
