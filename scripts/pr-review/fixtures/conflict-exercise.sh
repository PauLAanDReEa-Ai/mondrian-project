#!/usr/bin/env bash
# Runnable staged conflict exercise — temp git repo; never touches product main.
# CI / make:  bash scripts/pr-review/fixtures/conflict-exercise.sh --auto-resolve
# Student:    bash scripts/pr-review/fixtures/conflict-exercise.sh
#             (leaves a conflict; resolve seed.txt, then re-run with --check DIR)
set -euo pipefail

mode="${1:---demo}"
keep_dir="${2:-}"

make_conflict() {
  local root="$1"
  git -C "$root" init -q
  git -C "$root" config user.email "conflict-exercise@mondrian.local"
  git -C "$root" config user.name "Conflict Exercise"
  echo "line from main" >"$root/seed.txt"
  git -C "$root" add seed.txt
  git -C "$root" commit -qm "main: seed"
  git -C "$root" checkout -qb "lane/demo-issue-1-conflict"
  echo "line from student branch" >"$root/seed.txt"
  git -C "$root" commit -am "student: edit seed"
  git -C "$root" checkout -q main
  echo "line from instructor on main" >"$root/seed.txt"
  git -C "$root" commit -am "main: conflicting edit"
  git -C "$root" checkout -q "lane/demo-issue-1-conflict"
  set +e
  git -C "$root" merge main -m "merge main" >/dev/null 2>&1
  local merge_rc=$?
  set -e
  if [[ "$merge_rc" -eq 0 ]]; then
    echo "conflict-exercise FAIL: expected a merge conflict"
    return 1
  fi
  if ! git -C "$root" ls-files -u | grep -q .; then
    echo "conflict-exercise FAIL: merge failed but no unmerged paths"
    return 1
  fi
  return 0
}

case "$mode" in
  --auto-resolve)
    root="$(mktemp -d "${TMPDIR:-/tmp}/mp-conflict.XXXXXX")"
    trap 'rm -rf "$root"' EXIT
    make_conflict "$root"
    printf '%s\n' "resolved: student kept intent after reading both sides" >"$root/seed.txt"
    git -C "$root" add seed.txt
    git -C "$root" commit -qm "student: resolve own conflict"
    echo "conflict-exercise OK (auto-resolved in temp repo)"
    ;;
  --check)
    root="${keep_dir:?Usage: $0 --check /path/to/exercise-repo}"
    if git -C "$root" ls-files -u | grep -q .; then
      echo "conflict-exercise FAIL: unmerged paths remain — finish the resolve"
      exit 1
    fi
    echo "conflict-exercise OK (resolved)"
    ;;
  --demo|*)
    root="$(mktemp -d "${TMPDIR:-/tmp}/mp-conflict.XXXXXX")"
    make_conflict "$root"
    cat <<EOF
conflict-exercise: CONFLICT ready in:
  $root

Resolve it yourself (CONTRIBUTING: own your conflicts):
  cd $root
  # edit seed.txt — remove conflict markers; keep one coherent version
  git add seed.txt
  git commit -m "resolve conflict"

Then verify:
  bash scripts/pr-review/fixtures/conflict-exercise.sh --check $root

CI uses:  …/conflict-exercise.sh --auto-resolve
EOF
    exit 1
    ;;
esac
