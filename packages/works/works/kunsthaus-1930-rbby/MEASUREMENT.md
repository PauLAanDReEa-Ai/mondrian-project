# Measurement — `kunsthaus-1930-rbby`

| Field | Value |
| --- | --- |
| Work | *Composition with Red, Blue and Yellow* (1930) |
| Collection | Kunsthaus Zürich · inv. `1987/0028` |
| Catalogue size | **45 × 45 cm** (museum sheet); RKD 46 × 46 cm noted |
| Reproduction | Commons JPEG 5918 × 6000 (full frame); not stored in git |
| URL | see `work.yml` `provenance.reproduction.source` |
| Measured by | instructor (automated rail assist + hand review) |
| Wall time | **~45 min** (fetch + luminance rails + extent pass + YAML), 29 Oct 2026 |
| Review | `proposal` — refine before `accepted` |

## Method

1. Downsample max-edge 800 px.
2. Black mask: luminance &lt; 55.
3. Vertical/horizontal density peaks → rail centres.
4. Contiguous black runs → line extents (captures partial lines).
5. Chromatic cell roles from RGB samples between rails.
6. Thickness ≈ contiguous black band width / axis length (`τ = t/L⊥`).

## Uncertainty

| Quantity | σ (normalized) | Note |
| --- | --- | --- |
| Point positions | ≈ 0.008 | JPEG compression + frame shadow |
| Thickness | ≈ 0.004 | Band threshold sensitive |
| Partial extents | ≈ 0.01 | Run-break heuristic |

Do **not** treat this YAML as millimetre-perfect catalogue truth until an accepted review after a second pass on the same reproduction.
