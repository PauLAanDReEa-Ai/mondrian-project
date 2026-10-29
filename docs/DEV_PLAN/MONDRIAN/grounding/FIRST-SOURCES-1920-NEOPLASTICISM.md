# First source — *Le Néoplasticisme* (Paris, 1920)

**Date:** 2026-10-28 (biblio lock 2026-10-28 evening)  
**Athanor project:** `mondrian-project` · library `scholar`  
**Status:** EXTRACTED · SEMANTIC OK · INJECTED · biblio = imprint only

CLIs: `AH=~/src/ahmes/.venv/bin/ahmes` · `ATH=~/src/athanor/.venv/bin/athanor`

---

## 1. Sole first source

| | |
| --- | --- |
| **Work** | *Le Néoplasticisme* |
| **Ahmes coat** | `le_neoplasticisme_mondrian_1920_01f3300f` |
| **PDF** | `~/projects/ruvebal/scholar/bibliographies/mondrian_piet/Le Neoplasticisme - Mondrian (1920).pdf` |
| **Vault** | `~/ahmes-library/scholar/documents/le_neoplasticisme_mondrian_1920_01f3300f/extract/extraction.db` |
| **Nodes / semantic** | 135 · 123/124 (99.2%) |
| **Injection** | `57e0dfd6-7d52-468b-bda8-49e73748df1a` · `mondrian-project` / `scholar` |

No other edition of this brochure is a citable first source for the Mondrian project.

---

## 2. Bibliography (imprint only)

Use **only** what the pamphlet prints:

```text
Editions de l'EFFORT MODERNE
Léonce ROSENBERG
19, Rue de la Baume, 19
PARIS (8e)
1920
```

**Chicago-style reference (imprint form):**

> *Le Néoplasticisme*. Paris: Éditions de l'Effort Moderne (Léonce Rosenberg, 19 rue de la Baume), 1920.

Do **not** invent Crossref/DOI authorship, do **not** substitute another edition’s author-date for this pamphlet’s imprint, and do **not** treat the publisher line as a personal author citation of the form “(Rosenberg 1920)”.

Ahmes vault metadata for this coat is locked to that imprint (`method=manual-imprint-frontispiece`). Cite gate may still report `evaluator_safe=no` until the resolver learns imprint-only books; keep the imprint block in provenance and in References.

---

## 3. Pipeline (FR coat)

| Stage | Result |
| --- | --- |
| `ahmes batch` (NER + semantic) | OK |
| Imprint biblio lock | §2 |
| `athanor inject` → `mondrian-project` | completed (`57e0dfd6-…`) |

```bash
$ATH search "équilibre individuel universel plastique" \
  --project-slug mondrian-project --library scholar --top-k 5
```

Prefer hits whose `file_name` is `Le Neoplasticisme - Mondrian (1920).pdf`. Discard other coats when the claim is this pamphlet’s voice.

---

## 4. Quote readiness

| Language | Status |
| --- | --- |
| **French** | First-source quotes from this vault only. OCR noisy; use `semantic-quote`. |
| **Spanish (and other left translations)** | Not in this pamphlet. Studio may use an **unprovenanced English rendering** privately as a gloss when drafting left translations — **never cite it, never list it as a source, never name it in student-facing or grounding “sources” lists.** |

---

## 5. Flag quote (project)

Locked for board / About / MVP epigraph: [`FLAG-QUOTE-1920.md`](FLAG-QUOTE-1920.md).

> **La Plastique nouvelle met ses rapports en équilibre esthétique et exprime par là l'harmonie nouvelle.**  
> — node `06184a3b-fb54-58aa-826a-78eae35c89a6` · `page_index=7` · imprint §2

## 6. First quotes (French only · semantic-quote)

### 6.1 Art as plastic expression of the whole being

node `c3cdf999-c35a-573e-84f1-3255cbee6c2f` · `page_index=4`

> Quoique l'art, d'une part, soit l'expression plastique de notre émotion esthétique, nous ne pouvons pas en conclure que l'art ne serait que […] l'expression esthétique de nos sensations subjectives. La logique veut que l'art soit l'expression plastique de tout notre être […]

### 6.2 All arts · individual / universal

node `b88fdf78-fb0a-5b02-b295-58300e6d130d` · `page_index=5`

> Tous les arts s'efforcent d'arriver à la plastique esthétique du rapport […] entre l'individuel et l'universel, le subjectif et l'objectif, la nature et l'esprit : donc, tous les arts, sans exception, sont plastiques.

### 6.3 Neo-Plasticism · Cubism · rectangular planes · relations

nodes `78ad4e44-dbbd-57d1-8a90-59c75e7d4de3` + join · `page_index=7`

> Le Néo-Plasticisme a ses racines dans le Cubisme. […] Elle est une composition de plans rectangulaires en couleur exprimant la réalité la plus approfondie. Elle y arrive par l'expression plastique des rapports et non par l'apparition naturelle. […] La Plastique nouvelle met ses rapports en équilibre esthétique et exprime par là l'harmonie nouvelle.

### 6.4 Three primary colours

nodes `6fa6d176-b2a4-581a-8025-f810e084cc02` + join · `page_index=15`

> Les trois couleurs fondamentales, le rouge, le jaune et le bleu restent des couleurs prismatiques […] malgré le Néo-Plasticisme qui ne les exprime pas dans leur apparition spectrale.

---

## 7. Operator

```bash
~/src/ahmes/.venv/bin/python \
  ~/src/.cursor/skills/semantic-quote/scripts/cli.py extract \
  ~/ahmes-library/scholar/documents/le_neoplasticisme_mondrian_1920_01f3300f/extract/extraction.db \
  c3cdf999-c35a-573e-84f1-3255cbee6c2f --json
```

For doctrine claims that need `evaluator_safe=yes` Chicago author-date, prefer the Collected Writings coat (`Mondrian 1986`) already on `mondrian-project`. For **this** pamphlet’s voice, quote French nodes above and reference the Effort Moderne imprint (§2).
