# PHASE-M9: Research, declaration, defence, brief — putting the project into value

> **Track:** L6 process; L3 `/declaration/`, `/es/`. Closes the cascade.
> **Status:** BLOCKED (M7 DONE for the shipped product; M8 DONE for the dataset release)

## Goal

Make the project legible as pedagogic research, art education, digital
humanities and practice-based research without touching a single student's
identity. Publish `/declaration/`; set up custody and pseudonymisation; and run
the defences with the shared rubric. Write the **student-facing assignment
brief in English and Spanish** (the preflight email is communication, not the
brief). Release the dataset with a citation and draft one congress abstract.

## Owners

- **Accountable:** instructor — shared-rubric defence, consent/custody boundary,
  post-grade research decision and phase sign-off.
- **Responsible:** Shell & Story lead for bilingual public pages; instructor
  for the student briefs and research templates; each student for their final
  declaration and defence.
- **Review:** bilingual human review for both briefs; independent cold review
  for pseudonymisation and release. AI never scores, approves or merges.

## Deliverables

- `src/pages/declaration.astro` (EN) and the `/es/` mirror of `/`, `/about/`,
  `/about-us/`, `/method/`, `/contribute/`, `/declaration/`, with `lang` and
  `hreflang`; gallery/editor controls are localized from one dictionary.
- `docs/research/NOTICE-SENT.md` (status/date/owner of M0 communications,
  without addresses or reply contents), `docs/research/PSEUDONYMISATION-PROTOCOL.md`
  (adapted from TTOD's data-minimization and instruments documents),
  `scripts/pseudonymise.py` (git log + PR metadata + declarations → `P01…Pn`,
  salted map outside git), with tests on fixtures.
- `docs/research/CUSTODY.md` template (the signed acceptances live outside git, as in TTOD's `SIGNED-CONSENTS-CUSTODY.md`).
- Defence: `docs/DEFENCE.md` — three prompts (one measured source primitive
  through normalization and the shared SVG/CSS-Grid derivation, one Δ with a wrap, one AI choice),
  scored with the shared rubric
  `/evaluation/shared/ai-declaration-oral-defence-rubric/` (v2.0.3) from
  web-atelier-udit; schedule in S13; structured notes template (I3), no
  audio/video.
- Student brief: `docs/brief/BRIEF-EN.md`, `docs/brief/BRIEF-ES.md` — and the
  same two published on the web-atelier-udit course site as the S13 lesson
  (separate PR in that repo; Liquid-safe, routed through lesson-publishing
  rules). This is the first assignment brief and is written last from the
  stabilized, M7-verified product.
- Optional post-grade instructor close-out: pseudonymised AI-critical cohort
  report + conclusions, consuming accumulated PR logs and the eight signs from
  `AI-CRITICAL-OPERATING-ADDENDUM.md`. It never creates a second student score
  or equates product quality with critical control.
- Dataset release: `packages/works/CITATION.cff`, a tagged release `works-v1`,
  the CC BY-NC-SA notice, `datasheet.md`, and
  `scripts/check-release-rights.py <git-ref>` which inspects the ref itself and
  rejects unresolved rights or any `pending-rights/` work.
- `docs/research/PRIOR-ART-SYNTHESIS.md`: M0's
  Andrzejewski–Stork–Zhu–Spronk anchors plus later evaluator-safe sources on
  computational/digital Mondrian and mathematical avant-garde studies. It
  distinguishes Mondrian/De Stijl, Kandinsky and Russian Constructivism.
- `docs/research/ABSTRACT-DRAFT.md`: one congress abstract (art education /
  DH / practice-based research); ordinary citations only from evaluator-safe
  Ahmes anchors, unresolved items kept as `[BIBLIO-GAP]`.
- `PHASE-M9-COLD-REVIEW.md`, `PHASE-M9-REPORT.md`.

## Scope

**In:** the above. **Out:** any analysis of research data before grades close; any named student in research text; any citation that bypasses the harness.

## Prompt (Implementation Agent)

```text
Implement PHASE-M9 per docs/DEV_PLAN/MONDRIAN/PHASE-M9.md.

## Deliver
1. /declaration/ with the sections: AI-assisted authorship (what assistants drafted, what humans measured,
   reviewed, rejected); research notice (four conditions, department/ECSIT informed, no new dictamen for this scope); what is public (repo,
   plans, declarations, measured works) and what is not (acceptances, pseudonym map, grades); visitor data (counts
   only); contact. Obey the public-privacy rule: services, not hosts.
2. /es/ mirror of prose pages with hreflang alternates; localize gallery/editor
   control labels from one dictionary without duplicating work data.
3. pseudonymise.py: input = repo path + PR export JSON + declarations dir; output = pseudonymised corpus dir;
   the salt/map written only to a path outside the repo passed by flag; refuse to run inside the repo tree.
   Tests on a fixture repo (git init in tmp) prove names never appear in output.
4. Defence doc + notes template; schedule proposal for S13.
5. Brief EN + ES written from the product as it is (not as planned): where things are, what is graded, the two-phase
   AI rule, plans location (D-13), required PR log, one-semester REJECT
   expectation, human-vs-assistant verification, “AI never approves or merges,”
   analyzer-ML distinction, Git amend/conflict rules, measurement checklist,
   exclusions, rights, defence prompts and what is public.
   Spanish prose rule applies. Then open the web-atelier-udit PR for the S13 lesson pages.
6. Promote M0 grounding into PRIOR-ART-SYNTHESIS.md. Add other sources only
   after the same Ahmes/Athanor/cite-gate path. CITATION.cff + datasheet +
   release tag; abstract draft with honest BIBLIO-GAP markers.
7. Full suite + imports. Hand off for cold review — do NOT mark DONE yourself.

## Constraints
- No research data processing before the grade-closure date recorded in CUSTODY.md.
- Co-author names appear only on the byline, never beside a pseudonym or a trace.
- Do not commit unless asked; the web-atelier-udit PR is opened, not merged, by this phase.
```

## Acceptance

- M7 report contains the live-product journey transcript used to write the
  brief; three sampled brief instructions match the deployed URLs and controls.
- `/declaration/` and `/es/declaration/` return 200 on Pages; hreflang alternates present on every mirrored page.
- `uv run pytest scripts/tests/test_pseudonymise.py` green; `grep -r "<any fixture real name>" <output dir>` returns nothing; running with `--map` inside the repo tree exits non-zero.
- `docs/brief/BRIEF-EN.md` and `BRIEF-ES.md` exist; the web-atelier-udit PR is open and its build has zero Liquid warnings.
- `CITATION.cff` validates (`cffconvert --validate`); release `works-v1`
  exists; `datasheet.md` has all seven sections;
  `uv run scripts/check-release-rights.py works-v1` exits 0 after reading files
  from that tag, not the working tree.
- Abstract draft exists; every ordinary citation resolves to an evaluator-safe
  Ahmes anchor in the synthesis. Every unresolved claim is marked
  `[BIBLIO-GAP]` and is not presented as established evidence.
- Defence schedule filed; notes template has no audio/video field.
- Three sampled assisted PRs contain complete AI Review Logs; M8's formative
  checkpoint is accounted for. Any post-grade cohort report is pseudonymised
  and explicitly non-summative.
- Cold review filed; blocking findings closed. Cascade status → COMPLETE in `INDEX.md`.

## Risks

- The brief drifts from the product → it is written last, from the shipped site, and the cold reviewer checks three random claims against the live URL.
- A student withdraws acceptance → their traces are excluded by the pseudonymisation input list; teaching record untouched.
- Dataset release before rights are resolved for every work → `pending-rights/` works are excluded from the tag; the datasheet says so.
