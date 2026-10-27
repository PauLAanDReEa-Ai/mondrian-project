<!--
Mondrian Project — PHASE-M0 report. Implementer stops at VERIFYING; DONE is cold review + owner.
Author: Rubén Vega Balbás, PhD · 26 October 2026
-->

# PHASE-M0 report

**Status:** DONE  
**Date:** 2026-10-26 · **owner flip:** 2026-10-27  
**Implementer:** Cursor agent (instructor machine / Tanit)  
**Cold review:** filed [`PHASE-M0-COLD-REVIEW.md`](PHASE-M0-COLD-REVIEW.md) — initial verdict **FAIL** (F1). F1–F6 closed in triage (27 Oct 2026): F1 reproduction W×H+crop; F2 M1 status; F3 baseline wording; F4 §1 retitle (no `proposed` D-row); F5 inject proof = prior COMPLETED id + live search (re-inject skipped); F6 Core URL recorded as follow-redirects. **Owner flipped DONE** 27 Oct 2026 after triage.  
**Cascade amended:** `MONDRIAN-CASCADE.md` (D-02 Astro 7; D-21…D-32; §1 retitle); `PHASE-M1.md`; `INDEX.md`; `PHASE-M0.md`; `grounding/ABOUT-MONDRIAN-VALUE.md`; `corpus/REFERENCE-WORKS.md` (+ SIGraDi RIS, Composition A / No. VI growth).

---

## 1. Grounding receipt

Full command transcript: [`grounding/M0-GROUNDING-RECEIPT.md`](grounding/M0-GROUNDING-RECEIPT.md). Summary:

| Check | Result |
| --- | --- |
| Andrzejewski Ahmes `status` | **118** nodes, 202 entities, 73 relations; DOI `10.1117/12.840558`; `evaluator_safe=yes` (exit 0) |
| Meta enrich | Skipped — bibliography already present |
| Athanor `--dry-run` | Requires `--from-manifest` (exit 2 without; exit 0 with) |
| Live inject | **Re-inject skipped** (would risk duplicate write). Zero-failed evidence = prior COMPLETED id `9a1a8bb5-05ff-4340-88bd-fbc10268a50f` (`profield-frontend-pedagogy`) + scoped live search returning injected document (F5) |
| Theme cite-gates | 12 Andrzejewski nodes evaluator-safe (formal / lines / colour / style / faux / authenticity) |
| Voice corpus | `CORPUS-OVERNIGHT.md` **DONE**; 7 primary Mondrian 1986 cites evaluator-safe for M0 query bank |
| DevIAC GraphRAG | **Fail-closed** — Cursor `AHMES_VAULT_DIR` ≠ `~/ahmes-library/scholar` |
| Özgün & Alaçam 2021 (SIGraDi) | PDF + 129 nodes; **operator RIS coat** DOI `10.5151/sigradi2021-72` → `(Özgün 2021, …)` `evaluator_safe=yes` (27 Oct) |
| D-05 standards URLs | JSON Schema 2020-12 Core/Validation + CSS Grid Level 2 recorded with **follow-redirects** (bare Core path may 308 → `/…/json-schema-core`; final **200** — F6) |
| Wisconsin 2010 dataset | Licence **unresolved**; §3.2 geometry **maps** to `work.schema.json` |

Andrzejewski JSON companion remains [`grounding/ANDRZEJEWSKI-2010.json`](grounding/ANDRZEJEWSKI-2010.json) (pre-existing).

---

## 2. Decisions (cascade §1 → ratified)

Copied from [`MONDRIAN-CASCADE.md`](MONDRIAN-CASCADE.md) §1. Every row **`ratified`**. Zero `proposed`.

| ID | Status | Evidence (one line) |
| --- | --- | --- |
| D-01 Repository | **ratified** | Pitch risk 44 / Strand B cohort shape; path `~/projects/ruvebal/scholar/udit/courses-repos/mondrian-project/` named in cascade; no department veto recorded 26 Oct 2026 |
| D-02 Generator | **ratified** | Live `pnpm create astro@latest` → `astro@^7.4.2` (exit 0, throwaway deleted); `withastro/action@v6` tags exist through `v6.1.4`; cascade amended Astro 6→**7** same change |
| D-03 Routing | **ratified** | Product requires URL state for QR (`MVP-PRODUCT-SPEC.md`); Astro file routes make hash SPA unnecessary |
| D-04 Packages | **ratified** | `uv 0.13.5` (exit 0); `uv python install 3.12` → **3.12.15** via `uv run --python 3.12` (exit 0); system python remains 3.14.7 |
| D-05 Schema | **ratified** | Andrzejewski §3.2 anchors + cite-gates in `M0-GROUNDING-RECEIPT.md`; JSON Schema 2020-12 + CSS Grid L2 URLs recorded |
| D-06 Framework ladder | **ratified** | FE I: no Bootstrap/Tailwind/Vite in product; **GSAP absorbed for `/about/` only** (D-29, 27 Oct) — S11 evidence |
| D-07 Hue | **ratified** | Pitch §7 formula + rationale §4.1 relative colour Baseline 2024; CSS owns θ |
| D-08 Renderers | **ratified** | Pedagogical claim in rationale §4.2; CSS Grid visible / SVG export / canvas PNG-only |
| D-09 API | **ratified** | FastAPI as LAN analysis service only; public site must survive API absence (`MVP-PRODUCT-SPEC.md`) |
| D-10 Kiosk | **ratified** | Rationale §6 two profiles; media-feature approach unchanged |
| D-11 Licences | **ratified** | Same MIT + CC BY-NC-SA 4.0 pattern as TTOD / hc-app-design |
| D-12 Corpus | **ratified** | Three works filed in [`corpus/REFERENCE-WORKS.md`](corpus/REFERENCE-WORKS.md) with catalogue dims + EU PD / US unresolved |
| D-13 Plans | **ratified** | Astro publishes `src/pages/` only; `docs/plans/<handle>/` namespace stands |
| D-14 Ethics/institution | **ratified** | Committee position 22 Oct (pitch); `_private/CORREO-DEPARTAMENTO-ECSIT-ES.md` adapted from TTOD (code MP-FEI-2026-27); status **pending** send |
| D-15 Nomenclature | **ratified** | Pitch §5 + voice corpus primary coats; Kandinsky not used for orthogonal corpus |
| D-16 Surface and state | **ratified** | `MVP-PRODUCT-SPEC.md` §3 wins over older game descriptions |
| D-17 Export and print | **ratified** | Product spec export/print contract; SVG canonical |
| D-18 Story motion | **ratified** (amended by **D-29**) | No Framer; About = GSAP ScrollTrigger parallax; reduced-motion / no-JS complete |
| D-19 Contribution governance | **ratified** | TTOD cohort Git feedback absorbed in sufficiency review + M1 contract |
| D-20 AI-critical operation | **ratified** | [`AI-CRITICAL-OPERATING-ADDENDUM.md`](AI-CRITICAL-OPERATING-ADDENDUM.md) required; shared rubric remains summative |

**Not BLOCKED:** no D-row awaits a department answer before M1 scaffolding (D-14 letters pending does not block git init; D-01 path assumed until remote name confirmed at push).

---

## 3. Probe table

| Tool | Instructor (26 Oct 2026, arm64) | Exit | Student laptop |
| --- | --- | --- | --- |
| `node -v` | **v24.22.1** (nvm; was 22.22.0 at first probe — upgraded 27 Oct per D-28) | 0 | **not yet** — owner: instructor (students need ≥24.22.1 before M1 workshop) |
| `pnpm -v` | 10.30.0 | 0 | not yet |
| `uv --version` | 0.13.5 | 0 | not yet |
| `python3 --version` | 3.14.7 | 0 | not yet |
| `uv run --python 3.12` | 3.12.15 | 0 | not yet |
| `git --version` | 2.53.0 | 0 | not yet |
| `gh --version` | 2.101.0 | 0 | not yet |
| TensorFlow | **not probed** | — | optional learned-classifier extension only (not MVP) |

---

## 4. Baseline re-check (rationale §4.1 — M0 dated statuses)

| Feature | Status 26 Oct 2026 | URL / source |
| --- | --- | --- |
| View transitions (cross-document) | Chrome/Safari yes; Firefox **partial** (caniuse `a #2`); MDN `@view-transition` Firefox false | caniuse `cross-document-view-transitions`; MDN BCD |
| Scroll-driven animations | Chrome 115+; Firefox **159+**; Safari 26+ | MDN BCD `animation-timeline` |
| Keyboard Lock | Chrome/Edge only; Firefox/Safari false | MDN BCD `Keyboard.lock` |
| web.dev Baseline 2026 | page HTTP 200; container style queries still newly available | https://web.dev/baseline/2026 |

Fallback rows in the rationale **unchanged** (hard navigation / `@keyframes` / no Keyboard Lock dependency).

---

## 5. Communications

| Draft | Path | Tracked status | Date | Owner |
| --- | --- | --- | --- | --- |
| Department / degree / ECSIT IP | `_private/CORREO-DEPARTAMENTO-ECSIT-ES.md` (gitignored) | **pending** | draft ready 26 Oct 2026 | instructor |
| Student preflight | `_private/EMAIL-ALUMNADO-PREFLIGHT-ES.md` (gitignored) | **pending** | draft exists | instructor |

No recipient addresses or reply contents in this tracked report. **Do not send** from the agent — human sends.

---

## 6. Reference works + rights

[`corpus/REFERENCE-WORKS.md`](corpus/REFERENCE-WORKS.md):

1. Square-ish — Kunsthaus 1930 *Composition with Red, Blue and Yellow* (45×45 cm museum / 46×46 RKD)  
2. Vertical — Folkwang 1927 *Composition with Red, Yellow and Blue* (75×52 cm)  
3. Horizontal — Tate 1935 *Composition B (No.II) with Red* (63.3×80.3 cm)  

EU PD for all three; US **unresolved** for public starter. Reproduction **pixel size + full-frame crop** recorded 26 Oct 2026 (fetched to `/tmp` only; no photos in forge). Tate raster needs tighter crop at M2 (F1 close-out).

**Growth (27 Oct, not in M0 three):** Composition A / GNAM Commons **2216×2204**; Tate *No. VI* (Q28554669 / T00915) **992×1000**. Grow later from [Category talk:Paintings by Piet Mondrian](https://commons.wikimedia.org/wiki/Category_talk:Paintings_by_Piet_Mondrian). D-12 caution on Comp A (grey in title) and 1920 date.

**SIGraDi 2021:** Özgün & Alaçam coated from owner RIS (DOI `10.5151/sigradi2021-72`); cite-gate green. Conference https://www.sigradi.org/sigradi2021/.

---

## 7. Files touched this phase

- `grounding/M0-GROUNDING-RECEIPT.md` (new)
- `grounding/corpus-staging/11-kocer-…pdf` (acquired by grounding agent; discovery)
- `corpus/REFERENCE-WORKS.md` (new)
- `MONDRIAN-CASCADE.md`, `PHASE-M0.md`, `PHASE-M1.md`, `INDEX.md`, `grounding/ABOUT-MONDRIAN-VALUE.md`
- `_private/*` date line only (gitignored)
- this report

---

## 8. Uncertainties / resume

1. Student-laptop probe column empty until one machine is checked.  
2. US rights + reproduction clearance before any public starter URL.  
3. Koçer coat repair optional; not on M1 critical path.  
4. GraphRAG vault-root mismatch remains fail-closed for Cursor MCP.

**Closed:** Owner flipped M0 → **DONE** 27 Oct 2026. M1 skeleton was already on `main` (process amendment recorded in INDEX / M1 report); remaining M1 leftovers = branch protection, cold review, seats 5–7, unsent letters.

**Owner claim:** Acceptance met; cold-review blockers closed; M0 is **DONE**.
