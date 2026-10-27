# Reviewing cohort PRs

## Queue

```bash
make review-queue
```

Read-only. Uses `gh pr list`.

## Local comment pass

```bash
make review-pr PR=12          # print MUST FIX | NIT
make review-pr PR=12 POST=1   # post as PR comment only
```

Never approve or merge from these scripts. Human reviewers use the GitHub UI.

## Worktree

Review large PRs in an isolated worktree so `main` stays clean:

```bash
git fetch origin
git worktree add ../mondrian-review-pr-12 origin/lane/<handle>-issue-12-<slug>
```

## Staged conflict exercise

Runnable fixture (temp git repo — never touches product `main`):

```bash
make conflict-exercise
# or: bash scripts/pr-review/fixtures/conflict-exercise.sh --auto-resolve
```

Student walk-through (leaves a real conflict to resolve by hand):

```bash
bash scripts/pr-review/fixtures/conflict-exercise.sh --demo
# follow printed cd / edit / commit steps, then:
bash scripts/pr-review/fixtures/conflict-exercise.sh --check /path/from/demo
```

Practices the CONTRIBUTING rule: resolve your own conflicts before real PR waves.
`make check` runs `--auto-resolve` so CI proves the fixture still works.
