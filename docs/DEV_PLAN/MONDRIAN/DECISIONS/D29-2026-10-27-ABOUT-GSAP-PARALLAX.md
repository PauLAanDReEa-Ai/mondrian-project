<!--
Mondrian Project — About scroll parallax via GSAP ScrollTrigger (FE I S11).
Author: Rubén Vega Balbás, PhD · 27 October 2026
Amends D-18 (story motion) and D-06 (GSAP as S11 evidence inside the product).
-->

# D-29 — About parallax with GSAP ScrollTrigger

**Status:** adopted 27 October 2026 (owner; pre-M1).
**Amends:** D-18 (CSS-only story motion) · D-06 (GSAP was “S11 only, not in product”).
**Phase:** M3 `/about/` · Seat **3**.
**Syllabus:** FE I **S11** (GSAP) — M3 calendar sits across S10–S12.

---

## 1. Decision

`/about/` uses **GSAP + ScrollTrigger** for **parallax** and scene reveal as
progressive enhancement. **Framer Motion / `motion` remain forbidden.**

| Surface | Motion stack |
| --- | --- |
| `/about/` | **gsap** + **ScrollTrigger** parallax (this decision) |
| Gallery / method / about-us | No GSAP; static or CSS only |
| Editor / kiosk (`/create/`, `/kiosk/`) | **No** GSAP; Svelte + CSS tokens only |
| Attract loop | CSS `@keyframes` on `--theta` (unchanged) |

CSS `animation-timeline: view()` may still decorate non-parallax fades if
cheap; it is **not** the parallax engine. ScrollTrigger owns depth/parallax.

---

## 2. Parallax spec (About)

### Structure (one scene = one section)

```html
<section class="about-scene" data-scene="1">
  <div class="about-scene__bg" data-speed="0.35" aria-hidden="true">…</div>
  <div class="about-scene__art" data-speed="0.7">  <!-- Grid/SVG miniature -->
  <div class="about-scene__copy" data-speed="1">   <!-- heading + prose -->
</section>
```

### Behaviour

| Rule | Requirement |
| --- | --- |
| Library | `gsap` + `ScrollTrigger` registered once in `src/scripts/about-parallax.js` |
| Load | Dynamic import **only** on `/about/` (no GSAP on home/gallery/editor) |
| Scrub | `scrub: true` (or `0.4–0.8`) — parallax tied to scroll, not timed tweens that fight the user |
| Depth | Background slower (`yPercent` smaller absolute speed); copy near 1:1; art mid-layer |
| Pinning | **Optional** short pin on at most **one** scene (e.g. colour/θ). Default = **no pin** so document scroll stays predictable |
| Markers | `markers: false` in production; allow `?debug=scroll` for seat 3 |
| Kill | On `prefers-reduced-motion: reduce` → `ScrollTrigger.getAll().forEach(t => t.kill())`; no transforms left applied |
| No-JS | All seven headings + prose in the HTML without depending on GSAP; parallax layers are empty decoration or static Grid/SVG |
| Perf | Prefer `transform` / `opacity` only; no parallax on large bitmap photos of paintings (none in repo anyway) |
| A11y | Decorative layers `aria-hidden="true"`; focus order follows copy; axe clean |

### Illustrative ScrollTrigger pattern (**Excerpt** — not pasted as sole source of truth)

```js
// Excerpt — seat 3 fleshes out scene list + reduced-motion gate
gsap.registerPlugin(ScrollTrigger);
const mm = gsap.matchMedia();
mm.add("(prefers-reduced-motion: no-preference)", () => {
  gsap.utils.toArray("[data-speed]").forEach((el) => {
    const speed = parseFloat(el.dataset.speed || "1");
    gsap.to(el, {
      y: () => (1 - speed) * ScrollTrigger.maxScroll(window) * 0.05,
      ease: "none",
      scrollTrigger: {
        trigger: el.closest(".about-scene"),
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
  return () => ScrollTrigger.getAll().forEach((t) => t.kill());
});
```

Tune speeds so depth is felt but body text stays readable (no extreme skew).

---

## 3. Dependency

| Package | Pin policy |
| --- | --- |
| `gsap` | Exact or caret minor locked in root / `services/web` at M3; record version in M3 report |
| CDN | **Forbidden** for production Pages (integrity + offline); install via pnpm |

D-06 amended: GSAP is the **one** semester-1 framework session (S11) that this
integrator **does** evidence — scoped to `/about/` parallax only. Bootstrap /
Tailwind / Vite still out of the product.

---

## 4. Acceptance (add to M3)

1. `/about/` ships seven complete scenes with JS disabled.
2. With `prefers-reduced-motion: reduce`, no ScrollTrigger instances remain;
   layouts look static; Playwright asserts no ongoing GSAP tweens.
3. With motion allowed, at least two layers per scene (bg + copy, or art + copy)
   move at different scrub rates while scrolling through scenes 1–7.
4. Bundle analysis / network: `gsap` chunk requested only from `/about/` routes.
5. `package.json` has `gsap`; still has **neither** `framer-motion` nor `motion`.
6. Lighthouse a11y 100 on `/about/`; axe 0 critical/serious.

---

## 5. Seat ownership

| Seat | Owns |
| --- | --- |
| **3** | Parallax script, scene markup `data-speed`, reduced-motion kill, S11 write-up in method/about footnote if needed |
| 4–5 | Do not load GSAP on their routes |
| 6–7 | Editor/kiosk stay GSAP-free |
