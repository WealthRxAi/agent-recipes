# Find root cause from a stack trace

> You have an error/stack trace from production or logs and need the real root cause and a safe fix.

| | |
|---|---|
| **ID** | `fix-prod-stacktrace` |
| **Category** | `fix-bugs` |
| **Best with** | Gemini CLI |

## Prompt

```text
Here is an error and stack trace:

{{PASTE_STACK_TRACE}}

1. Trace it to the exact file and line, then explain the actual root cause (not just where it threw).
2. Identify the conditions that trigger it (inputs, state, timing).
3. Write a failing test that reproduces it.
4. Apply the minimal fix that makes that test pass without breaking others.
5. Note any other call sites with the same latent bug.

Report: root cause, reproduction, fix, and blast radius.
```

## Safety notes

Reproduce with a test before fixing — don't guess. Keep the fix minimal and avoid unrelated refactors. Redact any secrets or PII in logs you paste or quote. Work on a branch.

## Expected output

A clear root-cause explanation, a failing-then-passing reproduction test, a minimal fix, and a list of other affected call sites.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
