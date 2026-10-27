<!--
Per-phase GraphRAG / Athanor query bank for Mondrian Project.
Discovery → full Ahmes node → cite gate. Never cite snippets.
Author: Rubén Vega Balbás, PhD · 25 October 2026
-->

# Phase GraphRAG query bank

**Store:** Athanor `--project-slug mondrian-project --library scholar`
(plus `profield-frontend-pedagogy` for Andrzejewski geometry only).

**Order of evidence for every phase query**

1. **Primary** — Mondrian’s own words (coats from `01-…writings…`, `02-neoplasticismo…`). Prefer verbatim when a match exists.
2. **Secondary verbatim** — only when specially load-bearing (equilibrium/rhythm; human/machine; museum object note).
3. **Classical academic idea + reference** — Chicago citation without long quote when the node supports the idea but not a teachable sentence.

**DevIAC GraphRAG note:** the live vault-root mismatch recorded in
[`ANDRZEJEWSKI-2010.md`](ANDRZEJEWSKI-2010.md) may still block Graph MCP on
`scholar`. Prefer `athanor search`, then Ahmes `query --cite`. Use Graph MCP
`retrieve_grounded_context` only after confirming the vault path resolves.

## Shared shell preamble

```bash
export ATHANOR_ENV=~/src/athanor/.env
set -a; source "$ATHANOR_ENV"; set +a
ATH=~/src/athanor/.venv/bin/athanor
AH=~/src/ahmes/.venv/bin/ahmes
SLUG=mondrian-project
LIB=scholar

q() { "$ATH" search "$1" --project-slug "$SLUG" --library "$LIB" --top-k "${2:-8}"; }
```

Resolve a hit: open the printed `extraction.db` + `node_id`, then:

```bash
"$AH" query --cite "$DB:$NODE" --style chicago-author-date --require-evaluator-safe
```

## M0 — Preflight / art-historical contract (pitch §5)

| Intent | Query (try in order) | Prefer |
| --- | --- | --- |
| Plastic means / horizontal–vertical only | `plastic means horizontal vertical lines planes` | Primary |
| Separation of colour and non-colour | `primary colours black white gray non-colour` | Primary |
| Asymmetric equilibrium | `dynamic equilibrium asymmetry balance` | Primary → Fallahzadeh |
| No depicted space / anti-perspective | `destruction of perspective natural appearance` | Primary |
| Diagonal dispute (hue rotates, grid does not) | `van Doesburg diagonal De Stijl departure` | Primary or classical secondary |
| Corpus exclusions (Boogie Woogie, coloured lines, lozenge) | `Victory Boogie Woogie coloured lines lozenge` | Secondary / catalogue — confirm exclusion language |

Geometry schema stays on Andrzejewski under `profield-frontend-pedagogy` (existing receipt).

## M2 — Schema language (only if prose needs artist intent)

| Intent | Query | Prefer |
| --- | --- | --- |
| Line as structure not contour | `line as structure destruction of volume` | Primary |
| Plane / colour as plastic expression | `colour planes plastic expression` | Primary |

Do **not** invent proportions from quotes. Numbers stay measured.

## M3 — `/about/` seven scenes + About Mondrian selection

| Scene | Query | Prefer |
| --- | --- | --- |
| Painting → neoplastic programme | `Neo-Plasticism new plastic art` | Primary |
| Measurement / construction | `composition construction determination` | Primary; Pomiès only for research-object metaphor |
| Ratios / equilibrium | `equilibrium rhythm proportion` | Primary → Fallahzadeh verbatim if stronger |
| CSS Grid as pedagogical plane | _(no historical quote required)_ | Instructor framing |
| Colour / primaries | `red yellow blue pure colour` | Primary |
| Transformation honesty (hue study breaks doctrine) | `colour is fixed red remains red` / Doesburg diagonal | Primary |
| Print / material limit | _(optional)_ material surface | Secondary; else instructor |

Fill the selection table in [`ABOUT-MONDRIAN-VALUE.md`](ABOUT-MONDRIAN-VALUE.md) after coats exist.

## M3 / M9 — `/method/`

| Intent | Query | Prefer |
| --- | --- | --- |
| Human vs machine composition judgement | `human machine Mondrian composition lines` | Noll (secondary verbatim) |
| Limits of statistical replicas | _(Andrzejewski slug)_ `generated replicas compositional style` | Andrzejewski |
| Meaning ≠ low-level features | `visual features meaning art` | Doboli if ingested later; else `[BIBLIO-GAP]` |

## M4 — Analyzer (classical)

Stay with Andrzejewski anchors already filed. Optional:

| Intent | Query | Prefer |
| --- | --- | --- |
| Thickness / line weight as plastic | `thickness line black` | Primary if present; else measured only |

## M8 — Reference / student work selection (after ingest)

| Intent | Query / action | Prefer |
| --- | --- | --- |
| Orthogonal mature works with black armature | Delphi + catalogue raisonné IDs | Catalogue + museum dimensions |
| Single-work prose seed | St Louis *Composition of Red and White* | Secondary museum note |
| Exclude trees / early nature | Bountis hits → label **prologue only** | Pitch §5 |

Catalogue dimensions and EU/US rights remain mandatory per work; RAG does not replace `REFERENCE-WORKS.md`.

## M9 — Congress abstract / grounded synthesis

Run the M0 + M3 banks again; keep only `evaluator_safe=yes` nodes. Pseudonymisation protocol unchanged.

## Q-FA1 — Fractal-architect Mondrian tree mode (after Bountis coat)

Queued in [`../WORK-QUEUE.md`](../WORK-QUEUE.md). Discovery only until cite gate.

| Intent | Query | Prefer |
| --- | --- | --- |
| Fractal / scaling in early trees | `fractal dimension Mondrian tree paintings` | Bountis secondary |
| Branching / self-similarity limits | `self-similarity branching landscape period` | Bountis → primary only if Mondrian writes on trees |
| Boundary vs neoplastic grid | `tree series natural appearance destruction` | Primary for “what matrix refuses” |

Do **not** promote tree fractals into `work.schema.json` or the MVP editor.

## Fail-closed behaviours

- Empty Athanor hits → keep `[BIBLIO-GAP]`; do not paraphrase a missing primary voice.
- Hit without DOI/year coat → meta enrich that vault before public cite.
- Graph MCP empty relations → still usable via `athanor search` + Ahmes; do not invent edges.
