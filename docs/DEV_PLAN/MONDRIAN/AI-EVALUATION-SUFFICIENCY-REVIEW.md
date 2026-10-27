<!--
Instructor review: is Mondrian's AI evaluation/grading surface enough,
given TTOD cohort close-out (2026-10-25)? Not student-facing.
Author: Rubén Vega Balbás / agent pass 2026-10-25
-->

# AI evaluation sufficiency — Mondrian vs TTOD close-out

**Integration status (25 Oct 2026):** accepted into cascade D-20,
[`AI-CRITICAL-OPERATING-ADDENDUM.md`](AI-CRITICAL-OPERATING-ADDENDUM.md),
PHASE-M1's PR template, PHASE-M8's formative checkpoint and PHASE-M9's
close-out. The shared rubric remains the sole summative instrument.

**Verdict at review time:** the **pedagogic spine was present**; the
**operational grading surface was not yet enough** for the same manner of
AI-critical qualification used in TTOD. The integration status above records
the adopted repair.

Sections 1–6 preserve the pre-integration diagnosis. Current requirements are
normative only where D-20, the addendum or a phase adopts them.

Mondrian already knew *what* to defend (authorship of numbers, two-phase AI,
shared oral rubric). It did not specify *how* to accumulate week-by-week
evidence of control (ACCEPT/REJECT, verification honesty, mid-course signs) so
M9 was not the first time Critique became visible.

---

## 1. What is already strong (keep)

| Surface | Where | Why it matches Strand B / TTOD intent |
| --- | --- | --- |
| Two-phase AI rule (plan → implement) | `PITCH.md` §12 · brief will restate in M9 | **Defer** axis |
| Plans + declaration paths | Cascade **D-13** · `docs/plans/<handle>/` · `docs/declarations/<handle>.md` | **Narrate** axis; public-repo honesty |
| Authorship vs AI-drawn grid | Rationale “Authorship claim” · Pitch risk **42** | Measurement is the integrity gate |
| Defence prompts | M9: one bound · one Δ with wrap · one AI choice | Fits shared rubric FE I row |
| Shared rubric pointer | INDEX live snapshot · Pitch §12 · M9 | v2.0.3 Oral Defence / AI Declaration — no new invent |
| PR fields | M1: plan link · **declaration delta** · measurement source | Process on every merge |
| Ethics timing | Grades close → then research / pseudonymise | Teacher-researcher split |
| Preflight email | AI allowed with plan, human review, declaration | Cohort hears the rule before `git init` |

This is enough to **justify** the project as AI-resilient assessment in principle. It is not enough to **operate** a TTOD-style cohort AI-critical report at the end.

---

## 2. Gaps exposed by the TTOD close-out (2026-10-25)

TTOD taught: **tip Mean Σ ≠ AI-critical mark**. Graph/Oracle shipped product well with thin Critique. Content/PWA scored on control signs (mutation, REJECT with reason, honest “AI ran the checks”).

Mondrian today risks the same failure mode unless you add mid-cascade instruments.

| Gap | Today in Mondrian | TTOD practice that worked | Risk if left |
| --- | --- | --- | --- |
| **G1 — Per-PR Critique log** | PR template asks “declaration delta,” not ACCEPT/REJECT rows | Unit 6 AI Review Log on every tip PR | Students only narrate at M9; Critique invisible until oral |
| **G2 — Verify honesty** | Not named | E4: “assistant ran checks; I do not claim them” | Vague “I verified” inflates Narrate |
| **G3 — Mid-course AI signs** | No instructor checklist / signs matrix | 8 signs → draft 0–10 before Campus | Product excellence auto-inflates AI mark |
| **G4 — FE I ≠ Unit 6** | Relies on shared rubric; FE I has not run FE II Unit 6 | Unit 6 taught the log | Students meet the instrument cold at defence |
| **G5 — Gate placement** | AI artefacts concentrated in **M9** | Logs required from first tip | Retroactive declarations (integrity theatre) |
| **G6 — Instructor close-out** | No phase for “AI-critical cohort report” | Scorecard + conclusions + anonymized HTML | Research corpus without a grading companion |
| **G7 — Coding AI vs analyzer ML** | “AI & Data Science” lane name | Separate disclosure: coding assistants vs learned classifier | Students confuse model evaluation with authorship declaration |
| **G8 — Human merge rule** | Not explicit in M1 templates | “AI never approves or merges” | Bot review culture without the Unit 6 guardrail sentence |

---

## 3. Rubric mapping (enough as *reference*, thin as *operating procedure*)

Shared rubric axes already apply:

| Axis | Mondrian evidence that should accumulate | Currently scheduled |
| --- | --- | --- |
| **Defer** | `docs/plans/<handle>/planN.md` before feature commits | D-13 + brief; weak CI/PR gate |
| **Narrate** | `docs/declarations/<handle>.md` + PR declaration deltas | M9 page + file path; deltas underspecified |
| **Critique** | At least one defended REJECT (or refused measurement suggestion) | Only “one AI choice” at oral — too late / too thin |
| **Verify** | Named human check vs AI-run check; live bound / Δ | Defence covers measure/Δ; not AI-run honesty |

**Recommendation:** keep v2.0.3 as the single Campus instrument; add a **Mondrian operating addendum** (one page) that defines PR log shape + eight signs for the instructor close-out — do not invent a second 0–10 scale.

---

## 4. Risks (AI-specific, for cascade / brief)

Already in pitch (keep): risk **42** (handsome fake), **46** (research identity), **47** (public ≠ private), **49** (defence slot).

Add explicitly (brief + CONTRIBUTING + M1 template):

1. **Product without Critique** — works pass schema; student cannot name a rejected AI suggestion → cap Critique / reflection band (same lesson as TTOD Graph/Oracle).
2. **Declaration-only PRs** — “used Cursor” with empty verify column → incomplete PR (Unit 6 rule).
3. **Assistant-run CI claimed as human** — integrity issue if claimed; honesty is a positive Verify signal if disclosed.
4. **AI chooses proportions** — already forbidden; treat the PR as incomplete
   and block merge. The shared rubric, not this review, determines any
   summative consequence.
5. **Lane name confusion** — analyzer ML metrics ≠ coding-assistant disclosure (G7).

---

## 5. Recommendations (smallest complete change)

Do these in forge **before M1 templates freeze**; M9 then *consumes* the trail instead of inventing it.

### A. M1 — PR template (must)

Add a Unit-6-shaped block (FE I wording):

```markdown
## AI Review Log (required if an assistant touched this PR)

| What was AI-assisted | What I verified myself | Decision (ACCEPT / REJECT / N/A) | Reason if REJECT |
| --- | --- | --- | --- |
| | | | |

AI never approves or merges — a human does.
```

Keep existing: Plan link · Declaration delta · Measurement source.

### B. M1 — CONTRIBUTING / AGENTS (must)

- Two-phase rule in one paragraph.
- One REJECT expected across the semester (not per PR).
- Distinguish **coding assistants** vs **analyzer / ML evaluation**.
- Point to shared rubric URL (already planned).

### C. New forge page (should) — `AI-CRITICAL-OPERATING-ADDENDUM.md`

- Eight signs (adapt TTOD: log present, verify named, REJECT, AI-run vs human, plan-before-code, adversarial check e.g. break a validator, M2-style reflection if used, extended declaration quality).
- Instructor close-out recipe: anonymized cohort HTML + conclusions MD (copy pattern from `ttod/.../ai-critical-usage-2026-10-25/`).
- Explicit: tip/product quality ≠ AI-critical draft.

### D. M8 / mid-semester (should)

One formative checkpoint: “show one REJECT or one measurement AI suggestion you refused” — before M9 oral. Prevents empty Critique at S13.

### E. M9 (keep + tighten)

- Defence prompts stay three.
- Brief must include the PR log rule and the “AI never merges” sentence.
- After grades: optional **AI-critical cohort report** (research instrument I* + teaching close-out), pseudonymised — not a new grade after the fact.

### F. Do not

- Do not wait for M9 to invent the log shape.
- Do not add a second competing rubric number system.
- Do not require FE II Unit 6 as a dependency; teach the log locally in the brief.

---

## 6. Sufficiency scorecard (pre-integration baseline)

| Question | Enough? |
| --- | --- |
| Philosophy / integrity story (measured authorship vs AI fake) | **Yes** |
| Shared oral / declaration rubric referenced | **Yes** |
| Structural Defer (plans path) | **Yes** |
| Per-PR Critique + Verify operating procedure | **No** |
| Mid-cascade evidence so M9 is not first sighting | **No** |
| Instructor end-of-cohort AI-critical report recipe | **No** |
| FE I local teaching of the log (without Unit 6) | **No** |
| Coding-AI vs analyzer-ML disclosure clarity | **Partial** |

**Bottom line at review time:** Mondrian was **ready to argue** AI-critical
pedagogy but **not yet ready to grade** AI usage in the same operational manner
as the TTOD tail. D-20, the addendum and M1/M8/M9 now adopt the complete set;
their acceptance gates determine implementation status.

---

## 7. Pointers

- TTOD close-out: `~/src/ttod/docs/DEV_PLAN/ASSIGNMENTS/AI-CRITICAL-USAGE-CONCLUSIONS-2026-10-25.md`
- TTOD web report: `~/src/ttod/docs/DEV_PLAN/ASSIGNMENTS/ai-critical-usage-2026-10-25/index.html`
- Shared rubric: `web-foundations/docs/evaluation/shared/ai-declaration-oral-defence-rubric/`
- Mondrian AI rule origin: `PITCH.md` §12 · defence: `PHASE-M9.md`
