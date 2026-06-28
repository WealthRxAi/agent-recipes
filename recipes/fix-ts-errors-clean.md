# Fix TypeScript errors until clean

> Your build fails with dozens of TypeScript errors and you want them all resolved without weakening type safety.

| | |
|---|---|
| **ID** | `fix-ts-errors-clean` |
| **Category** | `fix-bugs` |
| **Best with** | Codex |

## Prompt

```text
Goal: a clean `npx tsc --noEmit`.

1. Run `npx tsc --noEmit` and collect every error.
2. Group errors by root cause (missing types, wrong imports, null-safety, config).
3. Fix the root cause, not each symptom. Prefer correct types over casts.
4. Re-run after each group and report the remaining count.
5. Stop only when the count is 0.

Constraints: do not use `any`, `@ts-ignore`, or non-null `!` to silence errors unless you add a `// TODO:` explaining why it's unavoidable. Do not loosen `strict` in tsconfig.
```

## Safety notes

Work on a branch. Never weaken tsconfig strictness or blanket-cast to `any` to make errors disappear — that hides real bugs. Re-run the test suite after fixing to confirm no behavior changed.

## Expected output

Zero errors from `npx tsc --noEmit`, a summary of changes grouped by root cause, no new `any`/`@ts-ignore`, and a still-green test suite.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
