# Create docs from a codebase

> An undocumented repo needs a README and usage docs generated from the actual code.

| | |
|---|---|
| **ID** | `content-docs-from-code` |
| **Category** | `create-content` |
| **Best with** | Gemini CLI |

## Prompt

```text
Generate documentation for this repo from the real code — do not invent features.

1. Map entry points, public modules, and exported functions.
2. Write `README.md`: what it does, install, quickstart, and a short example that actually runs.
3. Write `docs/usage.md` with one section per public API, including signatures and a runnable snippet.
4. Document required env vars and config in a table.
5. Add a 'Project structure' tree.

Every code example must be copied from or verified against the real source. Mark anything uncertain with TODO.
```

## Safety notes

Do not fabricate APIs, flags, or env vars — verify against source. Don't expose secret values found in the repo; reference them by name only. Keep examples runnable and honest.

## Expected output

A README.md and docs/usage.md grounded in real code, with runnable examples, a config/env table, and a project-structure tree.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
