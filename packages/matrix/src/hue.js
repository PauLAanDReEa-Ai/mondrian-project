/** Theta wrap + HSL inversion helpers. */

import { wrapTheta } from "./state.js";

/**
 * Apply visitor theta to a measured chromatic swatch.
 * Non-colours unchanged.
 */
export function applyTheta(swatch, role, theta) {
  if (role === "black" || role === "white" || role === "gray") {
    return { ...swatch };
  }
  const t = wrapTheta(theta);
  return {
    h: (swatch.h + t) % 360,
    s: swatch.s,
    l: swatch.l,
  };
}

/** Exact HSL involution for paletteMode=inverted (product spec). */
export function invertHsl({ h, s, l }) {
  return {
    h: (h + 180) % 360,
    s,
    l: 100 - l,
  };
}

export function cssSupportsRelativeColor() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("color", "hsl(from red calc(h + 10deg) s l)");
}

/**
 * Fallback fill when relative colour syntax is unavailable.
 */
export function computedFill(role, swatch, theta, paletteMode) {
  let hsl = applyTheta(swatch, role, theta);
  if (paletteMode === "inverted") hsl = invertHsl(hsl);
  return `hsl(${hsl.h} ${hsl.s}% ${hsl.l}%)`;
}

export { wrapTheta };
