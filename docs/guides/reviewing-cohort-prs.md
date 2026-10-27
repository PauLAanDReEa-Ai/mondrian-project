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

Before real PR waves, each student opens a short-lived branch that conflicts
with a known `main` touch, resolves it locally, and pushes — practicing the
CONTRIBUTING conflict rule without product risk.
