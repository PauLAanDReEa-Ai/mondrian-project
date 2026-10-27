<!--
Mondrian Project — PHASE-M0 cold review.
Reviewer did not implement this phase. Status flip to DONE is owner-only after triage.
-->

# PHASE-M0 cold review

| Field | Value |
| --- | --- |
| **Reviewer** | Cursor `cascade-cold-reviewer` subagent (no implementer memory of this phase) |
| **Date** | 2026-10-26 |
| **Pack root** | `frontend-pedagogy/forge/mondrian-project/` |
| **Inputs** | `PHASE-M0.md` Acceptance; `PHASE-M0-REPORT.md` (VERIFYING); `MONDRIAN-CASCADE.md` §1 / §3 / programme gate; `grounding/M0-GROUNDING-RECEIPT.md`; `corpus/REFERENCE-WORKS.md`; `INDEX.md` live snapshot; Astro 7 amendment context; `_private/` existence only (addresses not read) |
| **Verdict** | **FAIL** |

Implementer correctly left status **VERIFYING** and did not self-certify DONE. This review does **not** mark PHASE-M0 DONE and does not open M1.

---

## Summary

Grounding, D-01…D-20 ratification, instructor probes, GraphRAG fail-closed check, private letter drafts, and Astro 7 cascade/M1/INDEX alignment are in good shape. One Acceptance gap remains: reference-work **reproduction records lack recorded pixel size and crop**. Close that (and triage nits) before DONE.

---

## Findings

### F1 — Reference reproduction pixel/crop not recorded

| | |
| --- | --- |
| **Severity** | major |
| **Blocks DONE?** | yes |
| **Evidence** | Acceptance: "`corpus/REFERENCE-WORKS.md` has three rows with catalogue source, **reproduction record**, EU status, US status…". Deliverable: "reproduction used for measuring (**with recorded pixel size and crop**)". Constraint in `PHASE-M0.md`: "boundaries from a **recorded** reproduction (the actual hand measurement happens in M2…)". File `corpus/REFERENCE-WORKS.md` § "Reproduction for measuring": |
| | |
| | > \| Reproduction URL or local path (outside git) \| — \| |
| | > \| Pixel width × height of the file used \| — \| |
| | > \| Crop rectangle relative to that file \| — \| |
| | Report §6: "Reproduction pixel/crop **pending measurement** (M2/M8)". Catalogue dims + EU/US rows are present and not invented; pixel/crop are empty. |
| **Fix** | For each of the three works, download or open one candidate reproduction **outside** the forge git tree, record URL/path, `pixel W×H`, and crop rectangle (even if crop is full-frame), who recorded, date. Do **not** commit photographs. Hand measurement of armature remains M2. |

### F2 — `PHASE-M1.md` status claims `M0 DONE` while M0 is VERIFYING

| | |
| --- | --- |
| **Severity** | major |
| **Blocks DONE?** | no (amend with triage; does not reopen M0 content) |
| **Evidence** | `PHASE-M1.md` L4: `**Status:** BLOCKED (M0 DONE)`. `PHASE-M0.md` / `PHASE-M0-REPORT.md` / cascade programme row 0 / `INDEX.md`: M0 = **VERIFYING**. Cascade resume rule: VERIFYING → cold review → triage → DONE before M1. |
| **Fix** | Set `PHASE-M1.md` to `BLOCKED (M0)` until owner flips M0 → DONE; then `BLOCKED` or `READY` per programme. Same amend commit as cold-review triage. |

### F3 — Live snapshot / rationale still say “Check in M0” after re-check exists

| | |
| --- | --- |
| **Severity** | nit |
| **Blocks DONE?** | no |
| **Evidence** | `PHASE-M0-REPORT.md` §4 records VT (Firefox partial), scroll-driven (Firefox 159+), Keyboard Lock (Chrome/Edge only). `INDEX.md` L75 still: "Keyboard Lock … — **re-verify in M0**". `MONDRIAN-RATIONALE.md` L71–72 still: "Check in M0 (Firefox)" for VT and scroll-driven. Prompt: "Amend the table if anything moved." |
| **Fix** | Replace "Check in M0" / "re-verify in M0" with the dated statuses from the report (fallbacks unchanged). |

### F4 — Literal `grep proposed` still hits cascade prose (no D-row is `proposed`)

| | |
| --- | --- |
| **Severity** | nit |
| **Blocks DONE?** | no |
| **Evidence** | Command: `grep -n "proposed" MONDRIAN-CASCADE.md` → lines 20, 22, 47 (section title "proposed here, ratified in M0"; process prose; "Zero `proposed` D-rows remain"). Decision table: all twenty rows ratified in cascade §1 status block + report §2 (`D-01`…`D-20`, each `**ratified**`). No D-row status token remains `proposed`. `corpus/REFERENCE-WORKS.md` L9 "Status: proposed in M0" is corpus selection language, not a D-row. |
| **Fix** | Optional: retitle §1 to "Preflight decisions (ratified in M0)" so the Acceptance grep is literally empty; or leave and treat Acceptance as "no D-row status = proposed" (already true). |

### F5 — Athanor live inject not re-run in this session

| | |
| --- | --- |
| **Severity** | nit |
| **Blocks DONE?** | no |
| **Evidence** | Acceptance: "Athanor live injection reports zero failed". `PHASE-M0-REPORT.md`: "Live inject \| **Not re-run**; prior COMPLETED id `9a1a8bb5-…`". `M0-GROUNDING-RECEIPT.md` §2.2: injection COMPLETED; scoped search returns `document_id=db745f4a-…`. Dry-run capability recorded (exit 2 without `--from-manifest`; exit 0 with). Re-inject would risk duplicate write. |
| **Fix** | None required for DONE if owner accepts prior COMPLETED + live search as the injection proof. Optionally add one sentence to Acceptance/report: "re-inject skipped; COMPLETED id + search is the zero-failed evidence." |

### F6 — JSON Schema Core URL recorded as HTTP 200; bare HEAD is 308

| | |
| --- | --- |
| **Severity** | nit |
| **Blocks DONE?** | no |
| **Evidence** | Receipt §6: Core HEAD **200**. Cold-review `curl -sI` without follow → **308** → `/draft/2020-12/json-schema-core`; with `-L` → **200**. Validation URL with `-L` → **200**. CSS Grid L2 → **200**. URLs are real; status digit is redirect-sensitive. |
| **Fix** | Record "308→200 with redirect" or always use follow-redirects in the receipt. |

---

## Acceptance checklist (explicit)

| Acceptance bullet | Result | Evidence |
| --- | --- | --- |
| Report has 20 D-rows, each `ratified`\|`rejected`, with evidence; zero `proposed` | **PASS** | `PHASE-M0-REPORT.md` §2: D-01…D-20 all `ratified` with evidence lines; cascade §1 status 26 Oct 2026 |
| Ahmes >0 nodes + biblio; Athanor inject zero-failed; retrieval + GraphRAG (incl. fail-closed); retained claims have DB, full node ID, page, cite-gate | **PASS** (inject via prior COMPLETED — see F5) | Cold-review `ahmes status` → Nodes **118**, biblio DOI present, exit 0; cite-gate `bcb56994-…` exit 0; receipt GraphRAG vault mismatch; theme + voice UUID/page tables |
| Probe table: exit code per instructor command; student column filled or `not yet` + owner | **PASS** | Cold-review re-ran: node 22.22.0, pnpm 10.30.0, uv 0.13.5, python 3.14.7, uv 3.12.15, git 2.53.0, gh 2.101.0 — all exit 0; student = `not yet`, owner instructor |
| Python 3.12 via uv; TF only if learned-classifier adopted | **PASS** | `uv run --python 3.12` → 3.12.15 exit 0; TF "not probed" / not MVP |
| `_private/` drafts exist; tracked reports only status/date/owner | **PASS** | `ls _private/` → `CORREO-DEPARTAMENTO-ECSIT-ES.md`, `EMAIL-ALUMNADO-PREFLIGHT-ES.md`; `git check-ignore` → root `.gitignore` `_private/`; report §5 pending/dates only (addresses not opened by reviewer) |
| `REFERENCE-WORKS.md` three rows: catalogue, reproduction record, EU, US\|unresolved, none invented | **FAIL** | Catalogue + EU PD + US unresolved OK; **pixel/crop empty** (F1) |
| Downstream phases amended for changed assumptions; no proposed D-row | **PASS** with F2/F4 notes | Astro 7 in cascade D-02, §7, §8, `PHASE-M1.md` body; M1 status line premature (F2); no D-row `proposed` |
| Cold review filed; blocking findings closed | **PARTIAL** | This file filed; **F1 still open** — owner must close before DONE |

---

## Hard constraints (§3) — M0 scope

| Constraint | Check |
| --- | --- |
| No cloud AI SDKs | No product code added; N/A beyond tooling |
| Numbers from named measurement/analyzer | Catalogue sources named; no invented proportions in M0 |
| `work.schema.json` single contract | Mapping documented only; schema authoring is M2 |
| CSS does colour / JS `--theta` | Decision D-07 ratified; no code |
| `work.yml` immutable | No works authored |
| Editor = CSS Grid | D-08 ratified |
| No photographs of paintings in repo | No painting photos under `corpus/`; scholarly PDFs under `corpus-staging/` gitignored via `*.pdf`; kit assets are generated, not painting photos |
| Public site never depends on LAN API | D-09 ratified; no site yet |
| Implementer must not self-certify DONE | Report status **VERIFYING** — observed |

---

## Proposed D-rows remaining?

**None.** All twenty cascade §1 decisions are **`ratified`**. Grep hits on the word `proposed` are process prose / historical framing only (F4).

---

## Astro 7 vs Astro 6 amendment consistency

| Surface | Astro major | Consistent? |
| --- | --- | --- |
| `MONDRIAN-CASCADE.md` D-02, §7 pitch amendments, §8 layout | **Astro 7** (`astro@^7.4.2`; Astro 6 named only as superseded / pin fallback) | yes |
| `PHASE-M0-REPORT.md` D-02 evidence | Astro 7 dry-run; cascade amended 6→7 | yes |
| `PHASE-M1.md` Goal + Prompt | Astro 7 / `^7.4.2` | yes (status line issue is M0 DONE claim, not Astro version — F2) |
| `INDEX.md` live snapshot | Astro **7.4.2**; D-02 ratified Astro 7 + `withastro/action@v6` | yes |
| Cold-review `npm view astro version` | **7.4.2** | matches claim |
| Cold-review `gh api …/withastro/action/tags` | `v6` … `v6.1.4` present | matches claim |

No residual instruction to scaffold Astro 6 as the product default.

---

## Commands re-run by reviewer (exit codes)

```text
node -v                         → v22.22.0          exit 0
pnpm -v                         → 10.30.0           exit 0
uv --version                    → 0.13.5            exit 0
python3 --version               → 3.14.7            exit 0
uv run --python 3.12 …          → 3.12.15           exit 0
git --version                   → 2.53.0            exit 0
gh --version                    → 2.101.0           exit 0
ahmes status (spie_2010 DB)     → Nodes 118 …       exit 0
ahmes query --cite …bcb56994…   → evaluator_safe    exit 0
npm view astro version          → 7.4.2             exit 0
gh api withastro/action tags    → v6…v6.1.4         exit 0
grep -n proposed MONDRIAN-CASCADE.md → prose hits only
git check-ignore _private/CORREO… → ignored by root .gitignore
```

No phase exit-gate script / full product suite applies (M0 is pre-repo). No modules to import.

---

## Downstream impact

- **F1** must be closed before M0 → DONE; M2 measurement assumes a named reproduction with pixel geometry already recorded.
- **F2** amend `PHASE-M1.md` status in the same triage commit so resume does not treat M0 as DONE early.
- Do **not** start M1 until M0 is DONE.

---

## Owner triage

1. Record pixel/crop (and URL/path outside git) for all three references → close F1.  
2. Fix `PHASE-M1.md` status line → close F2.  
3. Optionally clear F3–F6.  
4. Owner flips M0 → DONE; then open M1.

---

## Implementer triage (same session, post-FAIL)

| Finding | Action | Closed? |
| --- | --- | --- |
| F1 | `corpus/REFERENCE-WORKS.md` records URL + W×H + full-frame crop for all three (Kunsthaus 5918×6000; Folkwang 839×1200; Tate 1920×1080). No photos committed. | **yes** |
| F2 | `PHASE-M1.md` status → `BLOCKED (M0)` until DONE | **yes** |
| F3 | Rationale §4.1 header + VT/scroll rows use M0 dated statuses; INDEX Keyboard Lock already dated 26 Oct 2026 | **yes** (27 Oct re-confirm) |
| F4 | Cascade §1 retitled “Preflight decisions (ratified in M0)”; process prose no longer implies open `proposed` D-rows; REFERENCE-WORKS status no longer “proposed in M0” | **yes** |
| F5 | Report + receipt §2.2: re-inject skipped; COMPLETED id + live search = zero-failed evidence | **yes** |
| F6 | Receipt §6: Core/Validation HEAD with follow-redirects; bare path may 308→200 | **yes** |

**Also 27 Oct (owner):** SIGraDi 2021 RIS + conference URL in receipt/REFERENCE-WORKS; growth candidates Composition A (2216×2204) and Tate No. VI (992×1000); grow-later pointer to Commons Category talk:Paintings by Piet Mondrian.

**M0 status remains VERIFYING.** Owner may flip DONE. Do not start M1 until then.
