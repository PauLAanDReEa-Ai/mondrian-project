<!--
Mondrian Project — PHASE-M1 cold review.
Reviewer did not implement this phase. Status flip to DONE is owner-only after triage.
-->

# PHASE-M1 cold review

| Field | Value |
| --- | --- |
| **Reviewer** | Cursor `cascade-cold-reviewer` subagent (no implementer memory of this phase) |
| **Date** | 2026-10-27 |
| **Pack root** | `docs/DEV_PLAN/MONDRIAN/` (product repo `ruvebal/mondrian-project`) |
| **Inputs** | `PHASE-M1.md` Acceptance; `PHASE-M1-REPORT.md` (VERIFYING); `MONDRIAN-CASCADE.md` §2 / §3 hard constraints / §8 layout; `INDEX.md` programme + live snapshot + trigger readiness; tree under `services/web`, `packages/*`, `.github/workflows`, `CONTRIBUTING.md`, `.github/CODEOWNERS`, `scripts/pr-review/`, `Makefile` |
| **Verdict** | **FAIL** |

Implementer correctly left status **VERIFYING** and did not self-certify DONE. This review does **not** mark PHASE-M1 DONE and does **not** open M2.

**Process amendment (not an M1 content failure):** Skeleton commits landed on `main` before M0 flipped DONE; M0 is now DONE; report records the amendment. Accepted as process history.

**Intentional amend (not a finding):** Probe path is `/probe/svelte/` (noindex), not `/_probe/svelte/`. Recorded in `PHASE-M1.md` and live Pages.

---

## Summary

Monorepo spine, Node 24.22.1 pin, CI green, Pages `/` + `/contribute/` + 404, Svelte probe hydration, public pages without Probe island, `packages/matrix` without `svelte`, branch protection, AI-log fail/pass paths, engine-strict under Node 20, Python import smokes, cascade move + forge pointer are **real and re-checked**.

Three Acceptance / hard-constraint gaps still block DONE: **BaseLayout bypasses `withBase` and ships a broken favicon URL on live Pages**; the **staged conflict exercise is documentary only**; **CONTRIBUTING names the shared rubric but does not link it**. Close those (or owner-amend Acceptance with an explicit deferral) before DONE.

---

## Findings

### F1 — `BaseLayout` bypasses `withBase`; live favicon URL is broken

| | |
| --- | --- |
| **Severity** | P1 |
| **Blocks DONE?** | **yes** |
| **Evidence** | Cascade §3 hard constraint: "Every href/src goes through Astro's base-aware helpers". Prompt item 4: write `src/lib/url.ts`, every link through it. Risk in `PHASE-M1.md`: base mishandling 404s on Pages. |
| | `services/web/src/layouts/BaseLayout.astro` L19: ``href={`${base}favicon.svg`}`` — does **not** call `withBase`. With `BASE=/mondrian-project`, Astro `BASE_URL` is `/mondrian-project` (no trailing slash) → shipped HTML is `href="/mondrian-projectfavicon.svg"`. |
| | Re-check: `rg` on `services/web/dist/index.html` and live `curl -sL https://ruvebal.github.io/mondrian-project/` → `href="/mondrian-projectfavicon.svg"`. `curl -sI` that URL → **404**. Correct URL `…/mondrian-project/favicon.svg` → **200**. Same defect on `/contribute/` and `/404`. |
| | `services/web/tests/url.test.ts` only exercises `withBase` in isolation — it would pass whether or not the layout used the helper (agentic-change mode 3). |
| **Fix** | In `BaseLayout.astro`, `import { withBase }` and set favicon (and any other `href`/`src`) via `withBase("/favicon.svg", base)`. Add a dist or unit assertion that built HTML contains `/mondrian-project/favicon.svg` (slash before `favicon`), not the glued form. Redeploy Pages. |

### F2 — Staged conflict exercise is not runnable

| | |
| --- | --- |
| **Severity** | P1 |
| **Blocks DONE?** | **yes** |
| **Evidence** | Acceptance: "the staged conflict exercise is runnable." Deliverable/prompt: "Add one staged student-owned conflict exercise before real PR waves." |
| | `docs/guides/reviewing-cohort-prs.md` § "Staged conflict exercise" is three prose sentences only. `find` / `rg` under `scripts/` and `docs/` show **no** fixture branch, script, Make target, or seed files. Report §2 marks this **PARTIAL**; leftover #5. |
| **Fix** | Ship a minimal runnable fixture (e.g. `scripts/pr-review/fixtures/conflict-exercise.md` + a disposable seed branch or script that creates a known conflicting touch, documents resolve steps, and exits non-zero until resolved) **or** owner-amend Acceptance to "documented until first cohort wave" in the same commit as triage. Do not leave "runnable" in Acceptance while only prose exists. |

### F3 — CONTRIBUTING lacks a shared-rubric **link**

| | |
| --- | --- |
| **Severity** | P1 |
| **Blocks DONE?** | **yes** |
| **Evidence** | Acceptance: "shared-rubric link". Deliverable: "links the shared v2.0.3 rubric." |
| | `CONTRIBUTING.md` L42: "Shared summative instrument: AI declaration / oral defence rubric v2.0.3." — name only, **no** markdown/URL link. Canonical path known in pack (`PITCH.md` / M9 / sufficiency review → `web-foundations/docs/evaluation/shared/ai-declaration-oral-defence-rubric/`, public `/evaluation/shared/ai-declaration-oral-defence-rubric/`). |
| **Fix** | Add one markdown link in CONTRIBUTING (and keep `/contribute/` in sync via the MD import) to the published rubric URL or the in-monorepo-reachable docs path students can open. |

### F4 — Branch-behind preflight: logic OK; shipped fixture only proves the happy path; no naming check

| | |
| --- | --- |
| **Severity** | P2 |
| **Blocks DONE?** | no |
| **Evidence** | Acceptance: "A fixture proves a branch created before current `main` is rejected by the naming/sync preflight." |
| | On current `main`: `bash scripts/pr-review/fixtures/branch-preflight.sh` → `preflight OK` exit 0 (pass-only). Cold re-check of fail path via disposable worktree at `7f3aecd`: script prints `preflight FAIL: branch is behind origin/main` exit **1** — sync rejection **works**, but that proof is not packaged as a fixture step. Script does **not** validate `lane/<handle>-issue-<n>-<slug>` naming. |
| | Bare `bash …/ai-log-check.sh` with no args prints `OK` (empty body skips the assisted gate). Fail/pass with bodies **do** work: assisted without log → exit 1; with `AI Review Log` → exit 0 (re-checked). |
| **Fix** | Add a fixture wrapper that checks out / simulates a behind tip and asserts exit 1; optionally add a naming regex check. Document that `ai-log-check.sh` must be invoked with sample bodies (or add committed fixture files). |

### F5 — ESLint flat config and Stylelint absent; package lint scripts are stubs

| | |
| --- | --- |
| **Severity** | P2 |
| **Blocks DONE?** | no |
| **Evidence** | Scope In: "`.editorconfig`, Prettier, ESLint flat config, Stylelint, ruff + mypy config." Constraint: deps may include eslint, stylelint. |
| | Present: `.editorconfig`, Prettier as root `devDependency` + `format` script (no `.prettierrc`), `[tool.ruff]` + `[tool.mypy] strict` in `pyproject.toml`. Absent: `eslint.config.*`, any stylelint config, eslint/stylelint packages. Every workspace `lint` script is `node -e "console.log('… lint deferred')"`. `pnpm check` still exits 0 because stubs succeed. |
| **Fix** | Add minimal ESLint flat + Stylelint configs and wire real `lint` scripts, **or** amend Scope/Acceptance to "Prettier + ruff/mypy in M1; ESLint/Stylelint in M3 shell" so the cascade matches the tree. |

### F6 — Deploy workflow does not use `withastro/action@v6` + `deploy-pages@v5`

| | |
| --- | --- |
| **Severity** | P2 |
| **Blocks DONE?** | no (Pages acceptance curls pass) |
| **Evidence** | Deliverable / prompt: `deploy-pages.yml` with `withastro/action@v6` (`path: services/web`) then `actions/deploy-pages@v5`. |
| | Shipped: custom `pnpm --filter @mondrian/web build` + `actions/upload-pages-artifact@v3` + `actions/deploy-pages@v4`. Live `/` and `/contribute/` → **200**; wrong path → custom **404** page. Node pin **24.22.1** is present on the build job. |
| **Fix** | Either migrate to the named actions or amend Deliverable/prompt/Risks to the custom build path as the intentional M1 pattern (keep Node 24.22.1 pin). |

### F7 — Known leftovers (seats, collaborators, letters, laptop) do **not** block M1 DONE

| | |
| --- | --- |
| **Severity** | P2 |
| **Blocks DONE?** | **no** |
| **Evidence** | Report leftovers 1–4, 6; `PHASE-M1.md` Risks: "Students cannot be added as collaborators yet → CODEOWNERS placeholders; the gate does not depend on real handles." Seats 5–7 = `HANDLE_SEAT_*` in `.github/CODEOWNERS`. Collaborators API: `ruvebal` only. D-14 letters + student-laptop Node column are M0 residual / teaching ops, not M1 skeleton gates. US rights caution carried from M0/D-32 — public-starter caution, not an M1 tree defect. |
| **Fix** | Keep as owner/ops backlog. Do not treat as M1 DONE blockers. Optionally tighten cascade §2 / INDEX trigger wording so "leftovers" no longer imply M1 gate items once cold review closes. |

### F8 — Draft `work.schema.json` present while M1 Scope Out says no schema content

| | |
| --- | --- |
| **Severity** | P2 |
| **Blocks DONE?** | no |
| **Evidence** | Scope Out: "any schema content (M2)". Tree has `packages/works/schema/work.schema.json` (draft teaching contract, ~4.6 KB) plus `.gitkeep`. File header: "Final field freeze is M2". No Ajv / conformance in M1 (correct). |
| **Fix** | Leave as non-authoritative draft; M2 must freeze fields + add Ajv. Optionally add one README line: "draft only — not the M2 gate." Do not cite this file as frozen contract before M2. |

---

## Acceptance checklist (cold re-check)

| Acceptance item | Result | Evidence |
| --- | --- | --- |
| Init commit is oldest; ≥6 commits | **PASS** | `git log --oneline --reverse \| head -1` → `7f3aecd init:…`; `wc -l` → **8** |
| Node ≥24.22.1 instructor + CI; engine-strict | **PASS** | `.nvmrc` / `engines.node` `>=24.22.1`; CI assert + log `v24.22.1`; `nvm exec 20.20.2 pnpm install` → `ERR_PNPM_UNSUPPORTED_ENGINE` exit 1 |
| `pnpm check` / `uv run pytest` | **PASS** | `pnpm check` exit 0; `uv run pytest` → **3 passed** (import smokes) |
| Astro build; probe hydrates; public `/` no editor island | **PASS** | `BASE=/mondrian-project pnpm --filter web build` exit 0; dist + live `/probe/svelte/` contain `astro-island` + `data-mondrian-probe="ok"` + `Probe.*.js`; `index.html` / `contribute/index.html` have **no** `astro-island` / Probe |
| Probe path `/probe/svelte/` (not `_probe`) | **PASS** (amend) | Live 200; intentional |
| Pages `/` `/contribute/` wrong→404 | **PASS** | curl 200 / 200 / 404 with custom 404 body |
| README How to contribute + D-25 owners | **PASS** | README `## How to contribute`; CONTRIBUTING path table names Analyzer, Geometry, Shell, Editor, Design (+ API seat) |
| `packages/matrix` no `svelte` | **PASS** | `package.json` deps: vitest only |
| CODEOWNERS five surfaces | **PASS** | `.github/CODEOWNERS` maps Analyzer / geometry / Shell / Editor / Design (placeholders 5–7 OK) |
| Branch / conflict / no-rename / amend / Ready for re-review / behind-main | **PASS** (text) | CONTRIBUTING rules present |
| Staged conflict exercise runnable | **FAIL** | F2 — prose only |
| Branch-behind preflight fixture | **PARTIAL** | F4 — fail path works ad hoc; shipped run on main is happy-path only; no naming check |
| AI Review Log fixture | **PASS** | assisted w/o log exit 1; with log exit 0 (bodies required) |
| `make review-queue` read-only; local review MUST FIX\|NIT; no approve/merge | **PASS** | queue lists PRs only; `review_pr.py` dry-run prints MUST FIX/NIT; only `gh pr comment` when `--post` |
| Branch protection ≥1 review + CI `check` | **PASS** | `gh api …/protection` → reviews=1, checks=`["check"]`, strict=true |
| Cascade in product repo; forge pointer | **PASS** | pack present; forge `INDEX.md` points here; M0 DONE / M1 VERIFYING |
| CONTRIBUTING two-phase AI / REJECT / assistant≠analyzer / rubric **link** | **FAIL** | F3 — rubric named, not linked |
| Hard constraint: every href/src via base helper | **FAIL** | F1 — favicon concat |
| Cold review filed; blockers closed | **PENDING** | this file; blockers F1–F3 open |

---

## Hard constraints (cascade §3) spot-check

| Constraint | Result |
| --- | --- |
| No cloud AI SDKs in packages/services | **PASS** — only cascade/docs mention forbidden imports |
| No Svelte island on public `/` / `/contribute/` | **PASS** |
| `packages/matrix` never imports Svelte | **PASS** |
| No FastAPI from Pages | **PASS** — no API client in `services/web` |
| No painting photographs in repo | **PASS** |
| AI never approves/merges | **PASS** — comment-only review script |
| Every href/src via base-aware helpers | **FAIL** — F1 |
| Implementer does not self-certify DONE | **PASS** — status VERIFYING |

---

## Agentic-change modes (this phase)

1. **Import/load:** `uv run python -c "import mondrian_works, mondrian_analyzer, mondrian_api"` OK; vitest + Astro build load JS/Svelte OK.
2. **Full suite:** `pnpm check` (lint stubs + all package tests + builds) and full `uv run pytest` (3) green — not only a single new test.
3. **Tests that would pass either way:** `url.test.ts` does not catch BaseLayout's raw `${base}favicon.svg` (F1). Branch-preflight invoked only on `main` would not prove the rejection clause (F4).
4. **Return shapes:** N/A beyond trivial imports.
5. **Discriminated modes:** N/A (schema freeze is M2; draft schema noted in F8).
6. **Docs as claims:** CONTRIBUTING "runnable" conflict exercise and "rubric link" failed greps/runs (F2, F3). Deploy action names in the phase file do not match shipped YAML (F6).

---

## Owner triage list

| ID | Action | Blocks DONE? |
| --- | --- | --- |
| **F1** | Fix `BaseLayout` to use `withBase` for favicon (and any other assets); add regression; redeploy | **yes** |
| **F2** | Ship a runnable conflict-exercise fixture **or** amend Acceptance to documentary-until-cohort | **yes** |
| **F3** | Add shared rubric v2.0.3 markdown link in CONTRIBUTING | **yes** |
| F4 | Package behind-branch (and optional naming) fixture; document AI-log body args | no |
| F5 | Add ESLint/Stylelint **or** amend Scope to defer them | no |
| F6 | Align deploy YAML with docs **or** amend Deliverable to custom Pages build | no |
| F7 | Seats 5–7 / collaborators / letters / laptop / US caution — ops backlog | no |
| F8 | Treat `work.schema.json` as draft until M2 | no |
| — | After F1–F3 closed: owner flips M1 → **DONE**; then open M2. Do not start M2 while VERIFYING. | — |

**Downstream:** No PHASE-M2 assumption is invalidated beyond "M1 DONE is the gate." Fix F1 before M3 base-path Playwright relies on a clean helper discipline. If F2 is deferred by Acceptance amend, record that amend in `PHASE-M1.md` + cascade §2 in the same triage commit.

---

## Implementer triage (same session, post-FAIL)

| Finding | Action | Closed? |
| --- | --- | --- |
| F1 | `BaseLayout` uses `withBase` for favicon + home; `url.test.ts` favicon cases; `scripts/assert-favicon-base.mjs` on build — dist has `/mondrian-project/favicon.svg` | **yes** (local). Live Pages still 404 until this commit deploys. |
| F2 | `scripts/pr-review/fixtures/conflict-exercise.sh` + `make conflict-exercise` / `make check` runs `--auto-resolve`; guide updated | **yes** |
| F3 | CONTRIBUTING links published rubric v2.0.3 URL (curl 200) | **yes** |
| F4–F8 | Left as P2 / ops | open (non-blocking) |

**M1 → DONE** (owner flip 27 Oct 2026 after F1–F3 triage). Live favicon verified post-deploy before/with the flip. M2 is READY.

---

## Commands run (cold session)

```text
git log --oneline --reverse | head -1          # 7f3aecd init
git log --oneline | wc -l                      # 8
node -v                                        # v24.22.1 (nvm)
pnpm check                                     # exit 0
uv sync && uv run pytest -v                    # 3 passed
BASE=/mondrian-project pnpm --filter web build # exit 0
curl Pages /, /contribute/, wrong, /probe/svelte/
gh api repos/ruvebal/mondrian-project/branches/main/protection
nvm exec 20.20.2 pnpm install                  # ERR_PNPM_UNSUPPORTED_ENGINE exit 1
bash scripts/pr-review/fixtures/ai-log-check.sh '<bodies>'
git worktree @ 7f3aecd + branch-preflight.sh   # FAIL exit 1
make review-queue                              # No open PRs
python3 scripts/pr-review/review_pr.py --pr 1  # MUST FIX | NIT only
```
