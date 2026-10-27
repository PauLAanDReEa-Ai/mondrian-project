# PHASE-M0: Preflight — grounding, decisions, probes, letters, corpus

> **Track:** no product code. Grounding, decisions, toolchain probes, institutional communications, reference corpus and rights.
> **Status:** DONE

## Goal

Complete the Ahmes → Athanor extraction/injection/retrieval pass and make a
fail-closed GraphRAG capability check over the
Andrzejewski–Stork–Zhu–Spronk paper; confirm the overnight Mondrian voice
corpus under Athanor slug `mondrian-project` (see
`grounding/CORPUS-OVERNIGHT.md`) and run the primary-first query bank in
`grounding/GRAPHRAG-PHASE-QUERIES.md` for pitch §5 / About seeds; turn every
`proposed` row in `MONDRIAN-CASCADE.md` §1 into `ratified` or `rejected`; prove
the toolchain; prepare the institutional communications; and fix the reference
works and rights rows—so that M1 opens on facts.

Live facts (amended 27 Oct 2026): instructor Node **v24.22.1** via nvm (D-28;
Oct 2026 security floor — prior M0 probe was vulnerable 22.22.0). pnpm 10.30,
Python 3.14.7, **uv 0.13.5**. D-04 still pins the product to Python 3.12
pending an actual TensorFlow-wheel probe.

## Deliverables

- `PHASE-M0-REPORT.md` with: grounding receipt; D-table copied and decided;
  probe table; letters' send dates; reference-works table.
- `grounding/ANDRZEJEWSKI-2010.{md,json}`: extraction DB, full node IDs,
  pages, cite-gate results, Athanor ingest receipt, GraphRAG queries, retained
  and discarded findings.
- Voice corpus: confirm [`grounding/CORPUS-OVERNIGHT.md`](grounding/CORPUS-OVERNIGHT.md)
  is DONE (Athanor `mondrian-project`, 10 coats); use
  [`grounding/ABOUT-MONDRIAN-VALUE.md`](grounding/ABOUT-MONDRIAN-VALUE.md) and
  [`grounding/GRAPHRAG-PHASE-QUERIES.md`](grounding/GRAPHRAG-PHASE-QUERIES.md)
  for pitch §5 / About seeds. Parallel visual work stays in
  [`WORK-QUEUE.md`](WORK-QUEUE.md) (does not block D-rows).
- `grounding/PRIOR-ART-DISCOVERY.md` promoted into a source matrix only after
  each retained item passes the same citation gate. Each modeled rule records
  work ID, observed feature, interpretation, implementation and confidence
  (`documented|inferred|computational-hypothesis|visitor-transformation`).
  Koçer Özgün & Alaçam (2021) is the first missing scholarly extraction to
  attempt because its pixel/matrix decoding and colour proportions can test the
  analytics independently; failure to acquire it remains `[BIBLIO-GAP]` and
  does not block D-05. JSON Schema 2020-12 and CSS Grid Level 2 are recorded as
  normative technical sources, not scholarly evidence about Mondrian.
- Local correspondence drafts under gitignored `_private/`: student preflight
  email and `CORREO-DEPARTAMENTO-ECSIT-ES.md` adapted from TTOD for
  department coordination, degree direction and ECSIT IP. Only send dates and
  decisions enter the tracked M0 report; addresses, replies and signed material
  remain private.
- `corpus/REFERENCE-WORKS.md`: three works (square-ish, vertical, horizontal), catalogue source for dimensions, reproduction used for measuring (with recorded pixel size and crop), EU and US rights status, who measured, date.
- Amendments to downstream `PHASE-M*.md` where a decision changed.
- `PHASE-M0-COLD-REVIEW.md`.

## Scope

**In:** grounding, decisions, probes, letters, corpus selection, rights checks,
Baseline re-verification, and the 2010 dataset's licence/representation shape.
**Out:** any repository creation (M1), any measurement beyond the three references, writing the student brief.

## Prompt (Implementation Agent)

```text
Implement PHASE-M0 per frontend-pedagogy/forge/mondrian-project/PHASE-M0.md.

## Deliver
1. Grounding first. Confirm the background Ahmes ingest completed; run status, fission-node count,
   vocab check and bibliography enrichment (`ahmes enrich --meta --online`). For a single DB, omit
   `--dry-run`: the installed Athanor CLI permits dry-run only with `--from-manifest`; record that
   capability result, then inject live. Only after injection, query scoped Athanor retrieval and GraphRAG
   for formal representation; line/rectangle extraction; colour/area ratios; compositional style; faux
   works; authenticity limits. Resolve retained hits to complete Ahmes pages and `ahmes query --cite`.
   Store full UUIDs. Hits are discovery, never citations.
   Attempt the same acquire/extract/cite gate for Koçer Özgün & Alaçam (2021);
   if unavailable, retain it as discovery-only and do not delay M2. Record the
   official JSON Schema 2020-12 Core/Validation and CSS Grid Level 2 URLs in the
   D-05 source matrix without sending standards through Ahmes.
2. Decisions. Copy cascade §1 into PHASE-M0-REPORT.md. For each D-row write ratified|rejected + one
   evidence line (a command output, a document, a named conversation with date). D-02 needs a live
   `pnpm create astro@latest` dry run on a throwaway dir (delete it) and a confirmation that
   withastro/action@v6 exists. D-04 needs `uv --version` and
   `uv python install 3.12`. Probe TensorFlow only if M0 adopts the optional
   learned-classifier extension; it is not an MVP gate.
3. Probes table: node, pnpm, uv, python (3.12 via uv), git, gh; same on one student laptop (ask the
   human; record "not yet" if unavailable — that is a BLOCKED-able fact, not a failure).
4. Baseline re-check: for each row of rationale §4.1 that needed an M0 re-check, record the status with the
   URL consulted and the date. Amend the table if anything moved.
5. Communications: adapt
   ~/src/ttod/docs/research/institutional/SOLICITUD-AUTORIZACION-PEDAGOGICA-ES.md
   to Front-End I / Mondrian (code MP-FEI-2026-27). Address department
   coordination and degree direction; copy ECSIT IP. This is advance
   communication/confirmation under the existing teaching-innovation line, not
   a request for a new ethics opinion. Keep the draft under `_private/`.
   Adapt participant information/acceptance only if research participation is
   opened. Do not send anything: hand drafts to the human and record only the
   dates/status they report.
6. Corpus: propose three works meeting D-12 with catalogue dimensions and a reproduction whose pixel
   size and crop you record. Check EU (PD since 2015) and US status per work; write "unresolved" where
   you cannot resolve — never guess. Check the licence of the 2010 Wisconsin dataset and whether its
   representation (line positions, rectangles, colours) maps onto work.schema.json; record the mapping
   or the mismatch.
7. Amend downstream phases for any rejected D-row, in the same change as the report.
8. Hand off for cold review — do NOT mark DONE yourself.

## Constraints
- No measurement by eye for the reference works: dimensions from a named catalogue; boundaries from
  a recorded reproduction (the actual hand measurement happens in M2 and is time-boxed).
- No photographs saved into this folder.
- Do not commit unless asked.
```

## Acceptance

- `PHASE-M0-REPORT.md` has 20 D-rows, each `ratified` or `rejected`, each with evidence; zero `proposed` remain.
- Ahmes status has >0 nodes and bibliography metadata; Athanor live injection
  reports zero failed; post-injection retrieval and GraphRAG capability results
  are recorded (including a fail-closed vault-root mismatch); every retained
  claim has DB, full node ID, page and cite-gate status.
- Probe table has an exit code for every command on the instructor machine; the student-laptop column is filled or marked `not yet` with a named owner.
- Python 3.12 installs through uv. If the optional learned-classifier extension
  is adopted, the TensorFlow import/version probe is also recorded.
- The ignored `_private/` correspondence drafts exist locally; tracked reports
  record only `pending|sent|answered`, date and owner—no recipient addresses or
  reply contents.
- `corpus/REFERENCE-WORKS.md` has three rows with catalogue source, reproduction record, EU status, US status (or `unresolved`), none invented.
- Every downstream phase whose assumption changed is amended; `grep -n "proposed" MONDRIAN-CASCADE.md` returns no D-row.
- Cold review filed; blocking findings closed.

## Risks

- A D-row cannot be decided without the department's answer → mark `BLOCKED (D-xx)`, let M1 proceed only if the row does not affect it (D-06 does not; D-01 does).
- TensorFlow on Apple Silicon under 3.12 installs but is slow or needs `tensorflow-metal` → record; the analyzer baseline is classical, so this is not a blocker.
- US rights status unresolvable in the session → record `unresolved`; the public starter waits (pitch §13), measuring does not.
