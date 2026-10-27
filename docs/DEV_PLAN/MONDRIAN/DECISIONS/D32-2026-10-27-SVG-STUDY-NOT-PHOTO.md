# D-32 — Distributed artefact is a measured SVG study, not a photograph

**Status:** `adopted` · **Date:** 2026-10-27 · **Owner amend**  
**Amends / clarifies:** pitch §13, D-11 (what we license), corpus rights rows.

---

## Decision

The public product and exports distribute **geometric studies**: normalized
proportions, planes, and lines rendered as **SVG** (and CSS Grid previews)
derived from hand/analyzer measurement. They do **not** distribute museum
photographs, scans, or raster clones of the original painting.

What visitors see is **our digital abstraction of the construction** — a
measurable neoplastic partition — credited as a *geometric study after*
the named work. It is intentionally not pixel-faithful to any photograph.

---

## What this changes legally

| Layer | Shipping a museum photo | Shipping our measured SVG study |
| --- | --- | --- |
| Photographer / museum **reproduction** copyright | Often still attaches even when the painting is PD | **Avoided** — no photo is published or hotlinked |
| Painting / composition rights | Still relevant if the painting is in copyright | **Still relevant** if the underlying work is in copyright — a faithful structural rendering can be argued as a **derivative** in some jurisdictions |
| Facts / measurements | N/A | Proportions and coordinates as recorded facts are generally not copyright subject-matter; the **authored SVG assembly** and `work.yml` are **our** content |
| What we can license under D-11 | Photo we don’t own | **MIT** (code) + **CC BY-NC-SA 4.0** on *our* measurements, studies, and pedagogical prose — not a claim to own Mondrian (or Moss, etc.) |

So: **yes, it improves the legal posture** versus distributing photos. **No, it
does not make every artist worldwide free to clone.** EU PD Mondrian (since
2015) + generated study is the MVP path; US publication status remains
per-work `unresolved` until cleared. Sibling artists who are still in term
stay in `pending-rights/` or About-only until cleared (see
`corpus/REFERENCE-WORKS.md`).

---

## Mandatory credit / disclaimer (unchanged in substance)

Public surfaces must say, in substance:

> Geometric study after *\<Title\>* (\<year\>). Measurements: \<catalogue /
> method\>. Colours and transformations are the study, not the painting.
> No photograph of the original is distributed.

Hue rotation, liquid-fill, and variations are **visitor transformations of
the study**, not claims about the original’s pigments.

---

## Operational rules

1. Never commit or hotlink painting photographs (existing M0/M1 rule).
2. Measuring may consult a reproduction **outside** git; record URL, px, crop;
   discard the file.
3. Catalog / editor / print / QR / HTML export ship SVG (or CSS Grid), never JPEG/PNG of the painting.
4. PNG export of **our** SVG rasterisation is OK (it is a render of the study).
5. Sibling-surface artists: same SVG-study model; rights row required before Pages publication.
