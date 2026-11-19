#!/usr/bin/env bash
# M2 conformance: Ajv | JS semantic | zod | pydantic + plan equality + catalog
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

node --input-type=module <<'NODE'
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { parse as parseYaml } from "yaml";
import Ajv2020 from "ajv/dist/2020.js";
import { validateWork, deriveRenderPlan, renderSvg } from "./packages/matrix/src/index.js";
import { validateWorkZod } from "./packages/works/schema/work.zod.js";

const root = process.cwd();
const schema = JSON.parse(
  readFileSync(join(root, "packages/works/schema/work.schema.json"), "utf8"),
);
const stripFormats = (node) => {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) return node.forEach(stripFormats);
  if ("format" in node) delete node.format;
  Object.values(node).forEach(stripFormats);
};
stripFormats(schema);
const ajv = new Ajv2020({ allErrors: true, strict: false });
const validateSchema = ajv.compile(schema);

const fixturesDir = join(root, "packages/works/fixtures");
const valid = parseYaml(readFileSync(join(fixturesDir, "valid.yml"), "utf8"));

function cols(label, schemaOk, jsCol, zodOk, extra = "") {
  const schemaCol = schemaOk ? "ok" : "reject";
  const zodCol = zodOk ? "ok" : "reject";
  console.log(
    `${label}: schema=${schemaCol} js=${jsCol} zod=${zodCol}${extra}`,
  );
}

function checkValid(doc) {
  const schemaOk = validateSchema(doc);
  const js = validateWork(doc);
  const zod = validateWorkZod(doc);
  const jsCol = js.ok ? "ok" : "reject";
  cols("valid.yml", schemaOk, jsCol, zod.ok, js.ok ? "" : ` path=${js.path}`);
  if (!(schemaOk && js.ok && zod.ok)) process.exitCode = 1;
}

/**
 * Structural: Ajv + zod must reject. JS is semantic-only → js=n/a when schema rejected.
 * (PHASE-M2 Acceptance amended M2 F2 triage.)
 */
function checkStructural(label, doc) {
  const schemaOk = validateSchema(doc);
  const zod = validateWorkZod(doc);
  const jsCol = schemaOk ? (validateWork(doc).ok ? "ok" : "reject") : "n/a";
  cols(label, schemaOk, jsCol, zod.ok);
  if (schemaOk || zod.ok) process.exitCode = 1;
}

function checkSemantic(label, doc) {
  const schemaOk = validateSchema(doc);
  const js = validateWork(doc);
  const zod = validateWorkZod(doc);
  const schemaCol = schemaOk ? "structural-ok" : "reject";
  console.log(
    `${label}: schema=${schemaCol} js=${js.ok ? "ok" : "reject"} zod=${zod.ok ? "ok" : "reject"} path=${js.path || zod.path || ""}`,
  );
  // Semantic cases must fail JS (geometry). Zod may accept structural shape.
  if (js.ok) process.exitCode = 1;
}

checkValid(valid);

for (const f of readdirSync(join(fixturesDir, "broken/structural"))) {
  if (!f.endsWith(".yml")) continue;
  const doc = parseYaml(
    readFileSync(join(fixturesDir, "broken/structural", f), "utf8"),
  );
  checkStructural(`structural/${f}`, doc);
}
for (const f of readdirSync(join(fixturesDir, "broken/semantic"))) {
  if (!f.endsWith(".yml")) continue;
  const doc = parseYaml(
    readFileSync(join(fixturesDir, "broken/semantic", f), "utf8"),
  );
  checkSemantic(`semantic/${f}`, doc);
}

const plan = deriveRenderPlan(valid, 1);
const svg = renderSvg(plan);
process.stdout.write(`plan items=${plan.items.length} svgChars=${svg.length}\n`);
mkdirSync("/tmp/mondrian-m2", { recursive: true });
writeFileSync("/tmp/mondrian-m2/js-plan.json", JSON.stringify(plan));
writeFileSync("/tmp/mondrian-m2/js-svg.svg", svg);
NODE

uv run python <<'PY'
import json
import hashlib
from pathlib import Path
import yaml
from mondrian_work_schema import Work, derive_render_plan, write_catalog
from pydantic import ValidationError

root = Path('.').resolve()
valid = yaml.safe_load((root/'packages/works/fixtures/valid.yml').read_text())
Work.model_validate(valid)
print('valid.yml: py=ok')

struct_dir = root/'packages/works/fixtures/broken/structural'
for f in sorted(struct_dir.glob('*.yml')):
    doc = yaml.safe_load(f.read_text())
    try:
        Work.model_validate(doc)
        print(f'structural/{f.name}: py=ok (UNEXPECTED)')
        raise SystemExit(1)
    except (ValidationError, Exception):
        print(f'structural/{f.name}: py=reject')

sem_dir = root/'packages/works/fixtures/broken/semantic'
for f in sorted(sem_dir.glob('*.yml')):
    doc = yaml.safe_load(f.read_text())
    try:
        Work.model_validate(doc)
        print(f'semantic/{f.name}: py=ok (UNEXPECTED)')
        raise SystemExit(1)
    except Exception:
        print(f'semantic/{f.name}: py=reject')

js_plan = json.loads(Path('/tmp/mondrian-m2/js-plan.json').read_text())
py_plan = derive_render_plan(valid, 1)

def close(a, b, tol=1e-9):
    if type(a) != type(b):
        if isinstance(a, (int, float)) and isinstance(b, (int, float)):
            return abs(a-b) <= tol
        return False
    if isinstance(a, float):
        return abs(a-b) <= tol
    if isinstance(a, list):
        return len(a)==len(b) and all(close(x,y,tol) for x,y in zip(a,b))
    if isinstance(a, dict):
        return a.keys()==b.keys() and all(close(a[k], b[k], tol) for k in a)
    return a == b

if not close(js_plan, py_plan):
    for key in ('lineWeightScale', 'xTracks', 'yTracks'):
        if not close(js_plan[key], py_plan[key]):
            print('plan DIFF at', key)
            raise SystemExit(1)
    if len(js_plan['items']) != len(py_plan['items']):
        print('plan item count mismatch')
        raise SystemExit(1)
    for a,b in zip(js_plan['items'], py_plan['items']):
        if not close(a,b):
            print('plan item DIFF', a.get('id'), b.get('id'))
            raise SystemExit(1)
print('valid.yml: plan=equal')

out = root/'services/web/public/patterns'
out.mkdir(parents=True, exist_ok=True)
for stale in list(out.glob('*.json')) + list(out.glob('*.svg')):
    stale.unlink()
paths = write_catalog(valid, out)
print(f'catalog wrote {len(paths)} files -> {out}')
if len(paths) != 10:
    print(f'UNEXPECTED catalog count {len(paths)} (want 10 MVP artefacts)')
    raise SystemExit(1)

# No identity clones among emitted variation JSON (F3 guard).
hashes = {}
for p in paths:
    if p.suffix != '.json':
        continue
    digest = hashlib.sha256(p.read_bytes()).hexdigest()
    if digest in hashes:
        print(f'catalog identity clone: {hashes[digest]} == {p.name}')
        raise SystemExit(1)
    hashes[digest] = p.name

banned = list(out.glob('*--invert-rank.*')) + list(out.glob('*--complement.*')) \
    + list(out.glob('*--reciprocal.*')) + list(out.glob('*--equalize.*'))
if banned:
    print('banned weight stub artefacts present:', [b.name for b in banned])
    raise SystemExit(1)

print('valid.yml: schema=ok js=ok zod=ok py=ok plan=equal')
print('conformance: OK')
PY
