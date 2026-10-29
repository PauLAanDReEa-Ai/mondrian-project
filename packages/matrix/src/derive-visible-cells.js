/** Topmost visible role cells + area shares (statistics only). */

/**
 * @param {object} plan deriveRenderPlan output
 * @returns {{ cells: object[], areaShares: Record<string, number> }}
 */
export function deriveVisibleCells(plan) {
  const xs = [0, ...plan.xTracks.map((t) => t.end)];
  const ys = [0, ...plan.yTracks.map((t) => t.end)];
  const items = [...plan.items].sort((a, b) => a.z - b.z);
  const cells = [];
  const area = {};

  for (let i = 0; i < xs.length - 1; i++) {
    for (let j = 0; j < ys.length - 1; j++) {
      const x0 = xs[i];
      const x1 = xs[i + 1];
      const y0 = ys[j];
      const y1 = ys[j + 1];
      const cx = (x0 + x1) / 2;
      const cy = (y0 + y1) / 2;
      let role = "white";
      for (const it of items) {
        if (cx >= it.x0 && cx < it.x1 && cy >= it.y0 && cy < it.y1) {
          role = it.role;
        }
      }
      const w = x1 - x0;
      const h = y1 - y0;
      cells.push({ x0, x1, y0, y1, role, area: w * h });
      area[role] = (area[role] || 0) + w * h;
    }
  }
  return { cells, areaShares: area };
}
