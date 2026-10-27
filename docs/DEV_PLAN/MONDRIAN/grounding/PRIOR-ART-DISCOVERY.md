# Prior-art discovery queue

**Status:** discovery only. None of these items is citation-ready until it has
passed the Ahmes → Athanor → complete-node → evaluator-safe citation gate.

This queue keeps unlike traditions separate. Mondrian/De Stijl/Neo-Plasticism
is the project's subject. Kandinsky, Malevich/Suprematism and Russian
Constructivism may be comparative contexts; they are not aliases or one style.

## Overnight local corpus (25 Oct 2026)

Ahmes → biblio coats → Athanor inject under project slug `mondrian-project`.
Operator plan: [`CORPUS-OVERNIGHT.md`](CORPUS-OVERNIGHT.md). Phase query bank:
[`GRAPHRAG-PHASE-QUERIES.md`](GRAPHRAG-PHASE-QUERIES.md). About / works value:
[`ABOUT-MONDRIAN-VALUE.md`](ABOUT-MONDRIAN-VALUE.md). Staging symlinks:
[`corpus-staging/`](corpus-staging/). Perfect Square PDF excluded until the
`.part` download completes.

Evidence order for every cascade phase: **primary Mondrian verbatim → specially
relevant secondary verbatim → classical idea + reference**. Geometry schema
evidence remains Andrzejewski under `profield-frontend-pedagogy`.

## Authority and object records

- [The Mondrian Papers](https://edition.mondrianpapers.org/) — RKD/Huygens
  digital scholarly edition; candidate authority for Mondrian's terminology and
  theoretical statements.
- [Piet Mondrian: Catalogue Raisonné](https://pietmondrian.rkdstudies.nl/foreword/)
  — candidate authority for identifiers, dates, dimensions, media, provenance
  and collection records.
- [Victory Boogie Woogie research data](https://www.rkd.nl/en/current/news/research-data-on-mondrians-victory-boogie-woogie-now-available-online)
  — RKD/RCE/Kunstmuseum technical dataset; candidate for a later account of
  revision states, not for the MVP corpus excluded by D-12.
- Martins et al., “The making of *Broadway Boogie Woogie*”,
  [Heritage Science (2016)](https://www.nature.com/articles/s40494-016-0091-4)
  — candidate conservation study of underlayers and revision.

## Computational and mathematical precedents

- Andrzejewski, Stork, Zhu and Spronk, “Inferring compositional style in the
  neo-plastic paintings of Piet Mondrian by machine learning” — locally
  extracted; see [`ANDRZEJEWSKI-2010.md`](ANDRZEJEWSKI-2010.md).
- Park, “Stylistic Reproductions of Mondrian's Composition with Red, Blue and
  Yellow through Evolutionary Computation,”
  [CAADRIA 2020](https://doi.org/10.52842/conf.caadria.2020.2.133) — candidate
  shape-grammar/parametric precedent; a computational hypothesis, not evidence
  that Mondrian painted algorithmically.
- Özgün, Feyza Nur Koçer, and Sema Alaçam, “Pixel-Based Geometric Decoding of
  Mondrian Compositions,” [SIGraDi 2021](https://www.sigradi.org/sigradi2021/)
  proceedings (Blucher), DOI [10.5151/sigradi2021-72](https://doi.org/10.5151/sigradi2021-72),
  pp. 103–114 — Ahmes coat **evaluator_safe** (operator RIS 27 Oct 2026;
  [`M0-GROUNDING-RECEIPT.md`](M0-GROUNDING-RECEIPT.md) §5) —
  candidate normalized geometry and spatial-relation precedent.
- Fallahzadeh, Gamache and Araújo, “Equilibrium and Rhythm in the Art of Piet
  Mondrian,” [Cogent Arts & Humanities
  2018](https://doi.org/10.1080/23311983.2018.1525858) — candidate theoretical
  bridge from measurable relations to dynamic equilibrium and living rhythm.
- Bountis, Fokas and Psarakis, “Fractal analysis of tree paintings by Piet
  Mondrian (1872–1944),” *International Journal of Arts and Technology*
  ([doi:10.1504/ijart.2017.083902](https://doi.org/10.1504/ijart.2017.083902)) —
  Ahmes coat cite-safe; **Q-FA1 DONE** — fractal-architect Mondrian tree mode +
  pitch/course backgrounds ([`../WORK-QUEUE.md`](../WORK-QUEUE.md)). Prologue /
  atmosphere only — not the neoplastic MVP schema.
- Spayd, Reynolds and Lansinger, “Geometric Elements in the Art of Piet
  Mondrian,” [Journal of Humanistic Mathematics
  2019](https://scholarship.claremont.edu/jhm/vol9/iss1/6/) — candidate
  mathematical interpretation and explicit comparison with Moholy-Nagy.
- Schirillo and Plumhoff, “Mondrian, Eye Movements, and the Oblique Effect,”
  [Perception 2009](https://doi.org/10.1068/p6160) — candidate orientation
  study; small sample, so no general user-preference claim.
- Doboli, Agha Zahedi and Gholamrezaei, “Inching Towards Automated
  Understanding of the Meaning of Art: An Application to Computational
  Analysis of Mondrian's Artwork,”
  [arXiv:2302.00594](https://arxiv.org/abs/2302.00594) — candidate critical
  limit on equating low-level visual features with artistic meaning; relevant
  to `/method/`, not to the geometry schema.

## Interaction precedents

- [Mondrian Maker](https://studiodigital.kunstmuseum.de/piet-mondrian-mondrian-maker),
  Kunstmuseum Den Haag — institutional interaction precedent for line,
  thickness, colour and lozenge controls; implementation inspiration only.
- [Mondrian in Style](https://chaoyue-zhao.github.io/mondrian-in-style/) —
  responsive recomposition precedent; not scholarly evidence.
- [Make Your Own Mondrian](https://googlecreativelab.github.io/coder-projects/projects/mondrian/)
  — HTML/CSS teaching precedent whose fixed-position implementation should not
  determine this project's modern architecture.

## Comparative digital-humanities precedents

- [Ode to Construction](https://odetoconstruction.com/) — code-to-vector,
  print and installation practice around Russian avant-garde construction;
  comparative practice-based research, not Mondrian evidence.
- [Digital Formalism: Vienna Vertov
  Collection](https://www.vr.tuwien.ac.at/projects/digital-formalism/) —
  institutional precedent for computationally operationalizing formal concepts
  in an archive; not a source for Neo-Plastic rules.

## D-05 source applicability

| Source | Applicable to | Status / decision |
| --- | --- | --- |
| Andrzejewski et al. (2010), §3.2 | Canonical points, rectangles, explicit lines, thickness and source/derived separation | **Evaluator-safe; D-05 basis.** The project adds normalization, provenance, uncertainty and CSS derivation. |
| JSON Schema Draft 2020-12 [Core](https://json-schema.org/draft/2020-12/json-schema-core) and [Validation](https://json-schema.org/draft/2020-12/json-schema-validation) | Structural contract and validation vocabulary | **Normative technical source; M2 basis.** Semantic geometry checks remain code. |
| [CSS Grid Layout Module Level 2](https://www.w3.org/TR/css-grid-2/) §§6.5, 7.2 | Overlapping grid items, z-order and proportional `fr` tracks | **Normative technical source; renderer basis.** It supports the derived plan, not claims about Mondrian. |
| Özgün & Alaçam (2021) SIGraDi | Independent pixel/matrix decoding, colour-area percentages and horizontal/vertical fragmentation | **Applicable; coat cite-safe.** Use Ahmes nodes for Chicago cites; does not replace the explicit-line Andrzejewski source model. |
| Park (2020) | Parametric/vector reconstruction and line-segment variables | **Applicable but discovery-only and generation-adjacent.** Use only for later comparison; not needed to freeze M2. |
| Doboli et al. (2023) | Limits of visual-feature models as accounts of meaning | **Applicable but discovery-only.** Candidate for `/method/` and the research discussion, not schema structure. |
| Catalogue raisonné / museum object record | Title, date, dimensions, medium and reproduction identity per work | **Still required per work.** A computational paper cannot supply object-level provenance. |

No second scholarly source is required to implement M2: Andrzejewski et al.
directly specifies the adopted representation, while JSON Schema and CSS Grid
are the relevant normative implementation authorities. Koçer Özgün & Alaçam is
the highest-priority missing scholarly extraction because it independently
addresses matrix-based geometric decoding and colour proportions. It remains a
M0/M9 bibliographic task, not a blocker for the source contract.

## M0 decisions this queue must inform

1. Build a source matrix with `work identifier → observed feature →
   interpretation → implementation decision → confidence`.
2. Label every modeled property as `documented`, `inferred`,
   `computational-hypothesis` or `visitor-transformation`.
3. Reconstruct a catalogue-identified source state before exposing
   transformations.
4. Treat responsive behaviour as an experiment: proportional scale,
   constraint-preserving reflow and controlled recomposition must not be
   conflated.
5. Keep generation, authenticity scoring and claims about Mondrian's internal
   process outside the MVP.
