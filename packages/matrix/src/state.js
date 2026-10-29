/** CompositionState defaults, clamp, maximize, URL recipe round-trip. */

import { printableArea, surfaceFromPreset, withOrientation } from "./surface.js";
import { clampLineWeightScale } from "./derive-render-plan.js";

const FORMAT_ASPECT = {
  original: null,
  "1-1": 1,
  "5-4": 5 / 4,
  "4-5": 4 / 5,
  "16-9": 16 / 9,
  "9-16": 9 / 16,
  custom: null,
};

/**
 * @param {object} work
 * @param {object} surface
 */
export function defaultState(work, surface) {
  const aspect = work.canvas.width / work.canvas.height;
  const area = printableArea(surface);
  const frame = maximizeFrame(aspect, area);
  return {
    workId: work.id,
    formatId: "original",
    variationId: "original",
    frame,
    theta: 0,
    paletteMode: "direct",
    reflectX: false,
    reflectY: false,
    lineWeightScale: 1,
    fitMode: "liquid-fill",
  };
}

/**
 * Largest centred rectangle of `aspect` (w/h) inside `area`.
 * @param {number} aspect
 * @param {{x,y,width,height}} area
 */
export function maximizeFrame(aspect, area) {
  const boxAspect = area.width / area.height;
  let width;
  let height;
  if (aspect >= boxAspect) {
    width = area.width;
    height = width / aspect;
  } else {
    height = area.height;
    width = height * aspect;
  }
  return {
    x: area.x + (area.width - width) / 2,
    y: area.y + (area.height - height) / 2,
    width,
    height,
  };
}

/**
 * Keep frame inside printable area (edges clamped).
 */
export function clampFrame(frame, surface) {
  const area = printableArea(surface);
  let { x, y, width, height } = frame;
  width = Math.min(Math.max(width, 1e-6), area.width);
  height = Math.min(Math.max(height, 1e-6), area.height);
  x = Math.min(Math.max(x, area.x), area.x + area.width - width);
  y = Math.min(Math.max(y, area.y), area.y + area.height - height);
  return { x, y, width, height };
}

/**
 * @param {object} work
 * @param {object} state
 */
export function sanitizeState(work, state) {
  const out = structuredClone(state);
  out.theta = wrapTheta(out.theta);
  out.lineWeightScale = clampLineWeightScale(work, out.lineWeightScale);
  out.fitMode = "liquid-fill";
  if (!FORMAT_ASPECT[out.formatId]) out.formatId = "custom";
  return out;
}

export function wrapTheta(theta) {
  if (!Number.isFinite(theta)) return 0;
  const t = ((theta % 360) + 360) % 360;
  return t;
}

/** Deterministic query-string recipe. */
export function serializeRecipe(recipe) {
  const s = recipe.surface;
  const c = recipe.compositionState;
  const q = new URLSearchParams();
  q.set("surface", s.preset);
  q.set("orient", s.orientation);
  q.set("w", String(s.width));
  q.set("h", String(s.height));
  q.set("mt", String(s.margins.top));
  q.set("mr", String(s.margins.right));
  q.set("mb", String(s.margins.bottom));
  q.set("ml", String(s.margins.left));
  q.set("work", c.workId);
  q.set("fmt", c.formatId);
  q.set("var", c.variationId);
  q.set("fx", String(c.frame.x));
  q.set("fy", String(c.frame.y));
  q.set("fw", String(c.frame.width));
  q.set("fh", String(c.frame.height));
  q.set("theta", String(c.theta));
  q.set("pal", c.paletteMode);
  q.set("rx", c.reflectX ? "1" : "0");
  q.set("ry", c.reflectY ? "1" : "0");
  q.set("lw", String(c.lineWeightScale));
  return q.toString();
}

/**
 * @param {string} query
 * @param {object} work fallback work for defaults
 */
export function parseRecipe(query, work) {
  const q = new URLSearchParams(query.startsWith("?") ? query.slice(1) : query);
  const preset = q.get("surface") || "sticker-50";
  let surface;
  try {
    surface = surfaceFromPreset(preset);
  } catch {
    surface = surfaceFromPreset("sticker-50");
  }
  if (q.has("w")) surface.width = num(q.get("w"), surface.width);
  if (q.has("h")) surface.height = num(q.get("h"), surface.height);
  surface = withOrientation(surface, q.get("orient") || surface.orientation);
  surface.margins = {
    top: num(q.get("mt"), surface.margins.top),
    right: num(q.get("mr"), surface.margins.right),
    bottom: num(q.get("mb"), surface.margins.bottom),
    left: num(q.get("ml"), surface.margins.left),
  };
  const base = defaultState(work, surface);
  const compositionState = sanitizeState(work, {
    ...base,
    workId: q.get("work") || work.id,
    formatId: q.get("fmt") || base.formatId,
    variationId: q.get("var") || base.variationId,
    frame: clampFrame(
      {
        x: num(q.get("fx"), base.frame.x),
        y: num(q.get("fy"), base.frame.y),
        width: num(q.get("fw"), base.frame.width),
        height: num(q.get("fh"), base.frame.height),
      },
      surface,
    ),
    theta: wrapTheta(num(q.get("theta"), 0)),
    paletteMode: q.get("pal") === "inverted" ? "inverted" : "direct",
    reflectX: q.get("rx") === "1",
    reflectY: q.get("ry") === "1",
    lineWeightScale: num(q.get("lw"), 1),
  });
  return { surface, compositionState };
}

function num(v, fallback) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}
