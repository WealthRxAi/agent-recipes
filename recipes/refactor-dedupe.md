# Remove duplicate code safely

> Copy-pasted logic is scattered across the codebase and changes have to be made in many places.

| | |
|---|---|
| **ID** | `refactor-dedupe` |
| **Category** | `refactor-code` |
| **Best with** | Claude Code |

## Prompt

```text
Find and remove duplicated logic safely.

1. Identify the top duplicated blocks/functions ({{SCOPE or 'across the repo'}}). Show the duplicates with file:line before changing anything.
2. For each cluster, confirm the instances are truly equivalent (watch for subtle differences). Note any that only look similar.
3. Extract a single shared, well-named function/module and replace each call site.
4. Preserve any intentional differences via parameters — don't merge things that should stay separate.
5. Run tests after each consolidation.

Report duplicates found, what you merged, and what you deliberately left separate and why.
```

## Safety notes

Verify instances are truly identical before merging — false 'duplicates' with subtle differences cause bugs. Refactor in small, test-backed steps. Don't over-abstract; leave genuinely different code separate. Work on a branch.

## Expected output

A list of duplicate clusters with file:line, shared helpers replacing them, intentional differences preserved via params, green tests, and notes on what was left separate.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
