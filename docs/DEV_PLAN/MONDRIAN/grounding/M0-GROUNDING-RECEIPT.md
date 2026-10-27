# PHASE-M0 grounding receipt

**Date:** 2026-10-26T21:12Z (Tanit / instructor machine)  
**Operator:** ahmes-athanor-vault subagent  
**Status:** DONE (grounding verification pass; GraphRAG fail-closed as expected; Koçer acquired but cite-gap)

CLIs: `AH=~/src/ahmes/.venv/bin/ahmes` · `ATH=~/src/athanor/.venv/bin/athanor` · `ATHANOR_ENV=~/src/athanor/.env`

---

## 1. Andrzejewski Ahmes status

**DB:** `/Users/ruvebal/ahmes-library/scholar/documents/spie_2010_c85b3b9f/extract/extraction.db`

| Check | Result | Exit |
| --- | --- | --- |
| `ahmes status "$DB"` | Nodes **118**; Entities 202; Relations 73; Metadata fields **10**; DOI `10.1117/12.840558`; `evaluator_safe=yes`; citation preview `(Andrzejewski 2010, 1)` | **0** |
| SQLite inventory | `fission_node=118`, `metadata=10`, `entity_mention=224`, `relation=73`, `entity=202` | **0** |
| `ahmes enrich --meta --online` | **SKIPPED** — bibliography already present (title/authors/year/doi; method `manual-verified-crossref`; evaluator_safe). Re-run not needed. | — |

---

## 2. Athanor inject dry-run + scoped retrieval (no re-inject)

### 2.1 Dry-run capability (PHASE-M0)

| Command | Exit | Key output |
| --- | --- | --- |
| `athanor inject "$DB" --project-slug profield-frontend-pedagogy --vault scholar --dry-run` | **2** | `Invalid value: --dry-run requires --from-manifest` |
| `athanor inject --help` | **0** | `--dry-run` documented; pairs with `--from-manifest` |
| `athanor inject --from-manifest <corpus batch-manifest> --project-slug mondrian-project --library scholar --dry-run` | **0** | `dry_run: true`; plan over 10 PROCESSED_OK coats; **no Postgres write** |

**Capability result:** `--dry-run` works **only** with `--from-manifest` (confirmed).

### 2.2 Existing injection (do not re-inject)

From `grounding/ANDRZEJEWSKI-2010.md` (COMPLETED):

- **Injection ID:** `9a1a8bb5-05ff-4340-88bd-fbc10268a50f`
- **Project:** `profield-frontend-pedagogy` · **library:** `scholar`
- **Ahmes document_id:** `db745f4a-1dea-5727-8f28-19330e20a8e2`
- **Re-inject:** **not performed** (already COMPLETED; cold-review **F5** — re-inject skipped to avoid duplicate write)

Live verification: Mondrian-targeted `athanor search … --project-slug profield-frontend-pedagogy --library scholar` returns hits with `md.document_id=db745f4a-1dea-5727-8f28-19330e20a8e2`, `md.file_name=spie-2010.pdf`, `md.source_hash=c85b3b9f…`.

**Acceptance wording (F5):** “Athanor live injection reports zero failed” is evidenced by this COMPLETED id + live search — not by a second inject in the cold-review session.

### 2.3 Theme searches → 2 retained hits each → cite-gate

All cites: `ahmes query --cite "$DB:<uuid>" --style chicago-author-date --require-evaluator-safe` → **EXIT 0**, `evaluator_safe=yes`, confidence 0.95.

| Theme | Query (top) | Retained node UUID | Human page | Cite |
| --- | --- | --- | --- | --- |
| Formal representation | `Mondrian neo-plastic formal representation grid points` | `bcb56994-8c13-5e5e-a43b-09a22700237b` | p. 1 (`page_index=0`) | `(Andrzejewski 2010, 1)` |
| Formal representation | (same; classical scope) | `1d5b7216-991c-5a4d-833a-7e3a60c311dd` | p. 2 | `(Andrzejewski 2010, 2)` |
| Line/rectangle extraction | `Mondrian horizontal vertical line rectangle extraction` | `e44e0d8d-0e0f-5cfb-9c71-dc0fde0e6f46` | p. 2 | `(Andrzejewski 2010, 2)` |
| Line/rectangle extraction | (rectangle bounds) | `149d76aa-d296-518c-9de9-16013293dbb3` | p. 5 | `(Andrzejewski 2010, 5)` |
| Colour / area ratios | colour enum (prior retained) + area figure | `43d6c900-a5f0-5426-8ca0-4f382480303e` | p. 6 | `(Andrzejewski 2010, 6)` |
| Colour / area ratios | `Mondrian colour area ratios…` | `4c9dba70-a2b2-54fc-bf18-c250afd0c625` | p. 10 | `(Andrzejewski 2010, 10)` |
| Compositional style | `Mondrian compositional style machine learning` | `6939e2a2-5697-5c18-b10a-b29ebe7c0450` | p. 6 | `(Andrzejewski 2010, 6)` |
| Compositional style | (abstract classifier claim) | `35d78ae8-7871-5810-9f13-c94d45c7202e` | p. 1 | `(Andrzejewski 2010, 1)` |
| Faux works | `Mondrian generated replicas faux works decision tree` | `abd2a7b3-7771-531f-8eb9-70d6bd234ba8` | p. 8 | `(Andrzejewski 2010, 8)` |
| Faux works | (decision-tree figure) | `a1203d7a-e02c-5c19-801b-8e027ade6ea6` | p. 7 | `(Andrzejewski 2010, 7)` |
| Authenticity limits | `Mondrian authenticity idealized sketches…` | `07cd656b-12e0-5604-853c-636078747225` | p. 4 | `(Andrzejewski 2010, 4)` |
| Authenticity limits | (generative resemblance limit) | `b1e40c2d-741b-5f62-a2bc-0be9e3cbad43` | p. 10 | `(Andrzejewski 2010, 10)` |

Hits remain **discovery**; citations are Ahmes-node + page only.

---

## 3. Voice corpus (`mondrian-project`)

| Check | Result |
| --- | --- |
| `grounding/CORPUS-OVERNIGHT.md` | **DONE** (ended 2026-10-26T01:47:19Z; Perfect Square follow-up EXIT:0) |
| Athanor project | `mondrian-project` present in `athanor project list` (library `scholar`) |
| Coats | 10 PROCESSED_OK in overnight batch-manifest; dry-run plans all 10 |

### M0 query bank (`GRAPHRAG-PHASE-QUERIES.md` §M0)

Prefer primary coats (Collected Writings 1986). DB:

`/Users/ruvebal/ahmes-library/scholar/documents/mondrian_piet_the_new_art_the_new_life_the_collected_writings_of_piet_mondrian_1986_g_k_hall_3d25e683/extract/extraction.db`

Primary coat status: **5220** nodes; metadata 9; `evaluator_safe=yes`; `(Mondrian 1986, 1)`.

| Intent | Best hit UUID | Page | Cite-gate |
| --- | --- | --- | --- |
| Plastic means | `19d5de86-5efe-565d-8075-756d45ba8f78` | p. 194 | `(Mondrian 1986, 194)` EXIT **0** |
| Primary colours / non-colour | `35e7d873-5c87-598d-a578-5367a6f49d17` | p. 46 | `(Mondrian 1986, 46)` EXIT **0** |
| Primary colours (aspect) | `16ab6166-eef0-5173-b94a-747d646d82c7` | p. 46 | `(Mondrian 1986, 46)` EXIT **0** |
| Dynamic equilibrium | `4638bdbb-9081-5e3c-9d0e-9b603c4b1819` | p. 218 | `(Mondrian 1986, 218)` EXIT **0** |
| Perspective / natural appearance | `8023a7fe-eeb2-55fe-ba04-22a3f3303869` | p. 159 | `(Mondrian 1986, 159)` EXIT **0** |
| van Doesburg diagonal / break | `ee946f6b-8a39-5034-9c28-a722cc1aae40` | p. 14 | `(Mondrian 1986, 14)` EXIT **0** |
| Victory Boogie Woogie (exclusion catalogue) | `1331fb78-76db-5087-98f5-b77adb3e6708` | p. 11 | `(Mondrian 1986, 11)` EXIT **0** |

Search EXIT for all six intents: **0**. Primary preferred for all except where catalogue secondary also ranked (Boogie Woogie chronology — still primary PDF).

---

## 4. DevIAC GraphRAG fail-closed check

| Probe | Result |
| --- | --- |
| MCP `retrieve_grounded_context` with `vault=scholar` | **GraphError:** `Vault not found under AHMES_VAULT_DIR: scholar` |
| MCP `retrieve_grounded_context` with `vault=c85b3b9f` / `spie_2010_c85b3b9f` | **GraphError:** same (Cursor stdio graph) |
| MCP without `vault` | Runs; `graph_source=none`; unresolved vector hits; **no** Andrzejewski edges |
| Cursor MCP env (`~/.cursor/mcp.json` → `servers.graph`) | `AHMES_VAULT_DIR=/Users/ruvebal/src/MSCA/SVCM/research/.graph-mcp-vaults` · `AHMES_VAULT_PATH=…/chattable_avatars_llms_0db87e58/…` |
| Host vault dir contents | MSCA/SVCM flat vaults — **no** `spie_2010_c85b3b9f` |
| Docker `deviac-mcp` (`AHMES_VAULT_DIR=/ahmes-library`) | Resolves `c85b3b9f` → scholar extraction.db **in-container**; library name `scholar` still invalid as `vault=` (expects `slug_hash8`) |

**Mismatch (expected per ANDRZEJEWSKI-2010.md):** Cursor GraphRAG does **not** see the `~/ahmes-library/scholar` tree. Fail-closed. Page truth remains local Ahmes + scoped Athanor search. Do not cite GraphRAG edges for M0.

---

## 5. Koçer Özgün & Alaçam (2021) — DOI `10.5151/sigradi2021-72`

**Conference:** [SIGraDi 2021](https://www.sigradi.org/sigradi2021/) · XXV International Conference of the Iberoamerican Society of Digital Graphics · São Paulo · Blucher.

**RIS (owner-supplied, 27 Oct 2026):**

```text
TY  - CPAPER
TI  - Pixel-Based Geometric Decoding of Mondrian Compositions
AU  - Özgün, Feyza Nur Koçer
AU  - Alaçam, Sema
T2  - XXV International Conference of the Iberoamerican Society of Digital Graphics (SIGraDi 2021)
CY  - São Paulo
PB  - Blucher
PY  - 2021
SP  - 103
EP  - 114
SN  - 2318-6968
DO  - 10.5151/sigradi2021-72
UR  - https://doi.org/10.5151/sigradi2021-72
ER  -
```

| Step | Result | Exit |
| --- | --- | --- |
| DOI resolve | `doi.org` → Blucher article-details (Cloudflare **403** on HTML landing, 27 Oct 2026); Crossref API for `10.5151/sigradi2021-72` → title/year/pages OK | — |
| PDF acquire | `https://pdf.blucher.com.br/designproceedings/sigradi2021/72.pdf` → HTTP **200**, 778248 bytes | **0** |
| Staging | `grounding/corpus-staging/11-kocer-ozgun-alacam-pixel-geometric-2021.pdf` | — |
| `ahmes ingest … --library scholar --save-db --treeshake` | Vault `11_kocer_…_f33bad61`; **129** nodes; `document_id=733b6feb-7429-5679-abe4-8d7623f5f513` | **0** |
| First `enrich --meta --online` | Poisoned host DOI with **cited** Feijs arXiv `10.48550/arxiv.2011.00843` (refs node); `host_registry_mismatch`; **missing year** → `[BIBLIO-GAP]` | **0** then cite **2** |
| **Operator RIS coat (27 Oct 2026)** | Wrote `extract/bibliographic.ris` from owner RIS; seeded `metadata` DOI/`year`/`authors`/`title` `method=operator`; removed empty decoy bundle-root `extraction.db` | — |
| Cite-gate `--require-evaluator-safe` | **`(Özgün 2021, 1)`** · `evaluator_safe=yes` · conf 1.00 · source=metadata · node `5d7c3237-42c0-5928-bb2a-f99d25eb9d3c` | **0** |
| Athanor inject | **not done yet** (coat green; inject optional under `mondrian-project`) | — |

**Disposition:** **coat closed** — cite-ready. Do **not** re-run `enrich --meta --online` without pinning DOI `10.5151/sigradi2021-72`: full-text harvest prefers the longer Feijs arXiv DOI in the references. Pixel/matrix analytics prior art may now be Chicago-cited from Ahmes nodes.

---

## 6. Official URLs (no Ahmes) — D-05 matrix

Record with **follow-redirects** (`curl -sI -L`). Bare path without `.html` may return **308** before the final document (cold-review F6).

| Standard | URL | HEAD (follow redirects) |
| --- | --- | --- |
| JSON Schema 2020-12 Core | https://json-schema.org/draft/2020-12/json-schema-core.html | **200** (bare `/json-schema-core` historically **308→200**) |
| JSON Schema 2020-12 Validation | https://json-schema.org/draft/2020-12/json-schema-validation.html | **200** |
| CSS Grid Level 2 | https://www.w3.org/TR/css-grid-2/ | **200** |

---

## 7. Wisconsin 2010 dataset — licence & `work.schema.json` mapping

### Licence / availability

- Paper affiliation: University of Wisconsin–Madison (Andrzejewski & Zhu) — **not** a published open dataset URL in the vault text.
- Vault/`index.md` refers to “the dataset of **45** true Mondrian paintings” and generative negatives; feature-extraction software described; **no** licence, repository, or SPIE supplementary download named.
- Companion/SPIE pages not separately archived here.
- **Licence status: unresolved.** Do not assume redistribution rights for any Wisconsin-held image set.

### Representation → `work.schema.json` (per ANDRZEJEWSKI-2010.md architectural consequence)

| Paper §3.2 primitive | Project adaptation | Match? |
| --- | --- | --- |
| Four canvas-border grid points | Mandatory normalized x/y at 0 and 1 | **maps** |
| Oriented grid point (one coordinate) | Named points in ordered `points.x` / `points.y` | **maps** |
| H/V line: centre + extent + pixel thickness | Black line + orientation + point refs + thickness `τ=t/L⊥` | **maps** (normalized) |
| Coloured rectangle: 2H+2V + colour role | Rectangle x/y point-ref pairs + role | **maps** |
| Unfilled = white; lines over rectangles | Implicit white; CSS Grid line z-order | **maps** (derived) |
| ML / generative faux works | Outside MVP; authenticity limits retained | **intentional non-map** |

**Mismatch to avoid:** treating classifier accuracy or generated images as authentic Mondrian evidence; omitting thickness/provenance/uncertainty that the project adds beyond the paper.

---

## Operator inventory table (vault ops)

| slug | hash8 | mentions | relations_before | relations_after | skipped_reason |
| --- | --- | --- | --- | --- | --- |
| `spie_2010` | `c85b3b9f` | 224 | 73 | 73 | enrich relations not needed (already >0); meta enrich skipped (biblio OK) |
| `11_kocer_ozgun_alacam_pixel_geometric_2021` | `f33bad61` | 0 | 0 | 0 | NER/relations not run; **operator RIS coat** DOI Blucher; cite-safe |

---

## Overall status

**DONE** — Ahmes Andrzejewski green; Athanor dry-run capability recorded; injection ID retained without re-inject; six theme cites + voice-corpus M0 cites evaluator-safe; GraphRAG fail-closed (Cursor `AHMES_VAULT_DIR` ≠ scholar library); **Özgün & Alaçam 2021 operator RIS coat cite-safe** (27 Oct); D-05 standard URLs recorded; Wisconsin licence **unresolved**, representation mapping documented.
)
