#!/usr/bin/env python3
"""Emit build-time pattern catalog into services/web/public/patterns/."""

from __future__ import annotations

import sys
from pathlib import Path

import yaml
from mondrian_work_schema import write_catalog

ROOT = Path(__file__).resolve().parents[1]
WORKS = ROOT / "packages" / "works" / "works"
OUT = ROOT / "services" / "web" / "public" / "patterns"


def main() -> int:
    OUT.mkdir(parents=True, exist_ok=True)
    # Drop stale artefacts so omitted MVP variations cannot linger.
    for stale in OUT.glob("*.json"):
        stale.unlink()
    for stale in OUT.glob("*.svg"):
        stale.unlink()

    works = sorted(WORKS.glob("*/work.yml"))
    if not works:
        print("emit_catalog: no work.yml found", file=sys.stderr)
        return 1

    written = 0
    for path in works:
        doc = yaml.safe_load(path.read_text())
        paths = write_catalog(doc, OUT)
        written += len(paths)
        print(f"emit_catalog: {doc['id']} -> {len(paths)} files")

    print(f"emit_catalog: wrote {written} files -> {OUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
