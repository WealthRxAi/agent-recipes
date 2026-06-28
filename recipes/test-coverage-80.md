# Raise coverage to 80% on critical paths

> Coverage is low and you want to raise it meaningfully — on the code that matters, not trivial getters.

| | |
|---|---|
| **ID** | `test-coverage-80` |
| **Category** | `write-tests` |
| **Best with** | Cursor |

## Prompt

```text
Raise test coverage to ~80% focused on critical paths.

1. Run coverage and list the lowest-covered files that are also high-risk/high-traffic. Prioritize those.
2. For each, add behavior-focused tests for the important branches and error handling.
3. Skip trivial code (simple getters, config) — chase meaningful coverage, not the number alone.
4. Re-run coverage after each file and report progress toward 80%.
5. Note any code that's hard to test and why (suggest a small refactor if it would help).

Quality over vanity metrics — don't write assertion-free tests to pad coverage.
```

## Safety notes

Don't game the metric with assertion-free or trivial tests — coverage must reflect real verification. Mock external systems. If a refactor is needed to make code testable, propose it rather than forcing a brittle test. Work on a branch.

## Expected output

Coverage near 80% concentrated on critical paths, behavior-focused tests with real assertions, a progress report, and notes on hard-to-test code.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
