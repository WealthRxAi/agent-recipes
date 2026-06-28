# Hunt a performance regression

> Something got slow (a page, endpoint, or job) and you need to find and fix the bottleneck with evidence.

| | |
|---|---|
| **ID** | `fix-perf-regression` |
| **Category** | `fix-bugs` |
| **Best with** | Claude Code |

## Prompt

```text
Investigate a performance regression in {{AREA e.g. the /search endpoint}}.

1. Establish a baseline: measure current timing with a quick benchmark or timing logs. Record the numbers.
2. Profile to find the hot path (N+1 queries, accidental O(n^2), re-renders, missing index, sync I/O in a loop).
3. Propose the smallest change that addresses the biggest cost. Explain the expected win before coding.
4. Apply it, re-measure, and report before/after numbers.
5. Add a lightweight guard (test or benchmark) so the regression can't silently return.

Optimize based on measurements, not guesses.
```

## Safety notes

Measure before and after — never optimize on a hunch. Don't trade correctness for speed; keep behavior identical and covered by tests. Avoid premature micro-optimizations; target the proven bottleneck. Work on a branch.

## Expected output

Before/after measurements, a targeted fix for the real bottleneck, unchanged behavior with passing tests, and a guard against re-regression.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
