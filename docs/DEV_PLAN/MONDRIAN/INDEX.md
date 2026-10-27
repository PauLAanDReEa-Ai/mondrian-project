<!--
Mondrian Project — cascade pack index (two faces: product owner / technical director).
Author: Rubén Vega Balbás, PhD · 25 October 2026 · amended 27 October 2026 (D-21…D-27; M0 F3–F6).
Lives here until PHASE-M1 moves the pack into the product repository (docs/DEV_PLAN/MONDRIAN/).
-->

# The Mondrian Project — cascade pack

**Status:** ACTIVE cascade (M0–M9). Adopted 25 Oct 2026 as the Front-End I 2026–27 semester-1 integrator. This is **not** the student brief (M9 writes it, EN + ES, last) and **not** a course page (nothing here is published by `web-foundations`).
**Author:** Rubén Vega Balbás, PhD · `ruvebal@crea-comm.net`
**Readers:** department / research group / instructor → rationale first; implementing agent → cascade second.

## How to read this pack

| Face | File | Question it answers |
| --- | --- | --- |
| Product owner | [`MONDRIAN-RATIONALE.md`](MONDRIAN-RATIONALE.md) | Why this project, for whom it is worth what, the sitemap from the visitor's side, kiosk vs handheld, why the Python lane is front-end work, how the cohort is organised, what the ethics position requires. |
| Product contract | [`MVP-PRODUCT-SPEC.md`](MVP-PRODUCT-SPEC.md) | Exact user journey, liquid-fill free-aspect frame (D-30), catalog variations, SVG editor, export/print, MVP acceptance. Wins over older game descriptions. |
| Stack / MVP amend | [`DECISIONS/D21-D25-2026-10-27-ASTRO-SVELTE-SVG-MVP.md`](DECISIONS/D21-D25-2026-10-27-ASTRO-SVELTE-SVG-MVP.md) | Canonical blend of the 27 Oct thread: Astro host, Svelte island, SVG canvas, build-time Python catalog, Addendum B (no node dragging, no runtime FastAPI), cohort git surfaces. |
| Export / QR / generative | [`DECISIONS/D26-2026-10-27-EXPORT-QR-GENERATIVE.md`](DECISIONS/D26-2026-10-27-EXPORT-QR-GENERATIVE.md) | Client HTML+SVG download; QR = recipe URL (not HTML-in-QR); FastAPI “Make your own Mondrian” as last Phase-2 feature; token barrel. |
| Print / stickers / URL form | [`DECISIONS/D27-2026-10-27-PRINT-STICKERS-URL-RECIPE.md`](DECISIONS/D27-2026-10-27-PRINT-STICKERS-URL-RECIPE.md) | Sticker-first presets; stage = paper; Print giveaway; query params ≈150 B Recipe (never SVG/JSON work in `?`). |
| Node security pin | [`DECISIONS/D28-2026-10-27-NODE-SECURITY-PIN.md`](DECISIONS/D28-2026-10-27-NODE-SECURITY-PIN.md) | **Node ≥24.22.1** (Oct 2026 CVEs); `.nvmrc` / `engines` / CI; no EOL ≤20. |
| About GSAP parallax | [`DECISIONS/D29-2026-10-27-ABOUT-GSAP-PARALLAX.md`](DECISIONS/D29-2026-10-27-ABOUT-GSAP-PARALLAX.md) | `/about/` ScrollTrigger parallax (S11); reduced-motion kill; no GSAP on editor/kiosk. |
| Liquid frame refactor | [`DECISIONS/D30-2026-10-27-LIQUID-FRAME-REFACTOR.md`](DECISIONS/D30-2026-10-27-LIQUID-FRAME-REFACTOR.md) | Free-aspect corners; pattern **liquid-fills** the frame (same fractions → new Mondrian). Supersedes preserve-ratio MVP. |
| Format aspect presets | [`DECISIONS/D31-2026-10-27-FORMAT-ASPECT-PRESETS.md`](DECISIONS/D31-2026-10-27-FORMAT-ASPECT-PRESETS.md) | Aspect chips + maximise-in-paper; game = texture → format → variations → version. |
| Cohort seats | [`TEAM-ASSIGNMENTS.md`](TEAM-ASSIGNMENTS.md) | Seats 1–2 backend, 3–5 storytelling, 6–7 app UI; student task specs; CODEOWNERS mapping. |
| Pre-M1 scaffold | [`scaffold/`](scaffold/) | Token CSS barrel, `work.schema.json` draft, HTML export helpers (+ self-check), generate-request schema, CODEOWNERS example, **`.nvmrc` 24.22.1** + engines (D-28). |
| Technical director | [`MONDRIAN-CASCADE.md`](MONDRIAN-CASCADE.md) | D-01…D-26, ordered programme with falsifiable gates, master paste, hard constraints, layer map, closing protocol, resume rule, amendments to the pitch, target repository layout. |
| Private correspondence | `_private/` (gitignored) | Student preflight and department/ECSIT emails. Only status/dates enter tracked reports; addresses, replies and signed material remain private. |
| Grounding | [`grounding/ANDRZEJEWSKI-2010.md`](grounding/ANDRZEJEWSKI-2010.md) · [`JSON`](grounding/ANDRZEJEWSKI-2010.json) · [`prior-art queue`](grounding/PRIOR-ART-DISCOVERY.md) · [`corpus overnight`](grounding/CORPUS-OVERNIGHT.md) · [`phase GraphRAG queries`](grounding/GRAPHRAG-PHASE-QUERIES.md) · [`About value`](grounding/ABOUT-MONDRIAN-VALUE.md) | Ahmes extraction, Athanor injection/retrieval, full node/page anchors, limits, unresolved gates; overnight primary/secondary Mondrian corpus under Athanor slug `mondrian-project`. |
| Origin | [`PITCH.md`](PITCH.md) | The 22 Oct decision document: matrix, hue formula, frame contract, art-historical contract, rights, 50 risks. Still authoritative where the cascade §7 does not amend it. |
| AI grading sufficiency | [`AI-EVALUATION-SUFFICIENCY-REVIEW.md`](AI-EVALUATION-SUFFICIENCY-REVIEW.md) | Instructor-only: spine vs operational gaps vs TTOD close-out; what to add before M1 templates freeze. |
| AI operating contract | [`AI-CRITICAL-OPERATING-ADDENDUM.md`](AI-CRITICAL-OPERATING-ADDENDUM.md) | Required PR log, human/assistant verification boundary, formative checkpoint and instructor signs; shared rubric remains the only summative instrument. |
| Git / contribution sufficiency | [`GIT-HYGIENE-AND-CONTRIBUTION-SUFFICIENCY-REVIEW.md`](GIT-HYGIENE-AND-CONTRIBUTION-SUFFICIENCY-REVIEW.md) | Instructor-only: port TTOD Git hygiene + PR-review automation; rewrite CONTRIBUTING from student M1 feedback. |
| Parallel work queue | [`WORK-QUEUE.md`](WORK-QUEUE.md) | Non-blocking items (e.g. Q-FA1 fractal-architect Mondrian tree mode + pitch/course backgrounds after Bountis coat). |
| Phases | [M0](PHASE-M0.md) preflight · [M1](PHASE-M1.md) `git init` → Pages + Svelte probe · [M2](PHASE-M2.md) contracts + catalog · [M3](PHASE-M3.md) shell/story · [M4](PHASE-M4.md) analyzer · [M5](PHASE-M5.md) LAN API · [M6](PHASE-M6.md) Svelte+SVG editor · [M7](PHASE-M7.md) kiosk · [M8](PHASE-M8.md) corpus (parallel) · [M9](PHASE-M9.md) research + brief | One paste-ready runbook each. Do not invert. |

Closing: each phase → VERIFYING → `PHASE-Mn-COLD-REVIEW.md` → amend if needed → `PHASE-Mn-REPORT.md` → DONE. The implementer never self-certifies.

## One-sentence claims

- **Product:** a kiosk-first and handheld editor where a measured Mondrian
  composition enters an A4/digital surface at its original ratio, the containing
  frame is corner-resized (free aspect, liquid-fill), predefined variations apply,
  and the visitor saves SVG/HTML/CSV/PNG and prints—every source number
  preserved and every visitor change reproducible, offline, with no server.
- **Engineering:** immutable work data plus separate surface/state contracts;
  vanilla ESM + zod/pydantic conformance; Svelte island draws live SVG; CSS Grid
  remains gallery/About pedagogy from the same plan; Python catalog at build;
  FastAPI is LAN analysis (M5) and Phase-2 generative last; Astro 7 static/offline Pages app.

## Programme snapshot

| Step | Deliverable | Status |
| --- | --- | --- |
| M0 | Decisions ratified, probes, private communications, reference works + rights | VERIFYING |
| M1 | Repo from `git init`, Astro 7 + Svelte probe, `packages/editor`, CI/Pages, Git/PR/AI contract (D-25 CODEOWNERS) | BLOCKED (M0) |
| M2 | Andrzejewski primitives, SVG+Grid render plan, catalog generator, surface/state/`variationId`, conformance, reference work | BLOCKED (M1) |
| M3 | Product shell, gallery CSS Grid miniatures, About story/About Us/method | BLOCKED (M2) |
| M4 | Classical analyzer + line weights + evaluation (Python lane) | BLOCKED (M2) |
| M5 | API JSON + HTML/CSS and SVG preview; no public runtime calls | BLOCKED (M2; M4 for `/analyze`) |
| M6 | Svelte+SVG editor: frame, catalog variations, export, calibrated print | BLOCKED (M3) |
| M7 | Kiosk/PWA + QR handoff + real touch device | BLOCKED (M6) |
| M8 | Corpus: references 2–3 + one work per student (parallel lane) | BLOCKED (M2) |
| M9 | Declaration, pseudonymisation, defence, brief EN/ES, dataset, abstract | BLOCKED (M7, M8) |

## Trigger readiness (27 Oct 2026)

| Gate | State |
| --- | --- |
| Decisions D-01…D-29 | Adopted / ratified (D-29 = About GSAP ScrollTrigger parallax) |
| Product contract | [`MVP-PRODUCT-SPEC.md`](MVP-PRODUCT-SPEC.md) matches Addendum B + D-26 |
| Student seats + task specs | [`TEAM-ASSIGNMENTS.md`](TEAM-ASSIGNMENTS.md) |
| Real starter code | [`scaffold/`](scaffold/) (export self-check green) |
| M0 | Still **VERIFYING** — cold review must close before M1 `git init` |
| Product repo | **Do not create** until M1 is explicitly started |

## Live snapshot (26 Oct 2026 — M0 preflight; **updated 27 Oct 2026** D-21…D-26)

| Fact | Value | Where checked |
| --- | --- | --- |
| Branch base | `mondrian-project-cascade` | `git branch --show-current`, 26 Oct 2026 |
| Node / pnpm / Python (system) | **v24.22.1** (nvm default; D-28) / 10.30.0 / 3.14.7 | `node -v` 27 Oct 2026 after Oct security pin; Homebrew `node@22` uninstalled |
| Python via uv (product pin) | **3.12.15** | `uv python install 3.12` + `uv run --python 3.12` (exit 0) |
| `uv` installed | **yes: 0.13.5** | `uv --version`, 26 Oct 2026 |
| Astro create dry-run | **`astro@^7.4.2`** (throwaway deleted); npm latest 7.4.2; Astro 6.4.8 still on registry | `pnpm create astro@latest`, 26 Oct 2026 |
| `withastro/action@v6` | exists (tags `v6`…`v6.1.4`; default Node 24) | `gh api` tags + README, 26 Oct 2026 |
| Andrzejewski paper grounding | 118 nodes, 202 entities, 73 relations; Athanor injection complete; scoped retrieval resolved full UUIDs/pages | [`grounding/ANDRZEJEWSKI-2010.md`](grounding/ANDRZEJEWSKI-2010.md) |
| Bibliographic gate | DOI `10.1117/12.840558`; APA and node citations evaluator-safe at confidence 0.95 | Ahmes manual DOI dry-run + live Crossref verification + `query --cite --require-evaluator-safe` |
| Remaining grounding limit | DevIAC GraphRAG cannot see the `scholar` library under its current vault root | Receipt records the fail-closed capability check; Athanor full-node retrieval succeeded |
| Baseline 2026 newly available | container style queries, `@scope`, `field-sizing`, `contrast-color()`, `shape()`, anchor positioning (Jan 2026), `crisp-edges`, active view transition | web.dev/baseline/2026; MDN `anchor()` |
| `if()`, `@function` | not Baseline; limited | web.dev/baseline/2026 (absent); State of CSS 2026 |
| Astro current major | **7.4.2** (M0 dry-run); D-02 + **D-28** Astro 7 + `withastro/action@v6` + **Node ≥24.22.1** | npm view; nodejs.org Oct 2026 security releases; [`DECISIONS/D28-…`](DECISIONS/D28-2026-10-27-NODE-SECURITY-PIN.md) |
| pnpm Python support | experimental, pnpm 12.4+; uv workspace shared env in 12.5 | pnpm.io/python; pnpm.io/blog/releases/12.5 |
| Screen Wake Lock | Baseline 2025; HTTPS; released on hidden | MDN Screen Wake Lock API |
| Keyboard Lock | Chrome/Edge only; Firefox/Safari false (BCD); Chrome Esc unlock ~2 s | MDN BCD `Keyboard.lock` + M0 report §4 — 26 Oct 2026 |
| Prior DH work | Andrzejewski, Stork, Zhu, Spronk (2010) is Ahmes-resolved; other candidates remain discovery-only | [`grounding/ANDRZEJEWSKI-2010.md`](grounding/ANDRZEJEWSKI-2010.md) · [`grounding/PRIOR-ART-DISCOVERY.md`](grounding/PRIOR-ART-DISCOVERY.md) |
| Mondrian voice corpus overnight | **DONE** 2026-10-26T01:47Z — 10/10 PROCESSED_OK + inject; morning cite repair → `(Mondrian 1986, …)` evaluator_safe on plastic means / equilibrium / Neo-Plastic nodes | [`grounding/CORPUS-OVERNIGHT.md`](grounding/CORPUS-OVERNIGHT.md) · [`morning status`](grounding/logs/morning-status-2026-10-26.md) |
| Q-FA1 fractal Mondrian mode | **DONE** — geometry_only tree mode in fractal-architect 1.3.0; 3 pitch + 3 course SVGs/PNGs (release `2f46d8a42248a231`); Bountis DOI cite-safe; trees ≠ MVP corpus | [`WORK-QUEUE.md`](WORK-QUEUE.md) · [`assets/mondrian-tree/`](assets/mondrian-tree/) |
| Q-FA2 visual asset kit | **DONE** — 41 assets; hand-rolled trees; preserved as A/B twin | [`assets/kit/`](assets/kit/) · [`WORK-QUEUE.md`](WORK-QUEUE.md) |
| Q-FA3 kit-qfa1 twin | **DONE** — Q-FA1 trees (`dd7ac8a068d23bd8`); 35/41 hashes match Q-FA2; library versions in manifests | [`assets/INDEX.md`](assets/INDEX.md) · [`assets/KIT-DIFF.md`](assets/KIT-DIFF.md) |
| D-21…D-25 stack/MVP amend | **adopted** 27 Oct 2026 — Astro+Svelte+SVG; build-time catalog; Addendum B; path-owned lanes | [`DECISIONS/D21-D25-2026-10-27-ASTRO-SVELTE-SVG-MVP.md`](DECISIONS/D21-D25-2026-10-27-ASTRO-SVELTE-SVG-MVP.md) |
| D-30 liquid frame | **adopted** 27 Oct 2026 — free-aspect corners + liquid-fill; supersedes preserve-ratio MVP | [`DECISIONS/D30-…`](DECISIONS/D30-2026-10-27-LIQUID-FRAME-REFACTOR.md) |
| D-31 format presets | **adopted** 27 Oct 2026 — aspect chips; maximise in printableArea; `fmt` in URL | [`DECISIONS/D31-…`](DECISIONS/D31-2026-10-27-FORMAT-ASPECT-PRESETS.md) |
| `svelte` / `@astrojs/svelte` | **5.57.3** / **9.1.1** (peers `astro@^7`, `svelte@^5.43.6`) | `npm view`, 27 Oct 2026 |
| FE I session table | S1–S13; no Jekyll/Astro/Bootstrap/Tailwind session; GSAP S11; Vite first at S27 | `web-foundations/docs/tracks/en/udit/2627-fei/index.md` |
| Shared defence rubric | v2.0.3, frozen 2026-09-01, FE I row "any AI-assisted project" | `web-foundations/docs/evaluation/shared/ai-declaration-oral-defence-rubric/index.md` |
| TTOD institutional letter template | exists; addressees: grado coordination, Full-Stack/Data-Science direction, ECSIT IP | `~/src/ttod/docs/research/institutional/SOLICITUD-AUTORIZACION-PEDAGOGICA-ES.md` |
| Tao of HCD source | Spanish chapter, ten sections, parked for TTOD merge | `~/src/ttod/sources/tao-of-human-centered-design/{README,es}.md` |

## Where things go after M1

| Now | After M1 |
| --- | --- |
| This folder: INDEX, RATIONALE, CASCADE, PHASE-M*, PITCH, DECISIONS/ | Product repo `docs/DEV_PLAN/MONDRIAN/` (canonical) |
| — | This folder keeps `PITCH.md` + an `INDEX.md` pointer |
| `_private/` correspondence | Remains local and gitignored; never copied into the public product repo |
| — | Student brief: product repo `docs/brief/` **and** `web-foundations` S13 lesson (M9) |
