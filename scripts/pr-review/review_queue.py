#!/usr/bin/env python3
"""List open PRs that look ready for instructor review (read-only)."""

from __future__ import annotations

import json
import subprocess
import sys


def main() -> int:
    try:
        raw = subprocess.check_output(
            [
                "gh",
                "pr",
                "list",
                "--state",
                "open",
                "--json",
                "number,title,author,headRefName,labels,url",
            ],
            text=True,
        )
    except (subprocess.CalledProcessError, FileNotFoundError) as exc:
        print(f"review-queue: cannot list PRs ({exc})", file=sys.stderr)
        return 1

    prs = json.loads(raw)
    if not prs:
        print("No open PRs.")
        return 0

    for pr in prs:
        print(
            f"#{pr['number']} {pr['title']}\n"
            f"  branch: {pr['headRefName']}\n"
            f"  author: {pr['author']['login']}\n"
            f"  {pr['url']}\n"
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
