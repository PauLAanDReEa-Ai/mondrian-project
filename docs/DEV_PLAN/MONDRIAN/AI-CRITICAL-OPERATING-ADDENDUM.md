# AI-critical operating addendum

**Status:** instructor operating contract for M1, M8 and M9. It implements
[`AI-EVALUATION-SUFFICIENCY-REVIEW.md`](AI-EVALUATION-SUFFICIENCY-REVIEW.md)
without creating a second grading rubric.

The shared AI Use Declaration & Oral Defence Rubric v2.0.3 remains the only
summative instrument. This page defines the evidence that must accumulate
before the defence so Critique and Verify are not reconstructed afterwards.

## Pull-request evidence

Every assisted PR includes:

```markdown
## AI Review Log (required if an assistant touched this PR)

| What was AI-assisted | What I verified myself | Decision (ACCEPT / REJECT / N/A) | Reason if REJECT |
| --- | --- | --- | --- |
| | | | |

Checks run only by an assistant are named as assistant-run. AI never approves
or merges; a human does.
```

The existing plan link, declaration delta and measurement source remain
required. A declaration that only says “used Cursor” is incomplete. AI-proposed
proportions cannot become source measurements.

## Semester expectations

- Plan before implementation.
- At least one defended `REJECT` across the semester, not one per PR.
- Distinguish coding-assistant use from the analyzer's classical/learned-model
  evaluation; they are different disclosures.
- Name human checks separately from assistant-run commands.
- Perform one adversarial check where relevant: break a validator, corrupt a
  bound or otherwise prove a test is load-bearing.
- Complete one formative checkpoint by M8: show a rejected suggestion or a
  measurement proposal that was refused, with the reason.

## Instructor signs

These eight signs help prepare the shared-rubric judgement; they do not create
another automatic score:

1. AI Review Log present when required.
2. Human verification named.
3. Explicit rejection or non-acceptance with a reason.
4. Assistant-run and human-run checks distinguished.
5. Plan predates implementation.
6. Adversarial or mutation-style self-check.
7. Mid-semester reflection cites a concrete control decision.
8. Extended declaration or decision note explains a consequential choice.

Product quality and these signs are judged separately. A strong artefact does
not automatically demonstrate critical control of AI assistance.

## Close-out

M9 consumes the accumulated PR logs and declarations in the three-question
defence. After grades close, the instructor may produce a pseudonymised cohort
report and conclusions document using the TTOD close-out pattern. It is a
teaching/research close-out, not a retroactive grade or a public identity map.
