# Plan and scaffold a weekend MVP

> You have a weekend and want a realistic plan plus a running skeleton for a focused MVP.

| | |
|---|---|
| **ID** | `ship-weekend-mvp` |
| **Category** | `ship-mvp` |
| **Best with** | Claude Code |

## Prompt

```text
Help me ship a weekend MVP for: {{IDEA}}.

1. First, define the single core loop that proves the idea, and cut everything else. Show me the scoped feature list and a Sat/Sun timeline before coding.
2. Pick the simplest stack that ships fast (no paid services) and justify it in two lines.
3. Scaffold a running skeleton: one core flow end-to-end, local storage, and a README.
4. Leave clearly-marked TODOs for the deferred features.
5. Add a 'how to demo this' section so I can show it.

Bias to shipping one working thing over many half-built things.
```

## Safety notes

Keep scope ruthless — defer (don't half-build) extras to avoid an unshippable weekend. No paid services/API keys. Use .env.example for config. Work on a branch and commit in working increments.

## Expected output

A scoped feature list, a Sat/Sun timeline, a justified simple stack, a running end-to-end skeleton with local storage, marked TODOs for deferred work, and demo instructions.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
