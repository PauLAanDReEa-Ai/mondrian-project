<!--
Mondrian Project — Node.js security pin after October 2026 CVEs.
Author: Rubén Vega Balbás, PhD · 27 October 2026
Amends D-02 (toolchain) and PHASE-M1 engines / CI.
-->

# D-28 — Node.js security pin (≥ 24.22.1 LTS)

**Status:** adopted 27 October 2026 (owner; pre-M1).
**Evidence:** [Node.js Oct 2026 security releases](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases); CSA alert on Brotli RCE CVE-2026-111497; patched floors **22.23.4** / **24.22.1** / **26.12.1**.

---

## Decision

The Mondrian product (local, CI, Pages build, student machines) requires:

| Pin | Value |
| --- | --- |
| **Preferred line** | Node.js **24.x LTS** (“Krypton”) |
| **Minimum** | **`>=24.22.1`** |
| **Allowed alternate** | `22.23.4+` only if a lab machine cannot run 24 — still must be patched |
| **Forbidden** | Node **20.x and older** (EOL — no upstream Oct 2026 fix); any **22.x &lt; 22.23.4** or **24.x &lt; 24.22.1** |

Instructor machine (27 Oct 2026): Homebrew `node@22` **22.22.0** removed; **nvm** default **v24.22.1**.

## Why 24, not 22

- Matches `withastro/action@v6` default Node **24**.
- One LTS line for students + CI + local (fewer “works on my machine” skews).
- 22 remains a documented escape hatch only until lab images catch up.

## Product repo artefacts (M1 must ship)

| Artefact | Content |
| --- | --- |
| `.nvmrc` | `24.22.1` |
| Root `package.json` `engines.node` | `>=24.22.1` |
| `.npmrc` | `engine-strict=true` (already in M1 prompt) |
| CI `ci.yml` / `deploy-pages.yml` | `node-version: 24.22.1` (or `24` only if Actions image is verified ≥24.22.1) |
| `AGENTS.md` / README | One line: install via nvm/fnm; do not use Homebrew unpatched Node 22 |
| `CONTRIBUTING.md` | Same floor before `pnpm install` |

## Upgrade rule

When Node.js ships a later **24.x** security release, bump `.nvmrc` + `engines` + CI in the **same** PR; do not leave CI on an older patch while local drifts.

## Does not change

Asset-kit release manifests that recorded `v22.22.0` at build time stay historical. Regenerating kits later should note the new runtime in their own receipt.
