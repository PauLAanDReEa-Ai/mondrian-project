<!--
Mondrian Project — PHASE-M1 report. Implementer stops at VERIFYING; DONE is cold review + owner.
Author: Rubén Vega Balbás, PhD · 27 October 2026
-->

# PHASE-M1 report

**Status:** DONE  
**Date:** 2026-10-27  
**Implementer:** Cursor agent (instructor machine / Tanit)  
**Owner flip:** 2026-10-27 after cold-review FAIL + F1–F3 triage (favicon `withBase`, runnable conflict exercise, rubric link).  
**Process note:** Skeleton commits landed on `main` while M0 was still VERIFYING (amendment recorded). M0 is **DONE**.  
**Cascade amended:** `INDEX.md` defects 1–9; cascade §2 + GSAP calendar; M0 DONE; M1 DONE; M2 READY; forge pointer.

---

## 1. Commit spine

| Commit | Concern |
| --- | --- |
| `7f3aecd` | init: monorepo skeleton |
| `b2388ec` | workspace: pnpm + uv, Node 24.22.1 |
| `39076a2` | web: Astro 7 + Svelte probe |
| `f8d901f` | ci: Node 24.22.1 + Pages deploy |
| `10066e5` | contribution: CODEOWNERS, templates, review scripts |
| `88df8a9` | docs: cascade pack into `docs/DEV_PLAN/MONDRIAN/` |
| `11a5892` | fix(ci): pnpm lint `--if-present` + Pages build |
| `764967a` | docs: D-32 / historiography |

`git log --oneline | wc -l` ≥ 6 (**8**). First commit is the init commit.

---

## 2. Acceptance checklist

| Acceptance | Result | Evidence |
| --- | --- | --- |
| Init + ≥6 concern commits | **PASS** | §1 |
| Node ≥24.22.1 instructor + CI; `engine-strict` | **PASS** | `.nvmrc` `24.22.1`; CI `node-version: "24.22.1"`; assert step on green run |
| `pnpm check` / `uv run pytest` | **PASS** | Latest CI success on `main` (job `check`); 3 Python import smokes |
| Astro build + probe hydrates; public `/` no editor island | **PASS** | Pages `/` 200; dist home/contribute lack Probe; `/probe/svelte/` 200 contains Probe |
| Probe path | **AMEND** | Spec said `/_probe/svelte/`; shipped **`/probe/svelte/`** (noindex). Recorded in `PHASE-M1.md` prompt. |
| Pages `/` `/contribute/` 404 | **PASS** | curl 200 / 200 / 404 |
| README How to contribute + CONTRIBUTING D-25 owners | **PASS** | README + CONTRIBUTING path table |
| `packages/matrix` no `svelte` | **PASS** | package.json deps none / no svelte |
| CODEOWNERS five surfaces | **PASS** | `.github/CODEOWNERS` (seats 5–7 placeholders) |
| Branch / amend / Ready for re-review / behind-main | **PASS** | CONTRIBUTING.md |
| Staged conflict exercise | **PASS** (post F2 triage) | `scripts/pr-review/fixtures/conflict-exercise.sh --auto-resolve`; `make conflict-exercise` |
| Branch-behind preflight fixture | **PASS** | `scripts/pr-review/fixtures/branch-preflight.sh` → OK on current main |
| AI Review Log fixture | **PASS** | missing log → FAIL; complete → OK (`ai-log-check.sh`) |
| `make review-queue` read-only | **PASS** | prints open PRs only; “No open PRs.” |
| Local review cannot approve/merge | **PASS** | `review_pr.py` comments only (`MUST FIX`/`NIT`) |
| Branch protection ≥1 review + CI | **PASS** | set 27 Oct 2026: `required_approving_review_count=1`, context `check`, strict |
| Cascade in product repo; forge pointer | **PASS** | this tree; forge `INDEX.md` pointer |
| Cold review filed; blockers closed | **PASS** | Cold review FAIL → F1–F3 triage closed; owner flip DONE |
| Favicon via `withBase` | **PASS** | dist assert + post-deploy live curl |
| Rubric link in CONTRIBUTING | **PASS** | published v2.0.3 URL |

---

## 3. Leftovers (do not block VERIFYING filing; may block DONE)

1. Seats **5–7** still TBD (`HANDLE_SEAT_*` in CODEOWNERS).  
2. Collaborators: only `ruvebal` — add cohort handles when assigned.  
3. D-14 letters: drafts ready, **not sent**.  
4. Student-laptop Node probe column still empty.  
5. US rights unresolved (carried from M0 — public starter caution).  
6. P2 cold nits F4–F8 (behind-preflight packaging, ESLint deferral, deploy-action doc drift, draft schema).

---

## 4. Hard constraints (M1 scope)

| Constraint | Check |
| --- | --- |
| No cloud AI SDKs | Review scripts = local Ollama path only |
| No Svelte on public `/` | PASS |
| `packages/matrix` no svelte | PASS |
| No FastAPI from Pages | No API client in `services/web` |
| No painting photographs in repo | PASS |
| Implementer does not self-certify DONE | Held VERIFYING until owner flip — now **DONE** |

---

## 5. Resume

**M1 DONE.** Next: open **M2** (`PHASE-M2.md` READY). Seats 5–7 / letters / student laptops remain ops backlog (F7), not M2 blockers.
