.PHONY: help review-queue review-pr check conflict-exercise

help:
	@echo "make check              — pnpm check + uv pytest"
	@echo "make review-queue       — list open PRs needing review (read-only)"
	@echo "make review-pr PR=n     — local Ollama comment pass (POST=1 to publish)"
	@echo "make conflict-exercise  — runnable staged conflict fixture (temp repo)"

check:
	pnpm check
	uv sync
	uv run pytest
	bash scripts/pr-review/fixtures/conflict-exercise.sh --auto-resolve

review-queue:
	python3 scripts/pr-review/review_queue.py

review-pr:
	@test -n "$(PR)" || (echo "Usage: make review-pr PR=<n> [POST=1]"; exit 1)
	python3 scripts/pr-review/review_pr.py --pr "$(PR)" $(if $(POST),--post,)

conflict-exercise:
	bash scripts/pr-review/fixtures/conflict-exercise.sh --auto-resolve
