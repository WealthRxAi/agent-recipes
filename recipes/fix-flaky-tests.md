# Diagnose and stabilize flaky tests

> Tests pass sometimes and fail other times, eroding trust in CI.

| | |
|---|---|
| **ID** | `fix-flaky-tests` |
| **Category** | `fix-bugs` |
| **Best with** | Cursor |

## Prompt

```text
Find and fix flaky tests in this repo.

1. Identify suspected flaky tests ({{LIST_OR_'detect them'}}). Run the suite several times if needed to surface them.
2. For each, find the root cause: timing/race, shared mutable state, real time/Date, random data, network, or test-order dependence.
3. Fix it properly: fake timers, deterministic seeds, isolate state, mock the network, await properly. Do NOT add blind sleeps or bump retries to mask it.
4. Re-run each fixed test 10x to confirm stability.
5. Report each flake's root cause and the fix.
```

## Safety notes

Do not paper over flakes with arbitrary sleeps, increased retries, or by disabling the test — find the real cause. Keep changes scoped to tests and the minimal source needed. Work on a branch.

## Expected output

Stabilized tests (each passing 10/10 reruns), a root-cause + fix note per flake, and no new blind sleeps or retry hacks.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
