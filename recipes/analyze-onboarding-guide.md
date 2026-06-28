# Generate a contributor onboarding guide

> New contributors keep asking the same setup questions; you want a guide generated from the real repo.

| | |
|---|---|
| **ID** | `analyze-onboarding-guide` |
| **Category** | `analyze-repo` |
| **Best with** | Claude Code |

## Prompt

```text
Create a contributor onboarding guide (`ONBOARDING.md`) from this repo.

1. Document prerequisites (languages, tools, versions detected from config files).
2. Step-by-step local setup: clone, install, env vars (from .env.example), seed/data, run, and how to confirm it's working.
3. How to run tests and the linter; the expected green state.
4. The branch/PR workflow and commit conventions (infer from existing history/config).
5. A 'your first contribution' walkthrough: where to find good first tasks and the file map for common changes.
6. Common gotchas you can spot from the setup.

Verify steps against the real config — don't guess versions.
```

## Safety notes

Verify setup steps and versions against real config files — wrong onboarding steps waste every newcomer's time. Reference env vars by name (from .env.example), never real secret values. Mark anything unverified as TODO.

## Expected output

An ONBOARDING.md with verified prerequisites, step-by-step setup, test/lint instructions, the PR/commit workflow, a first-contribution walkthrough, and common gotchas — grounded in the repo.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
