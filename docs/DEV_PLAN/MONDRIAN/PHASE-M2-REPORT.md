<!--
Mondrian Project — PHASE-M2 report. Implementer stops at VERIFYING; DONE is cold review + owner.
Author: Rubén Vega Balbás, PhD · owner flip 7 November 2026
-->

# PHASE-M2 report

**Status:** DONE  
**Date:** 2026-11-07  
**Implementer:** Cursor agent (instructor machine) — spine 29 Oct; triage 7 Nov  
**Owner flip:** 2026-11-07 after cold-review FAIL + F1–F4 / F7 triage  
**Cold review:** [`PHASE-M2-COLD-REVIEW.md`](PHASE-M2-COLD-REVIEW.md) (FAIL → blockers closed)  
**Cascade amended:** PHASE-M2 Acceptance (structural js=n/a; MVP catalog omit weight stubs); schema README; D-21 variation table; TEAM-ASSIGNMENTS B1-T4 → M4; MVP-PRODUCT-SPEC / PHASE-M6 variation lists; INDEX + cascade programme snapshot.

---

## 1. Deliverables

| Deliverable | Path | Notes |
| --- | --- | --- |
| Work schema | `packages/works/schema/work.schema.json` + README | Andrzejewski §3.2 points/rects/lines |
| Zod mirror | `packages/works/schema/work.zod.js` | Shared by Astro + conformance (Zod 4) |
| Surface/state/recipe | `packages/matrix/schema/*.schema.json` | `variationId` MVP enum without weight stubs |
| Reference work 1 | `packages/works/works/kunsthaus-1930-rbby/` | `review.status: proposal` (accepted for M2) |
| Fixtures | `packages/works/fixtures/` | valid + structural/semantic broken |
| JS matrix | `packages/matrix/src/*` | no Svelte; vitest 13 |
| Python | `packages/works/python` | derive / vary / catalog; pytest 8 |
| Catalog emit | `scripts/emit_catalog.py` + web `prebuild` | 5 variations × json/svg = 10 |
| Conformance | `scripts/conformance.sh` | `schema\|js\|zod\|py` + `plan=equal` |
| Astro collection | `services/web/src/content.config.ts` | shared zod schema |

---

## 2. Acceptance checklist

| Acceptance | Result | Evidence |
| --- | --- | --- |
| conformance exit 0; `schema=ok js=ok zod=ok py=ok plan=equal` | **PASS** | `./scripts/conformance.sh` 7 Nov 2026 |
| Structural: schema+zod+py reject; `js=n/a` | **PASS** | Amended Acceptance (F2); transcript |
| Semantic: JS/py reject | **PASS** | conformance transcript |
| `@mondrian/matrix` vitest | **PASS** | 13 passed |
| State / recipe / liquid-fill tests | **PASS** | matrix suite |
| MVP catalog; no identity clones; no weight stubs | **PASS** | F3 omit amend; hash guard in conformance |
| MEASUREMENT honesty; proposal kept | **PASS** | cold decision: no blocking remeasure |
| `astro build` + patterns in dist | **PASS** | `assert-patterns.mjs` |
| `astro check` | **PASS** | 0 errors (F7) |
| Works collection count = 1 | **PASS** | `assert-works-collection.mjs` |
| Catalog wired into build/CI | **PASS** | web prebuild + `pnpm check` + CI uv-before-pnpm (F4) |
| Cold review filed; blockers closed | **PASS** | this triage |
| `packages/matrix` no svelte | **PASS** | rg |

---

## 3. Cold-review triage

| ID | Disposition |
| --- | --- |
| **F1** | Fixed — zod column via `work.zod.js` |
| **F2** | Amended — structural uses schema+zod+py; JS `n/a` when schema rejects |
| **F3** | Amended/omitted — weight stubs removed from catalog + enums; B1-T4 owns remaps |
| **F4** | Fixed — `emit_catalog` in web prebuild + root `pnpm check` + CI |
| F5 | Improved with shared zod (provenance discriminators) |
| F6 | Nit — dual-mutation wording; not blocking |
| **F7** | Fixed — `@astrojs/check` green |
| Ref-1 | Keep `proposal`; M3 must not quote as accepted catalogue truth |

---

## 4. Verification commands (7 Nov 2026)

```text
node -v                                          # v24.22.1
./scripts/conformance.sh                         # exit 0
pnpm --filter @mondrian/matrix test              # 13 passed
uv run pytest packages/works/python/tests -q     # 8 passed
BASE=/mondrian-project pnpm --filter @mondrian/web build  # exit 0
pnpm --filter @mondrian/web run check            # 0 errors
```

---

## 5. Leftovers (do not block M2 DONE)

1. Reference work 1 remains `proposal` — second measure before About quotes numbers.  
2. Weight remaps B1-T4 (M4 lane).  
3. US rights unresolved (M0 carry).  
4. Seats 5–7 CODEOWNERS placeholders; collaborators not yet invited (classroom ops, not M2 contract).  
5. Mutation-proof Acceptance bullets partially sampled in cold review; optional permanent unit for `checkRefs` isolation (F6).

---

## 6. Next

M2 **DONE** → M3 **READY**. Do not invent weight variations in M3/M6 UI until B1-T4 lands.
