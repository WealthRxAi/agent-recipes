# Make the failing test suite green

> Tests are red and you need them passing — by fixing real bugs, not by deleting assertions.

| | |
|---|---|
| **ID** | `fix-failing-tests` |
| **Category** | `fix-bugs` |
| **Best with** | Claude Code |

## Prompt

```text
The test suite is failing. Make it green by fixing the underlying code, not the tests.

1. Run the suite and list every failing test with its error.
2. For each, decide: is the test correct and the code wrong, or is the test outdated? State your reasoning.
3. Fix code bugs first. Only change a test if the test itself encodes wrong behavior — and explain why.
4. Re-run after each fix.
5. At the end, report what was a real bug vs. a stale test.

Do not skip, comment out, or weaken tests to force a pass.
```

## Safety notes

Never `skip`/`xit`/delete a test or soften an assertion just to go green — that hides regressions. If a test is genuinely wrong, change it and justify it explicitly. Work on a branch.

## Expected output

A fully green suite with no skipped/weakened tests, plus a breakdown of which failures were real code bugs vs. legitimately outdated tests.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
