# D-30 — Liquid frame refactor (supersedes preserve-ratio MVP fit)

**Status:** `adopted` · **Date:** 2026-10-27 · **Owner amend, pre-M1**  
**Supersedes:** D-16 / D-22 / D-24 clauses that set MVP fit = `preserve-ratio` letterbox; D-21 “frame aspect ratio preserved by default”; cascade hard rule “Do not stretch the partition.”

---

## Decision

When the visitor **corner-drags the containing frame**, they change the frame’s
**free aspect ratio** (not locked to the source canvas). The measured
column/row **fractions** are re-applied to the new frame width and height
independently. The pattern **fills the frame edge-to-edge** (`liquid-fill`).
Absolute cell shapes change; the **mathematical rhythm** (relative `fr`
tracks, line roles, colour assignment) stays. That is the product joke:
*refactor Mondrian by changing the frame.*

Further visitor transforms (mirrors, rotate 180°, rank/complement/reciprocal/
equalize, contrast invert, hue θ, palette invert, line-weight scale) compose
**on top of** the current liquid frame. They do not restore letterboxing.

---

## Why (owner product intent)

Earlier cascade text treated stretch-to-fill as a falsification of the ratio
claim and deferred “refit” to Phase 2. That was wrong for this product.
The measured work’s native aspect is only the **starting** frame. Dragging
corners is how the visitor authors another neoplastic version adapted to a
new rectangle while keeping the partition’s relative rhythm. Letterboxing
the original inside a larger empty frame would hide the joke.

---

## Fit modes

| Mode | Behaviour | When |
| --- | --- | --- |
| **`liquid-fill` (MVP default)** | Pattern viewBox / Grid tracks map 0…1 → full frame. `colᵢ` × `frame.w`, `rowⱼ` × `frame.h`. No letterbox bands. | Always after load and after every corner drag |
| **`preserve-ratio`** | Uniform scale, centred letterbox inside the frame | **Not MVP.** Optional later “show original canvas inset” for pedagogy/compare chrome |
| **`refit` (solver)** | Algorithm changes the fraction *values* to satisfy new constraints | **Phase 2** — distinct from liquid-fill |

---

## Interaction law (amends D-24)

**In MVP:**

1. Load work → containing frame maximised at the work’s **native** aspect
   inside `printableArea` (`fmt=original`).
2. **Format chips** (D-31) switch aspect and re-maximise in `printableArea`.
3. Corner handles resize the frame with **free** aspect (`fmt=custom`); clamp
   to `printableArea` and min size.
4. On every frame geometry change, re-derive the SVG (or Grid preview) with
   **`liquid-fill`**: same fractions, new absolute geometry.
5. Variations / colorimetry / line weight apply to that current fill.
6. Internal dividers and junctions remain **not** draggable (still Phase 2).

**Still not MVP:**

- Dragging internal edges / nodes (changes neighbour fractions interactively).
- A solver that rewrites fraction vectors (`refit`).
- Edge-midpoint handles on the frame (corners are enough).

---

## Hierarchy

```text
Viewport
└── paper silhouette          ← letterboxed in viewport if needed (D-27)
    └── printableArea
        └── containing frame  ← free aspect via corners; URL fx,fy,fw,fh
            └── pattern       ← liquid-fill: fractions → full frame
```

Paper-in-viewport letterboxing stays. Pattern-in-frame letterboxing does **not**.

---

## Conformance / tests

- Changing only `fw`/`fh` (aspect) must change absolute rectangle geometry
  while leaving source `work.yml` and catalog fractions deep-equal.
- Σ column fractions = 1; Σ row fractions = 1; no gaps/overlaps after liquid-fill.
- Native-aspect start: frame aspect equals `canvas.w / canvas.h` within ε.
- Compare/reset restores measured original **and** native frame aspect.
- Automated gates: replace “preserve-ratio fit” with “liquid-fill invariants”.

---

## Docs touched by this decision

`MVP-PRODUCT-SPEC.md`, `MONDRIAN-CASCADE.md` (D-16/D-22/D-24 rows + hard rules
+ amend table), `MONDRIAN-RATIONALE.md`, `PHASE-M2.md`, `PHASE-M6.md`,
`TEAM-ASSIGNMENTS.md` (U6-T2), `INDEX.md`, `DECISIONS/D27-…` nesting diagram,
`DECISIONS/D21-D25-…` fit clauses (historical; this file wins).
