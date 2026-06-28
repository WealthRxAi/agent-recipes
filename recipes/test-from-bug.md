# Write a regression test from a bug report

> A bug was reported (or fixed) and you want a test that locks in the correct behavior so it never returns.

| | |
|---|---|
| **ID** | `test-from-bug` |
| **Category** | `write-tests` |
| **Best with** | Claude Code |

## Prompt

```text
Turn this bug into a permanent regression test:

{{BUG_DESCRIPTION_OR_REPRO_STEPS}}

1. Reproduce the bug as a failing test that asserts the CORRECT expected behavior.
2. Confirm it fails against the buggy code (if not already fixed).
3. If the fix isn't in yet, apply the minimal fix; then the test should pass.
4. Name the test after the bug and reference the issue/ticket in a comment.
5. Check for sibling cases that could have the same bug and add tests for them too.

The test must fail on the old behavior and pass on the correct behavior.
```

## Safety notes

Make sure the test actually fails before the fix — a test that passes either way proves nothing. Keep the fix minimal and scoped. Don't include real PII from the bug report; anonymize repro data. Work on a branch.

## Expected output

A named regression test that fails on the buggy behavior and passes on the fix, a reference to the issue, the minimal fix if needed, and tests for any sibling cases.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
