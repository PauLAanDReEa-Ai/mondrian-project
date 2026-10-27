#!/usr/bin/env bash
# Reject PR bodies that claim assistance without an AI Review Log table.
set -euo pipefail
body="${1:-}"
if grep -qiE 'assisted|copilot|claude|cursor|ollama' <<<"$body"; then
  if ! grep -q 'AI Review Log' <<<"$body"; then
    echo "FAIL: assisted work mentioned but AI Review Log missing"
    exit 1
  fi
fi
echo "OK"
