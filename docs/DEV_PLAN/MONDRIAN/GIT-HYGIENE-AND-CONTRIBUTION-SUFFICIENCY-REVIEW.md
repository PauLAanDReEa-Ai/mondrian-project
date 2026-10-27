<!--
Instructor review: Git hygiene + PR-review automation + CONTRIBUTING,
ported from TTOD cohort feedback (2026-10) and studio guides.
Companion to AI-EVALUATION-SUFFICIENCY-REVIEW.md. Not student-facing.
-->

# Git hygiene & contribution surface — Mondrian sufficiency

**Integration status (25 Oct 2026):** accepted into cascade D-19 and PHASE-M1.
**27 Oct 2026:** D-25 adds path-owned CODEOWNERS (Analyzer / Geometry contract /
Shell / Editor / Design). Schema+matrix remain the dual-review bottleneck;
Svelte stays in `packages/editor`. See
[`DECISIONS/D21-D25-2026-10-27-ASTRO-SVELTE-SVG-MVP.md`](DECISIONS/D21-D25-2026-10-27-ASTRO-SVELTE-SVG-MVP.md).

**D-19 remainder (unchanged):**
parseable branches, student-owned conflicts, no open-PR rename, amend/re-review
protocol, cross-lane human approval, local comments-only review tooling,
instructor worktree guide and staged conflict exercise.

The gap table and checklist below preserve the pre-integration diagnosis.
PHASE-M1's deliverables and acceptance criteria are the implementation gate.

**Verdict at review time:** **Yes — port the TTOD Git / PR-review operating
layer**, and **yes — rewrite contribution indications** using student M1
feedback + studio practice. Mondrian named lanes, CODEOWNERS, and a PR template
skeleton; it did **not** yet encode the missing hygiene contract.

GraphRAG over the current vault did **not** return evaluator-safe Git-classroom anchors for this pass (hits unresolved / off-topic). Treat the redesign as grounded in **(a)** TTOD Moodle M1 responses, **(b)** live TTOD guides (`contributing`, `reviewing-cohort-prs`), **(c)** your own merge-hygiene rule already used in scorecards — not as a new Ahmes citation claim until a dedicated evidence pass.

---

## 1. Two questions

| Question | Answer |
| --- | --- |
| Port Git hygiene + studio PR-review automation the same way as AI evaluation? | **Yes.** Same pattern: philosophy exists in rationale; **operating procedure** must land in M1 templates / CONTRIBUTING / instructor Makefile, not only in M9. |
| Improve contribution indications after student feedback + research + good practice? | **Yes.** Student M1 is already a redesign brief. Do it **before** Mondrian CONTRIBUTING freezes at M1. |

---

## 2. What TTOD students asked for (M1 — Git)

From Evaluación TTOD (anonymized themes; private names in AI conclusions §4):

| Theme | Student ask | Design implication for Mondrian |
| --- | --- | --- |
| **Instructor absorbed hard Git** | Conflicts / rebase often done by the professor | At least **one student-owned conflict** (or staged conflict lab) graded as process, not absorbed silently |
| **Amend under pressure** | Several AMEND PRs + main moving at once | Teach **update-branch checklist** early; small PRs; one-tip-at-a-time still, but **student** merges upstream into their branch |
| **Rename trap** | Renaming a branch closed PRs | CONTRIBUTING: **never rename a branch that has an open PR**; open a new branch / retarget instead |
| **Ready for re-review** | Worked when taught | Keep exact phrase + CI green + same branch (TTOD mail protocol) |
| **Reject = code/verify only** | Liked that “update main” was not a student defect | Keep: **Update branch / conflict resolve = merge hygiene**, not CHANGES_REQUESTED reason |
| **Contributing / checklist** | Want a guide from day one | Mondrian `/contribute/` + CONTRIBUTING must ship at M1 with a printable checklist |
| **Issues with labels** | Suggested for pending work | Optional: issue templates already in M1 — add priority labels in CONTRIBUTING |
| **Stacked branches** | Pain when main moved under T1→T3→T5 stacks | Prefer **short-lived branches from current main**; avoid deep stacks unless taught |

Also: cross-module PR / formal peer review were **waived** mid-TTOD. For Mondrian, rationale still wants **cross-lane reviewer on every PR** — keep that (it is review culture, not “PR into foreign module as a tip”). Do **not** copy the waived “commit into another team’s module” tip unless you want it again.

---

## 3. What the studio already has (port, don’t reinvent)

| Asset | Role | Mondrian action |
| --- | --- | --- |
| `ttod/docs/public/guides/contributing.md` | Student PR mechanics, AI log, bot comments ≠ approval | Adapt into Mondrian CONTRIBUTING + `/contribute/` (Astro), FE I wording |
| `ttod/docs/public/guides/reviewing-cohort-prs.md` | Instructor worktree + `make review-pr` + `gh` loop | Copy pattern into Mondrian `docs/guides/` or instructor README at M1 |
| `scripts/pr-review/` + `make review-pr` | Local Ollama hybrid review; comments only | **Port** into Mondrian monorepo (or shared studio script path); branch-name → acceptance matching for lanes/tasks |
| Branch protection + required CI + human approve | Merge gate | M1 already plans this — keep |
| Scorecard rule | Update branch ≠ student reject | Encode in CONTRIBUTING + instructor review guide |

Cloud auto-review stays **off by default** (same cost lesson as TTOD).

---

## 4. Mondrian today vs needed

| Surface | Mondrian now | Enough? |
| --- | --- | --- |
| Monorepo, protected main, CODEOWNERS, lanes | Cascade D-01 · rationale §8 · M1 | Yes (structure) |
| PR template fields | Plan · declaration delta · measurement · cross-lane reviewer | Partial — add AI log + amend protocol |
| Student conflict ownership | Not specified | **No** |
| “Ready for re-review” protocol | Absent | **No** |
| Merge hygiene vs CHANGES_REQUESTED | Absent | **No** |
| Branch naming + bot matching | `lane/short-name` only | Partial — need parseable task ids if using pr-review |
| Instructor worktree / review-queue | Not in pack | **No** — port from TTOD guide |
| CONTRIBUTING depth | Named as deliverable, not drafted | **Must write from this review** |
| Formal peer-review tip | Cross-lane approval on every PR | Keep; do not add waived cross-module *code* tip unless decided |

---

## 5. Recommended CONTRIBUTING outline (post-feedback)

Ship at M1 as the student contract (ES later in brief M9):

1. **Clone / sync** — `main` protected; always `git fetch` + rebase or merge **yourself** before push.
2. **Branch names** — `lane/<handle>-<task-slug>` (document the regex the review bot will parse).
3. **One concern per PR** — measurement vs UI vs API not mixed without a reason in the body.
4. **Checklist before open** — `pnpm check` / `uv run pytest` (lane-relevant); plan link; declaration delta; measurement source if numbers change; AI Review Log if assisted.
5. **Amend loop** — same branch → CI green → comment exactly `Ready for re-review` → do not self-merge.
6. **Conflicts** — student resolves; instructor may help in office hours; “professor fixed my rebase” is not evidence of Git learning.
7. **Never rename** an open-PR branch.
8. **Review culture** — one cross-lane human approval; bots comment only; AI never approves/merges.
9. **What is not a reject reason** — mere “branch behind main” (hygiene); instructor may Update branch when merging.
10. **Issues** — use templates; optional priority labels for triage Mondays.

Optional lab (S-early): one **staged conflict** exercise before the first real multi-PR week.

---

## 6. Instructor automation to port (M1)

Minimum:

- [ ] `make review-queue` (or `gh`-based script)
- [ ] `make review-pr PR=n` posting local Ollama comment (MUST FIX / NIT)
- [ ] Document **worktree** workflow (`../mondrian-review`) in instructor guide
- [ ] Branch protection: required status + ≥1 human review
- [ ] Scorecard / triage note: hygiene ≠ CHANGES_REQUESTED

Do **not** block M1 on cloud Bugbot; local-first is the TTOD lesson.

---

## 7. Risks if you skip the port

1. Same M1 complaint next semester: “Git was good until conflicts, then the professor did it.”
2. AMEND storms without a taught update checklist.
3. Bot review without human-merge rule → students treat AI comment as approval (again).
4. CONTRIBUTING that only lists lanes → no behavioural protocol → oral defence of process stays empty.

---

## 8. Relation to AI-evaluation review

| Layer | AI sufficiency doc | This doc |
| --- | --- | --- |
| Critique / Verify on code help | AI Review Log | Same log block in PR template |
| Defer | Plans before code | Plans + branch-from-fresh-main |
| Instructor close-out | AI-critical signs report | Optional Git-process signs (conflict owned?, amend protocol used?, rename avoided?) |
| Automation | “AI never merges” | Local pr-review + worktrees |

Implement **both** in the same M1 template pass.

---

## 9. Research note (honest)

- Studio GraphRAG query on Git Classroom / conflict pedagogy returned **no usable typed edges** this session — do not cite those vector snippets as Mondrian grounding.
- When you next run an evidence pass, prefer: Nelson & Ponciano (GitHub Classroom), course-adjacent SEENG / SIGCSE process papers already on the shared oral rubric References, plus your Strand B design note — via `AI-EVIDENCE-HARNESS.md`.
- Student feedback is **primary design input** for CONTRIBUTING; literature validates process assessment, it does not replace the M1 redesign items above.

---

## 10. Bottom line

**Port:** yes — hygiene contract, amend protocol, local PR-review tooling,
instructor worktree guide.
**Improve CONTRIBUTING from feedback:** yes — before M1 freezes; treat TTOD M1
as the requirements list.
**Integrated into the pack:** yes. Product implementation remains gated by
PHASE-M1 acceptance.

Companion: [`AI-EVALUATION-SUFFICIENCY-REVIEW.md`](AI-EVALUATION-SUFFICIENCY-REVIEW.md).
