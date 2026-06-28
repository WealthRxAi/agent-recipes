# Migrate a codebase to strict TypeScript

> You want the safety of TypeScript strict mode but the codebase isn't ready for it yet.

| | |
|---|---|
| **ID** | `refactor-types-strict` |
| **Category** | `refactor-code` |
| **Best with** | Codex |

## Prompt

```text
Migrate this codebase to TypeScript `strict` mode incrementally.

1. Turn on `strict` in tsconfig and run `tsc --noEmit` to get the full error list. Report the count.
2. Fix errors file-by-file or rule-by-rule (start with `strictNullChecks`). Prefer real types over casts.
3. Where a proper type is genuinely hard, add a narrowly-scoped `// TODO: tighten` with the reason — never a blanket `any`.
4. Re-run after each batch and report remaining count.
5. Keep the build and tests green throughout.

Goal: `strict: true` with zero errors and minimal escape hatches.
```

## Safety notes

Do this incrementally on a branch; don't flip all strict flags and rewrite everything at once. No blanket `any`/`@ts-ignore` — every escape hatch must be narrow and justified. Keep tests green at each batch.

## Expected output

`strict: true` enabled, zero `tsc --noEmit` errors, minimal and individually-justified escape hatches, and green tests.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
