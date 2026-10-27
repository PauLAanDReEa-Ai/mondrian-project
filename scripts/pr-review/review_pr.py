#!/usr/bin/env python3
"""Local Ollama review pass — comments only; never approve or merge."""

from __future__ import annotations

import argparse
import subprocess
import sys


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--pr", required=True)
    parser.add_argument(
        "--post",
        action="store_true",
        help="Post findings as a PR comment (default: print only)",
    )
    args = parser.parse_args()

    # Dry skeleton: real Ollama prompt lands when instructor enables POST.
    findings = [
        "NIT: Confirm branch name matches lane/<handle>-issue-<n>-<slug>.",
        "MUST FIX: AI Review Log required when the PR used assistance.",
    ]
    body = "## Local review (Ollama scaffold)\n\n" + "\n".join(
        f"- {line}" for line in findings
    )
    print(body)

    if args.post:
        subprocess.check_call(
            ["gh", "pr", "comment", args.pr, "--body", body],
        )
        print(f"Posted comment on PR #{args.pr} (no approve/merge).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
