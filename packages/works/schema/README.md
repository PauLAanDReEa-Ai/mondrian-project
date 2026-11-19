# Work schema — source / semantic / derived

Geometry adapts **Andrzejewski et al. 2010 §3.2** only (grid points, rectangles,
explicit black lines). Not the paper’s classifier, MLE generator, or authenticity
claims. See [`../docs` path in product](../../../docs/DEV_PLAN/MONDRIAN/grounding/ANDRZEJEWSKI-2010.md).

## Who owns the contract (classroom)

**`work.schema.json` is the single source.** Python does **not** generate TypeScript
interfaces. Zod (`work.zod.mjs`) and pydantic (`mondrian_work_schema.models`) are
hand-written mirrors; Ajv runs this file; `scripts/conformance.sh` requires
`schema|js|zod|py` plus identical JS/Python **render-plan** JSON. “Derived” means
geometry tracks / SVG items from `work.yml` — never codegen of TS types from Python.

## Three columns

| Layer | Lives in | Responsibility |
| --- | --- | --- |
| **Source** | `work.yml` | Measured primitives: points, rectangles, lines, swatches, provenance, rights |
| **Semantic** | JS `validateWork` + pydantic `Work` | Ordered points, 0/1 borders, refs, no plane overlap, ≥1 chromatic + ≥1 line |
| **Derived** | render plan JSON | Tracks `dᵢ = bᵢ₊₁ − bᵢ`, SVG items — **never** written back into `work.yml` |

## Plane silhouette (`clip`, D-38)

Optional on each `geometry.rectangles[]` entry:

```json
"clip": { "shape": "circle" }
```

`shape` ∈ `rect` | `circle` | `triangle`. Absent ≡ rectangular AABB. This is a
**fixed silhouette enum** for the editor lab (SVG `clipPath`), not freeform paths,
masks-as-bitmaps, or a second corpus schema. Catalog neoplastic works stay
rectangles unless a lab intentionally sets `clip`.

## Formulas

| Symbol | Meaning |
| --- | --- |
| `u = p / L` | Point position normalized by axis length |
| `τ = t / L⊥` | Line thickness normalized by perpendicular canvas axis |
| `dᵢ = bᵢ₊₁ − bᵢ` | Track weight between consecutive boundary positions |

## Line weight scale

Requested scale is clamped to `[0.25, min(2, canvasLimit, neighbourLimit)]` where
canvasLimit = `2 × min(c,1−c) / τ` and neighbourLimit uses adjacent parallel
lines that overlap in extent. Edges are never clipped individually.

## Colour

Roles: red / yellow / blue / black / white (+ optional gray extension).
Non-chromatic roles never rotate with `--theta`. Lines are black overlays
(`z=1`), not inferred from black planes.

## Catalog variations (MVP)

| Id | Effect | Where |
| --- | --- | --- |
| `original` | Measured work | catalog |
| `mirror-h` / `mirror-v` | Reflect partition | JS + Python |
| `rotate-180` | Both mirrors | JS + Python |
| `invert-contrast` | Role flip (red↔blue, black↔white); edges unchanged | JS + Python |

**Deferred (B1-T4):** `invert-rank`, `complement`, `reciprocal`, `equalize` —
closed-form remaps of measured visible-cell area shares only. D-21 forbids
shipping identity stubs. Do not re-enable in `catalog.VARIATIONS` until formulas
are written here and conformance proves each artefact differs from `original`.

## Out of scope

Material colour variation, brush texture, generation, authenticity scoring.
