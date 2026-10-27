<!--
Mondrian Project — overnight Ahmes → biblio → Athanor corpus pipeline.
Author: Rubén Vega Balbás, PhD · 25 October 2026
-->

# Mondrian corpus overnight pipeline

**Status:** DONE — ended 2026-10-26T01:47:19Z (Perfect Square follow-up EXIT:0). Receipt: `logs/overnight-receipt-2026-10-26T012800Z.md`. Morning cite repair on collected writings (year/ISBN/authors via Open Library) recorded in `logs/morning-status-2026-10-26.md`.
**Athanor project:** `mondrian-project` (library `scholar`).
**Ahmes project namespace:** `scholar` (same vault root as Andrzejewski).
**Staging:** [`corpus-staging/`](corpus-staging/) — symlinks only; originals stay in `bibliographies/design/`.
**Runner:** [`scripts/overnight-mondrian-corpus.sh`](scripts/overnight-mondrian-corpus.sh).

Andrzejewski et al. (2010) remains injected under `profield-frontend-pedagogy`
([`ANDRZEJEWSKI-2010.md`](ANDRZEJEWSKI-2010.md)). This overnight pass builds the
**artist / theory / mathematicalisation** store used by About, method language,
and post-ingest work selection — not a second copy of the SPIE paper.

## What runs overnight

| Step | Tool | Output |
| --- | --- | --- |
| 1 | `ahmes batch` (NER + **relations** + semantic, `workers=1`) | `extraction.db` per document under `~/ahmes-library/scholar/documents/` |
| 2 | `profield-athanor-ready.sh` (meta coats, online) | DOI/title/year coats; `--require-coats` gate |
| 3 | `athanor inject --from-manifest` | Scoped RAG under `mondrian-project` |
| 4 | DevIAC `ingest_ahmes_manifest.sh` (optional, derived) | Vector discovery only — never citation |
| 5 | Smoke `athanor search` + receipt | `logs/overnight-receipt-*.md` |

Resume: re-run the same script. Batch is SHA-idempotent (`PROCESSED_OK` skipped).

## Staged sources (25 Oct 2026)

| # | Staging name | Role | Notes |
| --- | --- | --- | --- |
| 01 | `01-mondrian-collected-writings-1986.pdf` | **Primary** — collected writings | ~183 MB; dominates wall clock |
| 02 | `02-neoplasticismo-pintura-arquitetura.pdf` | **Primary** (PT) | Writings / neoplasticism |
| 03 | `03-fallahzadeh-equilibrium-rhythm-2018.pdf` | Secondary — equilibrium / rhythm | Already on prior-art queue |
| 04 | `04-bountis-fractal-tree-paintings.pdf` | Secondary — early trees / fractal | Prologue only (pitch §5); not MVP corpus |
| 05 | `05-noll-human-or-machine-1966.pdf` | Secondary — human vs machine judgement | Method / authenticity limits |
| 06 | `06-stlouis-composition-red-white-1974.pdf` | Secondary — single-work museum note | Candidate for reference-work prose |
| 07 | `07-delphi-complete-works-mondrian-2018.epub` | Catalogue survey | Work-selection aid after ingest |
| 08 | `08-furio-el-ciervo-1982.pdf` | Secondary ES essay | Universal / neoplasticism framing |
| 09 | `09-pomies-constructing-object-2016.pdf` | Secondary — research-object metaphor | Method language, not art history |
| 10 | `10-parkstone-perfect-square-2011.pdf` | Secondary — Parkstone survey | Added 25 Oct 21:10 after download completed (~11 MB, 5 pp.); queued via follow-up resume (`screen` `mondrian-ps-followup`) because the live batch had already triaged 9 files |

**Previously excluded (resolved)**

| File | Reason |
| --- | --- |
| Perfect Square `*.pdf` / `*.part` | Was empty/incomplete; now staged as `10-…` |

## Operator commands

```bash
# Start / resume overnight — use screen so IDE shells cannot reap the job
cd frontend-pedagogy/forge/mondrian-project/grounding
screen -dmS mondrian-overnight bash -lc \
  './scripts/overnight-mondrian-corpus.sh > logs/overnight.latest.log 2>&1; echo EXIT:$? >> logs/overnight.latest.log'
echo mondrian-overnight > logs/overnight.screen

# Attach / status / tail
screen -ls | grep mondrian
tail -f logs/overnight.latest.log

# Morning: receipt + query bank
ls -lt logs/overnight-receipt-*.md | head -3
# then follow GRAPHRAG-PHASE-QUERIES.md
```

Live session (25 Oct 2026 evening): `screen -ls` → `mondrian-overnight` (Detached);
first Docling pass is the ~183 MB collected writings vault
`mondrian_piet_the_new_art_…_3d25e683`.

Environment knobs: `MONDRIAN_BATCH_WORKERS` (default `1`), `MONDRIAN_SKIP_DEVIAC=1`,
`MONDRIAN_ATHANOR_SLUG`, `AHMES_LIBRARY`.

## Cite discipline (unchanged)

1. `athanor search` / DevIAC / Graph MCP → **discovery only**.
2. Open the full Ahmes node + page; `ahmes query --cite … --require-evaluator-safe`.
3. Public `/about/` and `/method/` prose may use Chicago author–date only after the cite gate.
4. Vector snippets never appear in student-facing pages.

## Link to cascade

| Cascade need | After this pipeline |
| --- | --- |
| M0 art-historical `[BIBLIO-GAP]` closure | Primary-source quotes from 01/02 |
| M3 `/about/` seven scenes | Verbatim plastic means + equilibrium language |
| M3 `/method/` | Noll + Andrzejewski (other slug) limits |
| M8 / M0 reference-work selection | Delphi + St Louis + catalogue dimensions still required |
| M9 abstract / synthesis | Evaluator-safe nodes only |

See [`GRAPHRAG-PHASE-QUERIES.md`](GRAPHRAG-PHASE-QUERIES.md) and
[`ABOUT-MONDRIAN-VALUE.md`](ABOUT-MONDRIAN-VALUE.md).
