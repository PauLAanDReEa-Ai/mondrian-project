<!--
Research-value brief: what Ahmes + Athanor buy the Mondrian Project.
Fill selection tables after overnight receipt. Discovery ≠ citation.
Author: Rubén Vega Balbás, PhD · 25 October 2026
-->

# Ahmes × Athanor value for the Mondrian Project

**Claim (engineering):** overnight extraction + coats + scoped inject turns a
folder of PDFs into **page-addressable, cite-gated** evidence the cascade can
query without inventing Mondrian’s voice.

**Claim (product):** `/about/` and work captions can move from instructor
memory + `[BIBLIO-GAP]` to **primary-first** language (Mondrian on plastic
means, equilibrium, colour) with secondary support only where it earns a quote.

## What the couple is for (and is not)

| Layer | Role | Used for |
| --- | --- | --- |
| **Ahmes** | Sovereign extraction + bibliography coats + `query --cite` | Page truth, Tri-Anchors, evaluator-safe gates |
| **Athanor** | Scoped RAG over injected coats (`mondrian-project`) | Discovery of candidate nodes for About / method |
| **DevIAC vectors / GraphRAG** | Derived search / typed hops when vault resolves | Lead finding only |
| **Catalogue / museum** | Dimensions, inventory, rights | `REFERENCE-WORKS.md` — not replaceable by RAG |

Not for: inventing proportions, authenticating student works, or publishing
vector snippets.

## Why this corpus (priority rationale)

| Priority | Source | Buys the project |
| --- | --- | --- |
| **P0 flag** | *Le Néoplasticisme* (Paris: Effort Moderne / Rosenberg, **1920**) — imprint only | **Project flag quote** + primary French voice — [`FLAG-QUOTE-1920.md`](FLAG-QUOTE-1920.md) |
| P0 | Collected writings (1986) + Neoplasticismo PT | Evaluator-safe doctrine for other About scenes 1–3, 5–6 |
| P1 | Fallahzadeh et al. 2018 | Bridge from measurable relations → “equilibrium / living rhythm” without claiming Mondrian painted algorithms |
| P1 | Noll 1966 | Method honesty: human vs machine judgements on *Composition with Lines* |
| P2 | St Louis 1974 bulletin | Seed prose for one measured reference work |
| P2 | Delphi Complete Works | Post-ingest **selection shortlist** of orthogonal black-armature works |
| P3 | Bountis fractal trees | Explicitly **out** of MVP corpus; useful as “what this matrix refuses” **and** as Q-FA1 fractal-architect tree-mode / pitch–course backgrounds ([`../WORK-QUEUE.md`](../WORK-QUEUE.md)) |
| P3 | Furió 1982 / Pomiès 2016 | ES universal framing / research-object metaphor — method tone, not schema |

Andrzejewski (already injected) remains the **geometry** authority; this
corpus is the **voice and limits** authority.

## About Mondrian — selection table (fill after overnight)

After `logs/overnight-receipt-*.md` exists, run
[`GRAPHRAG-PHASE-QUERIES.md`](GRAPHRAG-PHASE-QUERIES.md) §M3. Keep at most
**one primary quote per About scene** unless a second is required to contrast
(e.g. Doesburg diagonal).

| About scene | Needed idea | Primary hit (coat · node · p.) | Secondary only if… | Public form |
| --- | --- | --- | --- | --- |
| **Epigraph / flag** | Rapports · équilibre | `⟨le_neoplasticisme_mondrian_1920_01f3300f⟩ · nodo 06184a3b-fb54-58aa-826a-78eae35c89a6 · page_index 7` | — | Imprint 1920 + [`FLAG-QUOTE-1920.md`](FLAG-QUOTE-1920.md) |
| 1 Painting | Neo-Plastic programme · rectangular planes | Same coat · nodes `78ad4e44-…`→`06184a3b-…` · page_index 7 (expansion) · *or* 1986 `9165c3df-…` p.154 if evaluator_safe required | 1986 if Chicago author-date mandatory | Imprint 1920 · or `(Mondrian 1986, 154)` |
| 2 Measurement | Construction / determination | _still thin — keep searching / Pomiès metaphor only_ | Pomiès if metaphor only | |
| 3 Ratios | Equilibrium / rhythm | **Flag** (1920) first · else `⟨…3d25e683⟩ · nodo 82650d3e-… · p. 192` | Fallahzadeh if expanding | Imprint 1920 · or `(Mondrian 1986, 192)` |
| 4 CSS Grid | Pedagogical plane | — | never force a historical quote | Instructor |
| 5 Colour | Primaries vs non-colours | `⟨…3d25e683⟩ · nodo 540238ff-d135-55d0-8e81-bc715df396f7 · p. 143` — rectangular plane/prism in primary colours and non-colour (evaluator_safe) | — | `(Mondrian 1986, 143)` |
| 6 Transformation | Hue study breaks doctrine | _pending Doesburg / colour-fixed primary hit_ | Doesburg secondary | |
| 7 Print | Material / reproduction limit | optional | — | |

Morning pass: [`logs/morning-status-2026-10-26.md`](logs/morning-status-2026-10-26.md).

## Works selection (after corpus ingest)

D-12 still requires three instructor references (square-ish, vertical, horizontal),
orthogonal, black armature, no lozenge / Boogie Woogie / coloured-line works.

**Proposed morning procedure**

1. `athanor search "Composition red yellow blue 1920s"` under `mondrian-project`.
2. Cross-check Delphi hits against RKD catalogue raisonné IDs (external).
3. Prefer works that also appear in St Louis / museum notes when a secondary
   paragraph helps `/gallery/<slug>/`.
4. Write candidates into `corpus/REFERENCE-WORKS.md` with catalogue dimensions
   and rights — RAG never fills mm.

| Candidate slug (provisional) | Why shortlisted | Status |
| --- | --- | --- |
| `kunsthaus-1930-rbby` | Square-ish 45×45 cm; classical primaries + black armature | **selected** — [`../corpus/REFERENCE-WORKS.md`](../corpus/REFERENCE-WORKS.md) |
| `folkwang-1927-ryb` | Vertical 75×52 cm; Folkwang / RKD | **selected** |
| `tate-1935-comp-b-red` | Horizontal 63.3×80.3 cm; Tate T07560 | **selected** |

## Demonstration queries (smoke after receipt)

```bash
set -a; source ~/src/athanor/.env; set +a
ATH=~/src/athanor/.venv/bin/athanor
$ATH search "plastic means horizontal vertical" --project-slug mondrian-project --library scholar --top-k 5
$ATH search "dynamic equilibrium Neo-Plastic" --project-slug mondrian-project --library scholar --top-k 5
$ATH search "human or machine composition with lines" --project-slug mondrian-project --library scholar --top-k 5
```

Then resolve ≥1 hit per query to a full Ahmes node and run `--require-evaluator-safe`.
That triple — **scoped hit → complete node → cite gate** — is the research value
the overnight job exists to unlock.

## Success criteria for “valuable couple”

| Criterion | Pass |
| --- | --- |
| ≥1 primary coat with `evaluator_safe` quote usable in About scene 1 or 5 | |
| ≥1 Fallahzadeh or primary equilibrium sentence for scene 3 | |
| ≥1 Noll or Andrzejewski limit sentence for `/method/` | |
| Delphi/St Louis inform a shortlist of ≥5 orthogonal works for human rights/dimension check | |
| Zero public pages cite Athanor snippets | always |

Mark rows in the morning report; do not mark M0 DONE on discovery alone.
