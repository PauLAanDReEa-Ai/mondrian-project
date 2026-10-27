#!/usr/bin/env bash
# Fail if branch tip is not based on current origin/main (hygiene preflight).
set -euo pipefail

git fetch origin main --quiet
base="$(git merge-base HEAD origin/main)"
main="$(git rev-parse origin/main)"
if [[ "$base" != "$main" ]]; then
  echo "preflight FAIL: branch is behind origin/main — rebase or recreate from current main"
  exit 1
fi
echo "preflight OK: based on current origin/main"
