<!--
Mondrian Project — three instructor reference works (D-12) + recorded growth candidates.
Catalogue dimensions only; no eye measurement; no photographs in this folder.
Author: Rubén Vega Balbás, PhD · M0 26 October 2026 · amended 27 October 2026
-->

# Reference works (instructor corpus)

**Status:** M0 selection recorded; hand measurement deferred to M2/M8 (time-boxed).  
**Rule:** dimensions from a named catalogue; boundaries from a recorded
reproduction (pixel size + crop) at measurement time — never by eye.  
**Exclusions (D-12 / pitch §5):** lozenge, coloured-line, *Boogie Woogie*, and pre–neo-plastic / Cubist-transition works (e.g. 1914
*Tableau no. 2 / Composition no. V*).

## Three works (M0 instructor set)

| Aspect | Slug (provisional) | Title | Date | Catalogue dimensions (H × W) | Collection / inv. | Catalogue source consulted 26 Oct 2026 |
| --- | --- | --- | --- | --- | --- | --- |
| Square-ish | `kunsthaus-1930-rbby` | *Composition with Red, Blue and Yellow* (*Komposition mit Rot, Blau und Gelb*) | 1930 | **45 × 45 cm** (museum sheet); RKD records **46 × 46 cm** — record both; prefer Kunsthaus for measuring scale | Kunsthaus Zürich · inv. `1987/0028` | [Kunsthaus collection PDF](https://collection.kunsthaus.ch/multimedia/5/2455-en.pdf) (HTTP 200); [RKD image 253643](https://research.rkd.nl/en/detail/https%3A%2f%2fdata.rkd.nl%2fimages%2f253643) (HTTP 200); Joosten II B 217 noted on museum sheet |
| Vertical | `folkwang-1927-ryb` | *Composition with Red, Yellow and Blue* (*Composition en rouge, jaune et bleu*) | 1927 | **75 × 52 cm** | Museum Folkwang, Essen · inv. `G 389` | [Google Arts & Culture / Folkwang](https://artsandculture.google.com/asset/composition-en-rouge-jaune-et-bleu-composition-in-red-yellow-and-blue-piet-mondrian/KAEbs40iZQ_taA) (HTTP 200); [RKD image 253403](https://research.rkd.nl/en/detail/https%3A%2f%2fdata.rkd.nl%2fimages%2f253403) (HTTP 200, portrait format) |
| Horizontal | `tate-1935-comp-b-red` | *Composition B (No.II) with Red* | 1935 | **63.3 × 80.3 cm** (depth 2.4 cm on Commons) | Tate · acc. `T07560` | [Wikimedia Commons file page](https://commons.wikimedia.org/wiki/File:Mondrian_-_Composition_B_(No.II)_with_Red,_1935.jpg) citing Tate (HTTP 200); RKD / Welsh–Joosten cross-check at measurement |

**Not selected (documented reject):** MoMA *Tableau no. 2 / Composition no. V* (1914, 54.8 × 85.3 cm) — horizontal but Cubist-transition, outside D-12 orthogonal black-armature neo-plastic scope.

## Limit cases for digitalization (M8 / analyzer triage)

Named specimens the measurement lane must **refuse to encode** as
`work.yml` — even when the painting is abstract, geometric, famous, or
recently in the news. Use these at issue triage and in M9 defence when a
student (or an assistant) proposes “it looks measurable.”

| Kind | Slug (provisional) | Work | Why the partition fails | Product fate |
| --- | --- | --- | --- | --- |
| Cubist-transition Mondrian | *(none)* | MoMA *Tableau no. 2 / Composition no. V* (1914) | Outside D-12 neo-plastic orthogonal black-armature scope | Documented reject only |
| Spiritual geometry (wrong armature) | `hak-1920-ser-iii-5` | Hilma af Klint, *Ser III No. 5* (dated **18 Jan 1920**). Oil + graphite on canvas **38.5 × 29 cm**. Hilma af Klint Foundation archive **HaK480**. Cat. raisonné: Almqvist (ed.), *Hilma af Klint – Catalogue raisonné* vol. 5 *Geometric Series and Other Works 1917–1920* (2021), p. 115. Auction record (classroom identity gate, not a photo to commit): [Bukowskis lot](https://www.bukowskis.com/en/auctions/676/827-hilma-af-klint-ser-iii-no-5) | Circles, triangles, theosophical seal / cross symbols, and graphite notations — **not** an H/V black-line + rectangular-plane partition. Light/dark polarity and yellow/blue squares are spiritual diagram language, not neoplastic liquid-fill armature. Tempting edge case because it is small, geometric, and abstract. AABB colour patches alone are a Mondrian-ish lie about this silhouette. | **Limit case** — never catalog, never analyzer golden, never student M8 slug. **D-38 plane `clip`** (circle/triangle on AABB) is the editor **silhouette lab** so the class can see the lie without promoting HaK480 into the corpus. |
| Non-orthogonal neoplasticism (diagonal armature) | `tate-1925-cc-vi` | [Theo van Doesburg](https://www.tate.org.uk/art/artists/theo-van-doesburg-1017) (1883–1931), *Counter-Composition VI* (*Contre-compositie*), 1925. Oil paint on canvas. Support **500 × 500 mm**; frame 690 × 691 × 80 mm.; ref. **T03374**. Tate page: [https://www.tate.org.uk/art/artworks/doesburg-counter-composition-vi-t03374](https://www.tate.org.uk/art/artworks/doesburg-counter-composition-vi-t03374) | Diagonal lines cross the frame — the armature is **not** an H/V orthogonal grid, so the D-12 partition into horizontal/vertical black lines + rectangular planes is unsound even though the work is neoplastic, abstract, and geometric. | **Limit case** — never catalog, never analyzer golden; named specimen for “neoplastic ≠ orthogonal.” |
| Soft-partition expressionism (gradients, translucency, curves) | `gugg-1923-comp-8` | Vasily Kandinsky (1866–1944), *Composición 8* (*Komposition 8*), July 1923. Oil on canvas **140 × 201 cm**. Solomon R. Guggenheim Museum, New York — Solomon R. Guggenheim Collection, donation, acc. **37.262**. [Wikidata Q19609199](https://www.wikidata.org/wiki/Q19609199) · [Commons file page](https://commons.wikimedia.org/wiki/File:Kandinsky_-_Composition_8,_July_1923.jpg) · upload `…/commons/8/80/Kandinsky_-_Composition_8%2C_July_1923.jpg` | **Every element is SVG-encodable, yet none fits D-12:** free curvilinear and elliptical forms (not rectangular liquid-fill planes), internal **gradients** and **translucent overlaps** (painterly colour mixing on a light ground), no orthogonal or diagonal armature to anchor the partition. Translating the *image* to SVG is a state-of-the-art vectorization + segmentation + alpha-estimation problem (see discussion below), not a D-12 measurement. | **Out of scope (discuss)** — never catalog under D-12. Candidate **second research lane** (its own contract, not an extension of this project's MVP); d. 1944 → EU **PD since 1 Jan 2015** (life+70); **US PD** (pre-1930 publication, published & renewed era — verify exact term at publish time) — but the **Guggenheim photograph** still needs its own rights check (D-32: we publish a study, not the photo) before any published artefact. |
| Organic-geometry supremism (kinetic silhouette) | `malevich-1916-supremus-55` (collection pending confirmation) | Kazimir Malevich, *Supremus 55* (1916). Oil on canvas. [Commons file page](https://commons.wikimedia.org/wiki/File:Supremus_55_(Malevich,_1916).jpg) · upload `…/commons/b/b3/Supremus_55_%28Malevich%2C_1916%29.jpg` | Beyond a wrong armature: the vocabulary is **free floating forms without any grid** — circle, square, and above all the **black drop**, a kinetic distortion of the geometric form (a falling droplet). A natural SVG **mask / `clip`** can reproduce the silhouette, but the D-12 partition (orthogonal lines + rectangular liquid-fill planes) has no home for it; the drop encodes **motion**, which a static AABB/line schema cannot say. | **Out of scope (discuss)** — never catalog, never analyzer golden. Classroom move: read the drop as a **ceiling view of a 3-D scene** (a volume falling in space) so the class sees why a 2-D geometric schema is the wrong partition, not just a harder one. |

**Brief discussion — `gugg-1923-comp-8` (added 22 Nov 2026).** *Is every element
translatable to SVG?* **Yes — SVG is the wrong bottleneck here, so that fact is
misleading.** Curves are béziers; internal gradients are `radialGradient` /
`linearGradient`; translucency is `fill-opacity` and stacking order. What is
actually hard is **recovering those parameters from a photograph of a
140 × 201 cm oil painting** — a three-part state-of-the-art problem:

1. **Segmentation** — finding the shape boundaries at all. D-12 works are
   trivially separable (flat colour, sharp black lines); Kandinsky's edges are
   **soft, blurred, or absent** (colour mixing into the ground). Current SOTA:
   SAM 2 / segmentation-anything + super-resolution (SwinIR) to lift the
   Commons raster (**3911 × 2849 px** for a 201 cm canvas ≈ 9.7 px/cm — usable,
   but the soft edges are below reliable detection confidence on a single pass).
   A *learning-free* path (GMM / k-means per region + watershed) is defensible
   for a class, but its failure modes are exactly Kandinsky's soft edges — which
   is itself a teachable result.
2. **Translucency / alpha estimation** — this is the genuinely open part.
   Where two semi-transparent glazes overlap, the observed colour is a **mixture**:
   `C = a·C_top + (1−a)·C_bottom`. Solving for the per-pixel alpha *a* and the
   hidden *C_bottom* is an **ill-posed inverse problem** (alpha matting —
   closed-form / deep matting — is state of the art, but it needs a trimap and
   still assumes known layer order). Kandinsky's stacked translucent ovals mean
   **N unknowns per overlap region for 3 observed channels** — the layer count
   is itself a hypothesis. This is research, not tooling.
3. **Gradient estimation** — well-posed *if* the segment is already found
   (fit a radial/linear field to the region's pixel colours); ill-posed *until*
   segmentation is stable, because a gradient is only as good as its boundary.

**Verdict for the project contract:** a Kandinsky case is **a complete
independent research lane** (schema extension: curved outline + per-region
gradient field + alpha/stack order + uncertainty per parameter), **not** an
M8 student slot in this D-12 forge. The clean teaching move is to *keep it
out-of-scope by name* and let the class see why the contract's scope check
(date, armature, multi-grey) exists: it is the cheapest line that stands
between a solvable problem (Mondrian) and an open research problem (Kandinsky).
Contrast ladder now: Mondrian = flat/orthogonal (in scope) · van Doesburg =
diagonal (out) · af Klint = symbolic (out) · Malevich = kinetic/3-D (out) ·
**Kandinsky = painterly/translucent (out, and the only one whose *failure* is
an unsolved inverse problem rather than a wrong vocabulary).**
Reproduction (outside git): [Commons file](https://commons.wikimedia.org/wiki/File:Kandinsky_-_Composition_8,_July_1923.jpg),
3911 × 2849 px (Commons imageinfo; 3.2 MB), full frame.

**Brief discussion — `malevich-1916-supremus-55` (added 22 Nov 2026).** Is
*Supremus 55* inside the analyzer's limits? **No — and the reason is richer
than the af Klint case.** (1) *No armature at all:* supremist forms float free;
there is no H/V grid to partition, so the D-12 schema has no anchor, not even a
wrongly-oriented one (van Doesburg at least gives diagonals to reject). (2)
*Masks are not enough:* a natural SVG `clip`/`mask` reproduces the silhouette —
circle, square, drop — but a mask only answers **which pixels are black**; the
schema must answer **why those planes exist**, and in Suprematism the answer is
motion, not construction. (3) *The black drop as kinetic distortion:* the
droplet shape is a geometric form (circle) under gravity — a **time-coded**
figure. A static 2-D schema cannot represent “falling”; at most it stores the
distorted outline, losing the meaning. (4) *The ceiling-view reading (teaching
move):* present the drop as a **ceiling view of a 3-D scene** — volumes
suspended/falling in space, seen from below. That single mental shift shows the
class the correct generalization: the right schema lane for Malevich is
*3-D volumetric + temporal*, not 2-D rectilinear measurement — which is exactly
why it is out of scope here, not merely hard. Reproduction (outside git):
[Commons file](https://commons.wikimedia.org/wiki/File:Supremus_55_(Malevich,_1916).jpg),
**820 × 820 px** (Commons imageinfo; 87 KB), full frame.

**Teaching sentence (Seat 1 / every M8 issue):** abstract + geometric ≠ schema-valid.
*Ser III No. 5* is the named specimen for that sentence (same artist as C1 in
[`../grounding/WOMEN-IN-ABSTRACTION-VERIFIED-CLAIMS.md`](../grounding/WOMEN-IN-ABSTRACTION-VERIFIED-CLAIMS.md);
priority of abstraction still ≠ D-12 contact).

Do **not** invent a `work.yml` for `hak-1920-ser-iii-5`. Do **not** commit a
reproduction. Recording the refuse is the assignment artefact.

## Reproduction for measuring (pixel size + crop)

No photograph or scan is stored in this forge folder (M0 constraint). Files were
fetched to `/tmp` only, dimensions read, then discarded (26–27 Oct 2026).

| Slug | Reproduction URL (outside git) | Pixel W × H (raster) | Crop (full-frame OK at M0) | Who recorded | Date |
| --- | --- | --- | --- | --- | --- |
| `kunsthaus-1930-rbby` | https://upload.wikimedia.org/wikipedia/commons/a/a4/Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg (Commons: *Piet Mondriaan, 1930 - Mondrian Composition II in Red, Blue, and Yellow.jpg*) | **5918 × 6000** (local JPEG SOF matched Commons imageinfo) | full frame `0,0–5918,6000` (aspect ≈ square; matches catalogue) | instructor / M0 agent | 2026-10-26 |
| `folkwang-1927-ryb` | https://lh3.googleusercontent.com/ci/AL18g_TO2tTMvnIrQJv4IIkHufZZJ_MNiQdIfMQ1OO6NhyheeIzxAlS_zgGGg-BXouTLZhvaRhzN=s0 (from [Google Arts Folkwang asset](https://artsandculture.google.com/asset/composition-en-rouge-jaune-et-bleu-composition-in-red-yellow-and-blue-piet-mondrian/KAEbs40iZQ_taA)) | **839 × 1200** | full frame `0,0–839,1200` (H/W ≈ 1.43 vs catalogue 75/52 ≈ 1.44) | instructor / M0 agent | 2026-10-26 |
| `tate-1935-comp-b-red` | https://upload.wikimedia.org/wikipedia/commons/7/72/Piet_Mondrian_-_Composition_B_%28No.II%29_with_Red%2C_1935_%28Tate_Modern%29.jpg | **1920 × 1080** (SOF; landscape) | full frame `0,0–1920,1080` — **note:** raster aspect 16:9 is wider than canvas 80.3×63.3 cm (~1.27); M2 must tighten crop to the painted rectangle before claiming millimetre fidelity | instructor / M0 agent | 2026-10-26 |

**Rejected for measuring:** Commons `Mondrian_-_Composition_B_(No.II)_with_Red,_1935.jpg` at 1219×1536 (portrait) — aspect conflicts with the landscape catalogue work.

Hand measurement of line/plane boundaries remains M2/M8 (time-boxed). This table only freezes the reproduction geometry for that work.

## Growth candidates (recorded 27 Oct 2026 — not yet in the M0 three)

Owner-supplied Commons / Wikidata reproductions. **Do not commit the JPEGs.**
Promote into the measuring set only after a D-12 scope check (date, armature,
multi-grey) and a catalogue dimension row.

| Provisional slug | Title / identity | Date | Catalogue (H × W) | Collection / inv. | Reproduction | Pixel W × H | Crop | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `gnam-1920-comp-a` | *Composition A* (*Grande composizione A con nero, rosso, grigio, giallo e blu*) · Commons [Category:Composition A (B105)](https://commons.wikimedia.org/wiki/Category:Composition_A_(B105)) | 1920 | **pending** museum sheet (Joosten B105) | Galleria Nazionale d'Arte Moderna e Contemporanea, Rome | [File:Composition_A_by_Piet_Mondrian_Galleria_Nazionale_d'Arte_Moderna_e_Contemporanea.jpg](https://commons.wikimedia.org/wiki/File:Composition_A_by_Piet_Mondrian_Galleria_Nazionale_d%27Arte_Moderna_e_Contemporanea.jpg) · upload `…/commons/c/c3/Composition_A_by_Piet_Mondrian_Galleria_Nazionale_d%27Arte_Moderna_e_Contemporanea.jpg` | **2216 × 2204** (Commons imageinfo; 2.75 MB) | full frame `0,0–2216,2204` | Early neoplastic; title names **grey** → D-12 multi-grey caution before measuring for MVP catalog |
| `tate-1920-no-vi` | *No. VI / Composition No.II* · [Wikidata Q28554669](https://www.wikidata.org/wiki/Q28554669) | 1920 | **100.3 × 99.7 cm** (Wikidata P2048/P2049, centimetre) | Tate · `T00915` | [File:Piet_Mondriaan_-_No._VI_-_T00915_-_Tate.jpg](https://commons.wikimedia.org/wiki/File:Piet_Mondriaan_-_No._VI_-_T00915_-_Tate.jpg) · upload `…/commons/0/0e/Piet_Mondriaan_-_No._VI_-_T00915_-_Tate.jpg` | **992 × 1000** (Commons imageinfo; 57 KB) | full frame `0,0–992,1000` | Near-square; confirm D-12 orthogonal black-armature scope before promote |

**`tate-1920-no-vi`:** *No. VI / Composition
No.II* — Piet Mondrian, *Composition in Grey, Red, Yellow and Blue*, 1920.
Oil. Collection Tate Gallery, London (acc. `T00915`).
Tate artwork page:
[https://www.tate.org.uk/art/artworks/mondrian-no-vi-composition-no-ii-t00915](https://www.tate.org.uk/art/artworks/mondrian-no-vi-composition-no-ii-t00915).

| Provisional slug | Title / identity | Date | Catalogue (H × W) | Collection / inv. | Reproduction | Pixel W × H | Crop | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `hdm-1919-checkerboard` | Piet Mondrian, *Composition, Checkerboard, Bright Colours* (*Composizione a scacchiera con colori chiari*, 1919). Oil. | 1919 | **pending** museum sheet (Haags Gemeentemuseum) | Haags Gemeentemuseum (Gemeentemuseum Den Haag) | [File:Piet_mondrian,_composizione_con_griglia_9,_composizione_a_scacchiera_con_colori_chiari,_1919,_01.jpg](https://commons.wikimedia.org/wiki/File:Piet_mondrian,_composizione_con_griglia_9,_composizione_a_scacchiera_con_colori_chiari,_1919,_01.jpg) · upload `…/commons/a/ad/Piet_mondrian%2C_composizione_con_griglia_9%2C_composizione_a_scacchiera_con_colori_chiari%2C_1919%2C_01.jpg` | **3708 × 3222** (Commons imageinfo; 5.2 MB) | full frame `0,0–3708,3222` | **Digitalization interest:** the chromatic palette (bright / pale tints, no black armature yet?) and the **format of the cells** — a regular checkerboard grid reads as a proto-pixel-art surface, the natural “grid-as-pixels” exemplar for the D-38 pixel-study lane. Verify D-12 scope (1919 transition period, armature colour) before promote. |

Recorded by: instructor · 2026-11-20 · imageinfo via Commons API (no photo stored in forge).



### Grow the set later

Expand candidate reproductions from Wikimedia Commons Mondrian painting
categories and discussion (rights + file quality vary):

- Category talk hub: [Category talk:Paintings by Piet Mondrian](https://commons.wikimedia.org/wiki/Category_talk:Paintings_by_Piet_Mondrian)
- Parent category: [Category:Paintings by Piet Mondrian](https://commons.wikimedia.org/wiki/Category:Paintings_by_Piet_Mondrian)

Each new file still needs: catalogue H×W from a named museum/RKD sheet,
Commons/Wikidata URL, pixel W×H, crop rectangle, D-12 exclusion check, EU/US
rights row — then a slug in this file. Prefer promoting into M8 student corpus
slots rather than silently replacing the M0 three.

## Rights — photograph vs measured SVG study (D-32)

**What we publish:** SVG (and CSS Grid) **geometric studies** — digital
abstractions of measured construction proportions — credited *study after*
the named work. **Not** photographs or scans of the original painting
(D-32). Measuring may use a reproduction outside git; that file is never
committed or hotlinked.

| Question | Answer |
| --- | --- |
| Does skipping photos change the legal picture? | **Yes for the photo layer.** Museum/photographer reproduction rights are not engaged by the distributed artefact. |
| Does it clear composition rights entirely? | **No.** If the painting is still in copyright, a faithful structural SVG can still be argued as a derivative in some jurisdictions. EU-PD Mondrian + our study is the MVP path; other artists need their own rights rows. |
| What do we license (D-11)? | **Our** code (MIT) and **our** measurements / studies / prose (CC BY-NC-SA 4.0) — not ownership of Mondrian’s (or Moss’s) authorship. |

Mondrian died **1 Feb 1944**.

| Work | EU status | US status | Notes |
| --- | --- | --- | --- |
| M0 three + Mondrian growth candidates | **Public domain** in the EU since **1 Jan 2015** (life + 70) | **unresolved** for the public Pages starter | US term is publication-dependent. Do **not** treat EU PD as worldwide. Holtzman Trust / museum licences may still govern **photos**; we do not ship photos (D-32). Public starter waits on per-work US clearance (pitch §13); measuring does not. |
| Sibling surfaces (Moss, etc.) | See table below — often **still in term** | unresolved | About / historiography OK; Pages catalog only after rights row clears |

Who recorded rights rows: instructor (M0, 26 Oct 2026); growth candidates 27 Oct; historiography + D-32 27 Oct 2026.

---

## Educative resources (20 Nov 2026)

| Resource | URL | Use |
| --- | --- | --- |
| Tate — Introducing Piet Mondrian | https://www.tate.org.uk/art/artists/piet-mondrian-1651/introducing-piet-mondrian | Artist primer; classroom framing before measurement work |
| Top Impressionists — Student guide: *Composition with Red, Yellow and Blue* | https://topimpressionists.com/en/art/student-guide/piet-mondrian-composition-with-red-yellow-and-blue-8XYS4L-en/ | # Teaching guide: Composition with Red, Yellow and Blue |

## Historiography notes (teaching stack — 27 Oct 2026)

**Verified claim table (DH result report):**
[`../grounding/WOMEN-IN-ABSTRACTION-VERIFIED-CLAIMS.md`](../grounding/WOMEN-IN-ABSTRACTION-VERIFIED-CLAIMS.md)
(11 Nov 2026 — per-claim validation + **References missing to ingest** with
DOI / ISBN / LCCN / thesis deposits; no Ahmes coats yet).

Prompted by public discussion of women artists sidelined in abstraction
narratives (af Klint / Moss / Sobel). Use on `/about/` or seminar — **not**
as a claim that every named artist is an MVP catalog texture.

### Distinctions to keep

1. **Priority ≠ contact.** Hilma af Klint explored abstraction before
   Kandinsky; that does not imply he knew her work.
2. **Moss ≠ “Mondrian’s whole language.”** The precise claim is the
   **double line**: Kunstsammlung NRW states Moss tested it in **1930** and
   Mondrian began using it in **1932**. Some essays place Moss’s published
   double-line works in **1931** (Abstraction-Création) — record the
   museum page *and* the essay dates; do not collapse them into a reel hook.
3. **Sobel / Pollock.** Greenberg’s 1961 *Art and Culture* revision of
   “‘American-Type’ Painting” reports that Pollock admitted Sobel’s works
   made an impression — while still labelling her “primitive” / “housewife”.
4. **Stories are not identical** (limited theosophical circulation → 1986
   visibility for af Klint; wartime loss + Tate refusals for Moss;
   Guggenheim then domesticating label for Sobel).
5. **Nochlin 1971:** recovering names is necessary but not enough; change
   how institutions make “great artists.”

### Bibliography to bring

| Role | Citation |
| --- | --- |
| Canon critique | Linda Nochlin, “Why Have There Been No Great Women Artists?” (1971); also in *Women, Art, and Power* |
| af Klint | Guggenheim, *Hilma af Klint: Paintings for the Future* (2018–19) cat.; Iris Müller-Westermann; LACMA *The Spiritual in Art* (1986) as visibility landmark |
| Moss / double line | [Kunstsammlung NRW — Mondrian / Marlow Moss](https://www.kunstsammlung.de/en/mondrian/chapter05); Tate, *Marlow Moss: Space, Movement, Light*; Stedelijk Studies / Lucy Howarth on Moss; Blotkamp on Mondrian’s adoption of the double line |
| Sobel | Clement Greenberg, “‘American-Type’ Painting,” in *Art and Culture* (Beacon, 1961), ~p. 218; Gail Levin, *Woman’s Art Journal* 26, no. 1 (2005); Sandra Zalman, *WAJ* 36, no. 2 (2015); MoMA *Milky Way* (1945) |
| Method (optional) | Griselda Pollock on feminist art-historical method; Carel Blotkamp, *Mondrian: The Art of Destruction* |

### Sibling artists as **surfaces** (corpus growth — orthogonal grids)

MVP textures need D-12 orthogonal black armature + planar colour. Prefer
these as **measured SVG studies** (same D-32 model), not drip/all-over.

| Artist | Role as surface | EU term note (life+70, check before publish) | Product use |
| --- | --- | --- | --- |
| **Marlow Moss** | Double-line neoplastic; best “second texture” beside Mondrian | d. 1958 → EU PD **1 Jan 2029** — **in copyright until then** | About now; catalog after clearance / expiry |
| **Sophie Taeuber-Arp** | Rectilinear compositions | d. 1943 → EU PD since **2014** | Strong measure candidate when catalogue + US row ready |
| **Charmion von Wiegand** | Mondrian circle, NY grids | 20th c. — check death/term | Growth / seminar |
| **Verena Loewensberg** | Zurich Concrete colour planes | check term | Growth |
| **Aurélie Nemours** | Hard geometric fields | check term | Growth |
| **Lygia Clark / Lygia Pape** | Neo-concrete planes (expand beyond NL/Paris) | check term | Growth / About |
| **Anni Albers** | Grid as weave — module grid story | check term | About / method; optional textile-module measure |

**Narrative / About only (wrong partition for liquid-fill MVP):** Hilma af
Klint (spiritual diagrams — named digitalization limit case: *Ser III No. 5*,
above); **Janet Sobel** (all-over drip); later Op / hard-edge (Riley, Herrera)
until a separate schema lane exists.

**Product implication:** Mondrian remains the M0 measured set; promoting
**one Moss (when lawful) + one Taeuber-Arp** as sibling textures is how the
selector itself retells the history — not a single-genius shelf.

## 2010 Wisconsin dataset (Andrzejewski et al.)

| Question | M0 finding |
| --- | --- |
| Licence | **unresolved** — paper vault describes a dataset of ~45 genuine + generated works and feature-extraction software; no open redistribution licence or SPIE supplementary download named in the extraction ([`grounding/M0-GROUNDING-RECEIPT.md`](../grounding/M0-GROUNDING-RECEIPT.md) §7). |
| Representation → `work.schema.json` | **Maps** at the §3.2 geometry layer (border points, oriented points, H/V lines with thickness, coloured rectangles, white ground, lines over planes) per [`grounding/ANDRZEJEWSKI-2010.md`](../grounding/ANDRZEJEWSKI-2010.md). Project adds normalization, provenance, uncertainty; **does not** map ML classifiers or faux works into MVP authenticity scoring. |

## Normative technical sources (not scholarly Mondrian evidence)

| Source | URL | Role |
| --- | --- | --- |
| JSON Schema 2020-12 Core | https://json-schema.org/draft/2020-12/json-schema-core.html | D-05 contract language (HEAD with follow-redirects → 200; bare path may 308) |
| JSON Schema 2020-12 Validation | https://json-schema.org/draft/2020-12/json-schema-validation.html | D-05 |
| CSS Grid Level 2 | https://www.w3.org/TR/css-grid-2/ | Derived render plan |

## Scholarly prior art — SIGraDi 2021 (discovery-only until coat fixed)

Conference site: [SIGraDi 2021](https://www.s igradi.org/sigradi2021/).

**Özgün, Feyza Nur Koçer, and Sema Alaçam.** 2021. “Pixel-Based Geometric
Decoding of Mondrian Compositions.” In *XXV International Conference of the
Iberoamerican Society of Digital Graphics (SIGraDi 2021)*, 103–114. São Paulo:
Blucher. ISSN 2318-6968. DOI [10.5151/sigradi2021-72](https://doi.org/10.5151/sigradi2021-72).

RIS (canonical for Ahmes coat repair):

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

Ahmes vault `11_kocer_…_f33bad61` (129 nodes): **operator RIS coat 27 Oct 2026**
— DOI `10.5151/sigradi2021-72`, year 2021, `evaluator_safe=yes`
(`(Özgün 2021, …)`). Receipt §5. Do not re-run `enrich --meta --online`
without pinning that DOI (Feijs arXiv neighbour otherwise re-poisons the host).
