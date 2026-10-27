<!--
Mondrian Project — deferred / parallel work queue (not cascade phases).
Author: Rubén Vega Balbás, PhD · 25 October 2026
-->

# Work queue (parallel to M0–M9)

Items here are **authorized to plan** once their gate opens. They are not
cascade phases and must not block M0–M9 unless a row says so. Prefer the
smallest complete change when a row becomes READY.

| ID | Status | Depends on | Owner surface |
| --- | --- | --- | --- |
| **Q-FA1** | DONE (26 Oct 2026) | Bountis coat + DOI `10.1504/ijart.2017.083902` evaluator_safe | `fractal-architect` 1.3.0 + generator + pitch/course assets |
| **Q-FA2** | DONE (26 Oct 2026) | Q-FA1 + Andrzejewski cite-safe | visual-forger asset kit in `assets/kit/` (hand-rolled trees; preserved twin) |
| **Q-FA3** | DONE (26 Oct 2026) | Q-FA1 module + Q-FA2 matrix | kit-qfa1 twin (Q-FA1 trees); assets only |
| **Q-FA4** | DONE (27 Oct 2026) | Q-FA3 + colour/QA critique | `kit-qfa2` @ 2.1.0 — white canvas, colour gates, **neoplastic-macro** fractalizer |

---

## Q-FA1 — Fractal-architect “Mondrian tree” mode + public backgrounds

### Goal

1. Add a **Mondrian mode** to the studio `fractal-architect` skill, grounded on
   Bountis, Fokas & Psarakis, “Fractal analysis of tree paintings by Piet
   Mondrian (1872–1944),” *International Journal of Arts and Technology*
   (staging: `corpus-staging/04-bountis-fractal-tree-paintings.pdf`).
2. Forge a small family of **seeded backgrounds** for:
   - the **public web pitch** surface (instructor-facing public HTML for the
     Mondrian Project decision story — not the student brief);
   - the **visible web-atelier course web** (`web-foundations` / FE track
     pages), via the existing fractal delivery path
     (`npm run generate:pass-track-art` pattern under
     `web-foundations/scripts/fractal-architecture/`).

### Pedagogical boundary (hard)

Pitch §5 / D-12: early **tree** paintings are prologue (“what this matrix
refuses”). The MVP editor corpus remains **orthogonal Neo-Plastic** works with
a black armature. This mode must **never** be marketed as the product grammar
or as “algorithmic Mondrian authenticity.”

Public caption language: study / atmosphere after Mondrian’s early trees, or
fractal-analysis–informed recursive branching — not a new neoplastic painting.

### Skill home (edit when READY)

| Path | Role |
| --- | --- |
| `~/projects/…/digital-creativity-uem/digital-creativity-pedagogy/.cursor/skills/fractal-architect/SKILL.md` | Add grammar row + link |
| `…/fractal-architect/references/mondrian-tree-mode.md` | **Create** — mode contract (formula ledger, seeds, stops, crops) |
| `…/forge/FRACTAL-ARCHITECT-CASCADE.execute.md` | Optional Stage addendum pointer to this queue ID |

Caller remains `visual-forger`; fractal-architect owns the recursive system.

### Evidence gate (before PRODUCTION assets)

1. Confirm Ahmes vault for Bountis exists with `fission_node` count > 0.
2. `ahmes enrich --meta --online` coat; prefer `evaluator_safe` cites.
3. Athanor search under `mondrian-project`: fractal dimension / tree branching /
   early Mondrian landscape queries (see
   [`grounding/GRAPHRAG-PHASE-QUERIES.md`](grounding/GRAPHRAG-PHASE-QUERIES.md) §Q-FA1).
4. Promote only verified formulae or geometry-only rules into
   `references/mondrian-tree-mode.md`. Vector snippets stay discovery-only.
5. If formula transcription fails the skill’s fidelity gate → geometry-only
   L-system / branching mode with Chicago cite to Bountis as **inspiration
   limits**, not as copied equations.

### Deliverables when READY → DONE

| # | Artefact | Acceptance | Shipped |
| --- | --- | --- | --- |
| 1 | `references/mondrian-tree-mode.md` + SKILL.md grammar bullet | PLAN cold-read refuses unbounded “make it more Mondrian” | yes (`geometry_only`) |
| 2 | Generator script | Deterministic seeds; content-addressed SVG/PNG; no overwrite | `web-foundations/scripts/fractal-architecture/generate-mondrian-tree-backgrounds.mjs` |
| 3 | ≥3 pitch + ≥3 course backgrounds | Title-safe void; dark UDIT; static | release `2f46d8a42248a231` |
| 4 | Public `figcaption-data` + private receipt | No Ahmes/Athanor IDs in public JSON | pitch + course `caption-manifests/`; private `frontend-pedagogy/grounding/fractal-architecture/mondrian-tree-qfa1.private.json` |
| 5 | INDEX / pitch note | tree ≠ MVP corpus | yes |

**Regenerate:** `cd web-foundations && node scripts/fractal-architecture/generate-mondrian-tree-backgrounds.mjs`

---

## Q-FA2 — Full visual kit (favicon → baroque) in the plan directory

**Goal:** visual-forger + fractal-architect batch a kit of favicons, backgrounds,
textures, translucent fillings, figures, silhouettes, and isometric studies
across a density ladder (minimal → baroque), kept under
`forge/mondrian-project/assets/` with a provenance index.

**Shipped**

| Artefact | Path |
| --- | --- |
| Generator | [`scripts/generate-mondrian-asset-kit.mjs`](scripts/generate-mondrian-asset-kit.mjs) |
| Human index | [`assets/INDEX.md`](assets/INDEX.md) |
| Current pointer | [`assets/kit-current.json`](assets/kit-current.json) |
| Release | `assets/kit/release-ecaf67cb0ab1c057/` (41 assets) |

**Regenerate:** `node frontend-pedagogy/forge/mondrian-project/scripts/generate-mondrian-asset-kit.mjs`

---

## Q-FA3 — Q-FA1 kit twin (assets only)

**Goal:** Rebuild the same 41-asset matrix with trees from
`mondrian-tree-geometry` (Q-FA1 adapter); keep Q-FA2 kit immutable for A/B.

**Shipped**

| Artefact | Path |
| --- | --- |
| Shared geometry module | `web-foundations/scripts/fractal-architecture/lib/mondrian-tree-geometry.mjs` |
| Kit twin generator | [`scripts/generate-mondrian-asset-kit-qfa1.mjs`](scripts/generate-mondrian-asset-kit-qfa1.mjs) |
| Release | `assets/kit-qfa1/release-dd7ac8a068d23bd8/` (35 identical to Q-FA2; 6 tree assets differ) |
| Diff | [`assets/KIT-DIFF.md`](assets/KIT-DIFF.md) |
| Index | [`assets/INDEX.md`](assets/INDEX.md) · [`assets/INDEX-QFA1.md`](assets/INDEX-QFA1.md) |

**Libraries (in kit manifests):** fractal-architect@1.3.0 · visual-forger@1.3.0 ·
`mondrian-tree-geometry@1.0.0` · adapter `mondrian-tree-geometry-only-v1` ·
rsvg-convert · Node.

**Regenerate:** `node …/scripts/generate-mondrian-asset-kit-qfa1.mjs`

---

## Q-FA4 — Kit QA: colour + neoplastic macros (preferred)

**Goal:** Replace dark-on-dark / colour-weak neo renders and stop treating
fractal **trees** as product chrome. Apply the fractalizer to **orthogonal
Mondrian generators** (nested macro-forms) with colour harmony gates.

**Shipped**

| Artefact | Path |
| --- | --- |
| Generator | [`scripts/generate-mondrian-asset-kit-qfa2.mjs`](scripts/generate-mondrian-asset-kit-qfa2.mjs) `@2.1.0` |
| Release | `assets/kit-qfa2/release-83a2d71c19ea9786/` (51 assets: +10 macro) |
| Pointer | [`assets/kit-qfa2-current.json`](assets/kit-qfa2-current.json) |
| Index | [`assets/INDEX.md`](assets/INDEX.md) · [`assets/INDEX-QFA2.md`](assets/INDEX-QFA2.md) |
| Preview | `assets/kit-qfa2/release-83a2d71c19ea9786/preview.html` |

**QA vs qfa1:** white canvas + black armature ≥ 3:1; primaries required when
≥3 planes; gray ≤ 40% of coloured area; fill capped; nested macros clipped to
cells; trees labelled prologue only.

**Regenerate:** `node …/scripts/generate-mondrian-asset-kit-qfa2.mjs && … --check`

### Non-goals

- Replacing Andrzejewski / CSS Grid product representation.
- Ingesting museum photographs of paintings into the repo.
- Running a second full design-bibliography overnight for this mode alone.

### Resume paste (when coats exist)

```text
Execute WORK-QUEUE.md item Q-FA1 (Mondrian tree mode for fractal-architect +
pitch/web-atelier backgrounds). Read fractal-architect/SKILL.md and
visual-forger. Gate on Bountis Ahmes coat under mondrian-project before any
PRODUCTION render. Honour pitch §5: trees are prologue, not the neoplastic
matrix. Ship content-addressed assets only; no path overwrites.
```
