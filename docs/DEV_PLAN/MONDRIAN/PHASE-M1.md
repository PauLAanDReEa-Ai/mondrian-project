# PHASE-M1: Repository from `git init` — monorepo skeleton, CI, Pages, contribution surface

> **Track:** L3 skeleton, L6 process surface. Creates the product repository.
> **Status:** BLOCKED (M0) — opens when M0 flips DONE after cold-review triage

## Goal

Create `mondrian-project` from nothing: one commit history that starts with
`git init`, a pnpm + uv workspace pinned to **Node ≥24.22.1** (D-28), an Astro 7
app with `@astrojs/svelte` that builds to GitHub Pages through Actions, a
`packages/editor` Svelte stub, Python packages with import smoke tests, and
the whole contribution surface (D-25 CODEOWNERS). Move this cascade into
`docs/DEV_PLAN/MONDRIAN/` and leave a pointer in the forge. The phase ends
when the Pages URL serves the placeholder home and CI is green on `main`.

## Owners

- **Accountable:** instructor/product owner — repository, protection, private
  boundary, review policy and phase sign-off.
- **Responsible:** nominated Full-stack technical lead — workspace, CI and
  contribution fixtures; AI & Data Science lead — Python import gates.
- **Review:** one human cross-lane reviewer; local Ollama may comment only.

## Deliverables

- Repository at `~/projects/ruvebal/scholar/udit/courses-repos/mondrian-project/`, remote `ruvebal/mondrian-project`, `main` protected (require PR + 1 review + green CI).
- Layout exactly as cascade §8, with empty-but-building packages:
  `services/web` (Astro 7 + `@astrojs/svelte`), `packages/tokens` (from forge
  `scaffold/tokens/`), `packages/editor` (Svelte stub
  + one component test), `packages/matrix` (vanilla ESM + vitest, one import
  test, **no svelte dependency**), `packages/works` (data/schema),
  `packages/works/python` (shared installable schema package),
  `packages/analyzer` and `services/api` (three uv members; each Python
  package has a passing import smoke test).
- `.github/workflows/ci.yml` (pnpm install, `pnpm -r build`, `pnpm -r test`, `uv sync`, `uv run pytest`) and `deploy-pages.yml` (`withastro/action@v6`, `path: services/web`, then `actions/deploy-pages@v5`).
- `README.md` index: what the project is (two sentences from the rationale), live URL, **How to contribute** section linking `CONTRIBUTING.md` and `/contribute/`, lanes table, licences, link to `/declaration/` (placeholder until M9).
- `CONTRIBUTING.md` as the student operating contract: sync current `main`;
  branch `lane/<handle>-issue-<n>-<slug>`; one concern per PR; own conflicts;
  never rename an open-PR branch; same-branch amend loop; exact
  `Ready for re-review`; cross-lane human approval; branch-behind-main is
  hygiene, not a rejection reason. It names D-25 path owners: Analyzer,
  Geometry contract (dual review), Shell, Editor, Design. Schema/matrix PRs
  require Analyzer **and** Editor approval; Svelte stays in `packages/editor`.
  It also teaches plan-before-code, expects one defended REJECT per semester,
  separates coding assistants from analyzer ML, and links the shared v2.0.3
  rubric. `CODEOWNERS`, PR template and three issue templates enforce the
  relevant parts.
- PR template keeps plan link, declaration delta, measurement source and
  reviewer, and adds the required assisted-work AI Review Log from
  `AI-CRITICAL-OPERATING-ADDENDUM.md`.
- `docs/guides/reviewing-cohort-prs.md`, `scripts/pr-review/` and instructor
  commands `make review-queue` / `make review-pr PR=<n> POST=1`, adapted from
  TTOD. Review uses local Ollama, comments `MUST FIX|NIT`, and has no code path
  that approves or merges.
- `AGENTS.md` in the studio format (dev environment table, verification commands, do-not list) and a `CLAUDE.md` redirect.
- `docs/DEV_PLAN/MONDRIAN/` = this pack, including `MVP-PRODUCT-SPEC.md`,
  grounding receipts and both sufficiency reviews/addendum; private
  correspondence is not copied. The forge keeps `PITCH.md` and an `INDEX.md`
  pointer.
- `PHASE-M1-COLD-REVIEW.md`, `PHASE-M1-REPORT.md`.

## Scope

**In:** everything above; a first Astro page `/` that says what the project is and links `/contribute/`; a noindex `/_probe/svelte/` page that hydrates one Svelte component; `base` configured for a project site; `.editorconfig`, Prettier, ESLint flat config, Stylelint, ruff + mypy config.
**Out:** any schema content (M2), any rendering (M2/M3), the real editor island (M6), any Python logic (M4/M5), student onboarding (happens after this phase, using this phase's output). Optional brand marks from forge `assets/kit-qfa1/` may be copied at M1/M3 when layouts exist — not a gate.

## Prompt (Implementation Agent)

```text
Implement PHASE-M1 per docs/DEV_PLAN/MONDRIAN/PHASE-M1.md (source copy in the web-atelier-udit forge until moved).

## Deliver
1. `git init` at ~/projects/ruvebal/scholar/udit/courses-repos/mondrian-project; first commit "init: Mondrian
   Project monorepo skeleton" containing only README.md, LICENSE-CODE (MIT), LICENSE-CONTENT (CC BY-NC-SA 4.0),
   .gitignore, .editorconfig. Then one commit per concern below (workspace, web, python, ci, contribution surface,
   cascade move). Do NOT push until the human confirms the remote name (D-01).
2. pnpm workspace: pnpm-workspace.yaml with packages/*, services/*; root package.json scripts: build, test, lint,
   format, check (runs all). **D-28:** root `.nvmrc` = `24.22.1`; `engines.node` = `>=24.22.1`;
   `.npmrc` includes `engine-strict=true`; packageManager field pinned to the installed pnpm.
   AGENTS.md + README state: use nvm/fnm; refuse Node ≤20 and unpatched 22.22.x.
3. uv workspace: root pyproject.toml with [tool.uv.workspace] members =
   ["packages/works/python", "packages/analyzer", "services/api"],
   requires-python "==3.12.*", .python-version 3.12; each member a minimal package with pyproject, src layout,
   tests/ with a placeholder test that asserts the package imports. ruff + mypy strict configured.
4. Astro 7 in services/web: `pnpm create astro@latest` minimal, TypeScript strict (M0 dry-run
   yielded `astro@^7.4.2`; pin the major in package.json); add `@astrojs/svelte` (peer svelte 5);
   astro.config with site + base from env (BASE defaults to "/mondrian-project") and the Svelte
   integration; one layout; src/pages/index.astro; src/pages/contribute.astro rendering
   CONTRIBUTING.md (import as content — do not duplicate text); 404.astro;
   src/pages/_probe/svelte.astro (noindex) hydrating packages/editor Probe.svelte via client:load.
   Every link through a base-aware helper (write src/lib/url.ts, one function, tested).
5. packages/matrix: package.json type module, exports ./src/index.js, vitest with one test that
   imports index; package.json must not list svelte. packages/editor: Svelte 5 package, one
   Probe.svelte ("ok"), vitest component smoke. packages/works: README.md describing L0/L1,
   empty schema/ and works/ with .gitkeep.
6. CI: ci.yml on pull_request + push to main with **`node-version: "24.22.1"`** (or setup-node
   pin matching D-28); deploy-pages.yml on push to main using withastro/action@v6
   (Node 24 line) and actions/deploy-pages@v5; permissions pages: write, id-token: write.
   Assert CI log Node ≥24.22.1. Never install Node 20.x in workflows.
7. Contribution surface: README index; CONTRIBUTING from D-19; CODEOWNERS
   seeded from forge `scaffold/CODEOWNERS.example` and
   [`TEAM-ASSIGNMENTS.md`](TEAM-ASSIGNMENTS.md) (handles stay placeholders until
   students join); copy `scaffold/tokens/` → `packages/tokens/` and
   `scaffold/export/` → `packages/matrix/export/` (stubs); task/measurement/bug
   issue templates; PR template with Plan · Declaration delta · Measurement
   source · Cross-lane reviewer · AI Review Log. State that assistant-run checks
   are not human checks and AI never approves or merges. Add AGENTS.md + redirect.
8. Port the TTOD local review pattern: comments-only local Ollama scripts,
   parseable issue/task matching from the branch name, review queue, instructor
   worktree guide and Make targets. Do not include or configure a cloud AI
   reviewer. Add one staged student-owned conflict exercise before real PR waves.
9. Move the cascade: copy INDEX.md, MVP-PRODUCT-SPEC.md,
   DECISIONS/, AI-CRITICAL-OPERATING-ADDENDUM.md, both sufficiency reviews,
   MONDRIAN-CASCADE.md, PHASE-M*.md, grounding,
   M0 report/cold review into
   docs/DEV_PLAN/MONDRIAN/; in the forge, replace them with INDEX.md pointing at the repo path (keep PITCH.md and
   MONDRIAN-RATIONALE.md in both places? No: rationale moves too; forge INDEX keeps PITCH + pointer).
10. Verify: pnpm install && pnpm check; uv sync && uv run pytest; pnpm --filter web build with BASE set; serve dist
   and curl the home with the base path. After push (human-confirmed): Pages URL returns 200.
11. Hand off for cold review — do NOT mark DONE yourself.

## Constraints
- Public `/` and `/contribute/` ship **no** Svelte island (grep those dist
  HTML files for the editor island bootstrap; they must not load it).
  `/_probe/svelte/` is allowed to hydrate. Home may still emit Astro's
  tiny modulepreload — record it; do not treat that as the editor.
- During M1, no dependency beyond astro, @astrojs/svelte, svelte, vitest,
  typescript, prettier, eslint, stylelint, ruff, mypy and pytest. M2 adds
  Ajv 8 solely to execute the canonical JSON Schema 2020-12 contract.
- packages/matrix must not depend on svelte or astro.
- Do not commit beyond the commits named above without asking; never push without the remote confirmed.
```

## Acceptance

- `git log --oneline | tail -1` is the init commit; `git log --oneline | wc -l` ≥ 6 (one per concern).
- `node -v` on instructor + CI ≥ **v24.22.1**; `pnpm install` fails under older Node (`engine-strict`).
- `pnpm install && pnpm check` exit 0; `uv sync && uv run pytest` exit 0 (collects ≥ 2 placeholder tests).
- `.nvmrc` reads `24.22.1`; root `engines.node` is `>=24.22.1`.
- `BASE=/mondrian-project pnpm --filter web build` exit 0; `/_probe/svelte/` HTML contains the hydrated Probe marker; `index.html` and `contribute/index.html` do not import `packages/editor` except via unused graph (fail the gate if they hydrate an island).
- After push: `curl -o /dev/null -w '%{http_code}' https://ruvebal.github.io/mondrian-project/` → `200`; `/contribute/` → `200`; a wrong path → the 404 page.
- `README.md` contains a heading `## How to contribute` linking `CONTRIBUTING.md`; `CONTRIBUTING.md` names the D-25 path owners (Analyzer, Geometry contract, Shell, Editor, Design).
- `packages/matrix/package.json` has no `svelte` dependency; `CODEOWNERS` maps the five surfaces.
- CONTRIBUTING contains the exact branch, conflict, no-rename, amend,
  `Ready for re-review`, human-approval and behind-main rules; the staged
  conflict exercise is runnable.
- A fixture proves a branch created before current `main` is rejected by the
  naming/sync preflight; the instructor guide documents an isolated review
  worktree and `make review-queue`.
- PR-template fixture with assisted work is rejected when its AI Review Log is
  absent; a complete fixture passes. `make review-queue` is read-only;
  a dry-run local review emits only `MUST FIX|NIT` findings and cannot invoke
  GitHub approve/merge endpoints.
- CONTRIBUTING contains the two-phase AI rule, one-semester REJECT
  expectation, coding-assistant/analyzer distinction and shared-rubric link.
- Branch protection on `main` verified with `gh api repos/:owner/:repo/branches/main/protection` (required reviews ≥ 1, required status check = CI).
- `docs/DEV_PLAN/MONDRIAN/MONDRIAN-CASCADE.md` exists in the repo; the forge `INDEX.md` points to it.
- Cold review filed; blocking findings closed.

## Risks

- Astro's `base` handling for assets vs links differs from Jekyll's `relative_url`; a hard-coded `/assets/…` 404s on Pages → the `url.ts` helper plus a Playwright check in M3 catch it; M1's curl of `/contribute/` is the early tripwire.
- `withastro/action@v6` defaults to Node 24 — pin **24.22.1+** explicitly so CI is not left on an unpatched 24.22.0 image after the Oct 2026 Brotli/TLS advisories (D-28).
- Students cannot be added as collaborators yet → CODEOWNERS placeholders; the gate does not depend on real handles.
