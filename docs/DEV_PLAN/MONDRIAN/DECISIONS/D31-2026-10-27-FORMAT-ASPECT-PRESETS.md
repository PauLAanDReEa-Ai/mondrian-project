# D-31 — Format aspect presets (maximise in print surface)

**Status:** `adopted` · **Date:** 2026-10-27 · **Owner amend, pre-M1**  
**Depends on:** D-27 (paper surface), D-30 (liquid-fill).  
**Amends:** MVP journey; `CompositionState` / Recipe URL; seat 6–7 UI.

---

## Decision

The editor exposes a **format** control — common **aspect-ratio chips** —
separate from the **surface** (paper/sticker stock).

Choosing a format sets the containing frame to that aspect and **maximises**
it inside `printableArea`: the largest rectangle of that aspect that still
fits the print surface (limit on the constraining side; centre the result).
The pattern **liquid-fills** that frame (D-30).

**The game (visitor sentence):**

> Select a Mondrian texture → choose a format → produce variations → obtain
> your personal version.

---

## Format catalog (MVP)

| Chip id | Ratio | Role |
| --- | --- | --- |
| `original` | work `canvas.w : canvas.h` | Default when a texture is first applied |
| `1-1` | 1∶1 | Square — social + stickers |
| `5-4` | 5∶4 | Classic / photo landscape (owner ask) |
| `4-5` | 4∶5 | Instagram portrait feed |
| `16-9` | 16∶9 | Landscape / YouTube |
| `9-16` | 9∶16 | Stories / Reels / TikTok |
| `custom` | derived from `fw`/`fh` | Set automatically after free corner-drag |

Social “big four” = `1-1`, `4-5`, `16-9`, `9-16`. Plus `5-4` and `original`.

UI: one segmented control or chip row; labels show the ratio (e.g. `16:9`).
Accessible name includes the social hint where useful (“9:16 Stories”).

---

## Maximise algorithm

Given `printableArea` (normalized `[0,1]` box) and target aspect `a = w/h`:

```text
availW, availH ← printable width/height
if availW / availH > a:   # height-limited
  fh ← availH;  fw ← fh * a
else:                     # width-limited
  fw ← availW;  fh ← fw / a
fx ← printable.x + (availW − fw) / 2
fy ← printable.y + (availH − fh) / 2
```

Same helper for `original` (use native aspect) and every chip. Switching
texture with format still `original` re-maximises at the new work’s aspect.
Switching format never mutates `work.yml`; only `fx,fy,fw,fh` + `formatId`.

---

## Surface vs format (do not conflate)

| Control | What it is | Owns |
| --- | --- | --- |
| **Surface** | Physical/digital stage silhouette (D-27) | `@page`, paper aspect, margins, printableArea |
| **Format** | Frame aspect inside that paper (this decision) | `formatId` + maximised `fx…fh` |
| **Texture** | Measured catalog work | `workId` |
| **Variations** | Mirrors, invert rank, hue, … | `variationId`, θ, palette, … |

Digital surface presets (`square-1-1`, …) remain optional **screen-only
surfaces** (no physical `@page` claim). Format chips still apply inside
whatever surface is active.

---

## Recipe / URL

| Param | Values |
| --- | --- |
| `fmt` | `original` \| `1-1` \| `5-4` \| `4-5` \| `16-9` \| `9-16` \| `custom` |

`fx…fh` remain authoritative geometry. Selecting a chip writes `fmt` **and**
recomputes `fx…fh` via maximise. Corner-drag sets `fmt=custom` and updates
`fx…fh`. Live URL sync (D-27) applies to both.

---

## Interaction with D-30

- Format chip → maximised frame → liquid-fill.
- **Corner drag remains first-class MVP** → free aspect (`custom`) →
  liquid-fill. Chips do not remove or lock corners.
- Variations / colorimetry compose on the current fill.
- Reset → texture original + `fmt=original` + maximised native frame.

---

## Tests

- For every chip × every print preset, maximised frame ⊆ printableArea and
  `fw/fh` matches the chip ratio within ε.
- Largest-side rule: at least one of `fw == availW` or `fh == availH`.
- Corner-drag → `fmt=custom`; picking a chip afterwards clears `custom`,
  sets that chip id, and re-maximises.
- Recipe round-trip restores `fmt` and geometry.
