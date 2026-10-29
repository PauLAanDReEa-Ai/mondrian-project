/** Semantic validation for Mondrian work objects. Returns {ok, path?, message?} */

const CHROMATIC = new Set(["red", "yellow", "blue"]);
const ROLES = new Set(["red", "yellow", "blue", "black", "white", "gray"]);

/**
 * @param {object} work
 * @returns {{ ok: true } | { ok: false, path: string, message: string }}
 */
export function validateWork(work) {
  try {
    checkPoints(work);
    checkRefs(work);
    checkRectangles(work);
    checkLines(work);
    checkSwatches(work);
    return { ok: true };
  } catch (e) {
    return { ok: false, path: e.path || "", message: e.message || String(e) };
  }
}

function fail(path, message) {
  const err = new Error(message);
  err.path = path;
  throw err;
}

function checkPoints(work) {
  for (const axis of ["x", "y"]) {
    const pts = work.geometry?.points?.[axis];
    if (!Array.isArray(pts) || pts.length < 2) {
      fail(`geometry.points.${axis}`, "need ≥2 points");
    }
    const ids = new Set();
    let prev = -Infinity;
    let has0 = false;
    let has1 = false;
    pts.forEach((p, i) => {
      const base = `geometry.points.${axis}[${i}]`;
      if (!p?.id) fail(`${base}.id`, "missing id");
      if (ids.has(p.id)) fail(`${base}.id`, "duplicate point id");
      ids.add(p.id);
      if (typeof p.position !== "number") fail(`${base}.position`, "not a number");
      if (p.position < prev) fail(`${base}.position`, "positions must be non-decreasing");
      if (p.position === prev) fail(`${base}.position`, "positions must be strictly increasing");
      prev = p.position;
      if (p.position === 0) has0 = true;
      if (p.position === 1) has1 = true;
    });
    if (!has0 || !has1) fail(`geometry.points.${axis}`, "missing 0/1 border points");
  }
}

function pointMap(work) {
  const map = { x: new Map(), y: new Map() };
  for (const axis of ["x", "y"]) {
    for (const p of work.geometry.points[axis]) map[axis].set(p.id, p.position);
  }
  return map;
}

function checkRefs(work) {
  const map = pointMap(work);
  work.geometry.rectangles.forEach((r, i) => {
    const base = `geometry.rectangles[${i}]`;
    for (const id of r.x || []) {
      if (!map.x.has(id)) fail(`${base}.x`, `unknown point ${id}`);
    }
    for (const id of r.y || []) {
      if (!map.y.has(id)) fail(`${base}.y`, `unknown point ${id}`);
    }
  });
  work.geometry.lines.forEach((ln, i) => {
    const base = `geometry.lines[${i}]`;
    if (ln.orientation === "h") {
      if (!map.y.has(ln.center)) fail(`${base}.center`, "unknown y point");
      for (const id of ln.extent || []) {
        if (!map.x.has(id)) fail(`${base}.extent`, `unknown point ${id}`);
      }
    } else if (ln.orientation === "v") {
      if (!map.x.has(ln.center)) fail(`${base}.center`, "unknown x point");
      for (const id of ln.extent || []) {
        if (!map.y.has(id)) fail(`${base}.extent`, `unknown point ${id}`);
      }
    } else fail(`${base}.orientation`, "invalid orientation");
  });
}

function checkRectangles(work) {
  const map = pointMap(work);
  let chromatic = 0;
  const planes = [];
  work.geometry.rectangles.forEach((r, i) => {
    const base = `geometry.rectangles[${i}]`;
    const x0 = map.x.get(r.x[0]);
    const x1 = map.x.get(r.x[1]);
    const y0 = map.y.get(r.y[0]);
    const y1 = map.y.get(r.y[1]);
    if (!(x0 < x1)) fail(`${base}.x`, "rectangle x must be ordered");
    if (!(y0 < y1)) fail(`${base}.y`, "rectangle y must be ordered");
    if (!ROLES.has(r.role)) fail(`${base}.role`, "invalid role");
    if (CHROMATIC.has(r.role)) chromatic += 1;
    if (r.role !== "white") planes.push({ x0, x1, y0, y1, i, role: r.role });
  });
  if (chromatic < 1) fail("geometry.rectangles", "need ≥1 chromatic plane");
  // interior overlap among non-white planes
  for (let a = 0; a < planes.length; a++) {
    for (let b = a + 1; b < planes.length; b++) {
      const A = planes[a];
      const B = planes[b];
      const ox = Math.min(A.x1, B.x1) - Math.max(A.x0, B.x0);
      const oy = Math.min(A.y1, B.y1) - Math.max(A.y0, B.y0);
      if (ox > 1e-12 && oy > 1e-12) {
        fail(`geometry.rectangles[${B.i}]`, "overlapping coloured/black planes");
      }
    }
  }
}

function checkLines(work) {
  const map = pointMap(work);
  if (!work.geometry.lines?.length) fail("geometry.lines", "need ≥1 explicit line");
  const parallels = { h: [], v: [] };
  work.geometry.lines.forEach((ln, i) => {
    const base = `geometry.lines[${i}]`;
    if (!(ln.thickness > 0)) fail(`${base}.thickness`, "thickness must be positive");
    let c;
    let e0;
    let e1;
    if (ln.orientation === "h") {
      c = map.y.get(ln.center);
      e0 = map.x.get(ln.extent[0]);
      e1 = map.x.get(ln.extent[1]);
    } else {
      c = map.x.get(ln.center);
      e0 = map.y.get(ln.extent[0]);
      e1 = map.y.get(ln.extent[1]);
    }
    if (!(e0 < e1)) fail(`${base}.extent`, "line extent must be ordered");
    const half = ln.thickness / 2;
    if (c - half < -1e-12 || c + half > 1 + 1e-12) {
      fail(`${base}.thickness`, "line edges outside canvas");
    }
    parallels[ln.orientation].push({ c, half, i, e0, e1 });
  });
  for (const ori of ["h", "v"]) {
    const arr = parallels[ori];
    for (let a = 0; a < arr.length; a++) {
      for (let b = a + 1; b < arr.length; b++) {
        const A = arr[a];
        const B = arr[b];
        const overlap = Math.min(A.e1, B.e1) - Math.max(A.e0, B.e0);
        if (overlap <= 0) continue;
        if (Math.abs(A.c - B.c) < A.half + B.half - 1e-12) {
          fail(`geometry.lines[${B.i}]`, "colliding parallel lines");
        }
      }
    }
  }
}

function checkSwatches(work) {
  const used = new Set(work.geometry.rectangles.map((r) => r.role));
  for (const role of used) {
    if (role === "white") continue;
    const sw = work.swatches?.[role];
    if (!sw?.measured) fail(`swatches.${role}`, "missing measured swatch");
    const { h, s, l } = sw.measured;
    if (!(h >= 0 && h < 360)) fail(`swatches.${role}`, "h must be in [0,360)");
    if (!(s >= 0 && s <= 100 && l >= 0 && l <= 100)) {
      fail(`swatches.${role}`, "s/l out of range");
    }
  }
}
