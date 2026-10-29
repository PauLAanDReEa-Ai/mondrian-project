<!--
M2 implementation handoff for cold review. Not a DONE report.
Author: implementation agent · 29 October 2026
-->

# PHASE-M2 handoff (VERIFYING)

**Status:** implementation complete for cold review — **do not treat as DONE** until `PHASE-M2-COLD-REVIEW.md` closes blocking findings.

## What shipped

| Deliverable | Path |
| --- | --- |
| Work schema (Andrzejewski §3.2) | `packages/works/schema/work.schema.json` + `README.md` |
| Surface / state / recipe schemas | `packages/matrix/schema/*.schema.json` |
| Reference work 1 | `packages/works/works/kunsthaus-1930-rbby/{work.yml,MEASUREMENT.md}` |
| Fixtures | `packages/works/fixtures/valid.yml` + broken structural/semantic |
| JS matrix | `packages/matrix/src/*` + `styles/matrix.css` + vitest |
| Python | `packages/works/python` — pydantic `Work`, derive, vary, catalog |
| Catalog artefacts | `services/web/public/patterns/kunsthaus-1930-rbby*.{json,svg}` |
| Conformance | `scripts/conformance.sh` → exit 0 (`plan=equal`) |
| Astro collection | `services/web/src/content.config.ts` (glob `*/work.yml`) |

## Verification run (29 Oct 2026)

```text
pnpm --filter @mondrian/matrix test   → 13 passed
uv run pytest packages/works/python/tests → 7 passed
./scripts/conformance.sh              → OK (schema|js|py + plan=equal)
pnpm --filter @mondrian/web build     → OK
```

## Measurement honesty

`kunsthaus-1930-rbby` is a **provisional** hand+rail measurement from the Commons 5918×6000 JPEG (~45 min wall time). Review status `proposal`. See `MEASUREMENT.md` for σ and method. Cold review should decide whether to accept or demand a second pass before M3 About quotes geometry numbers.

## Known limits / open acceptance items

1. Conformance zod column is via Astro `content.config.ts` schema, not a fourth printed column in `conformance.sh` (Ajv|JS|py printed; zod mirror exists).
2. Weight variations `invert-rank` / `complement` / `reciprocal` / `equalize` emit catalog clones of geometry (closed-form area rewrite not yet applied to planes) — document as MVP stub or implement area remaps before claiming full catalog invariant.
3. Mutation-proof acceptance bullets in PHASE-M2.md (deliberately break validators) not re-run in this handoff — cold reviewer should sample.
4. `getCollection('works')` not yet asserted on a page; collection loader wired — add a smoke import in cold review or M3.

## Cold review ask

- Confirm schema matches PHASE-M2 Andrzejewski table (point refs, not dense matrix).
- Spot-check SVG in `public/patterns/kunsthaus-1930-rbby.svg` against Commons composition.
- Decide accept vs re-measure for reference work 1.
- Then file `PHASE-M2-COLD-REVIEW.md`; only owner flips DONE.
