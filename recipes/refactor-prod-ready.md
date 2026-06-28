# Make a project production-ready

> A working prototype needs hardening — error handling, config, logging, tests, CI — before real users touch it.

| | |
|---|---|
| **ID** | `refactor-prod-ready` |
| **Category** | `refactor-code` |
| **Best with** | Claude Code |

## Prompt

```text
Make this project production-ready. First produce a checklist and a prioritized plan, then execute top to bottom, pausing after the plan for my OK.

Cover:
1. Config: move hardcoded values to env, add `.env.example`, fail fast on missing required vars.
2. Errors: consistent error handling, no swallowed exceptions, user-safe messages.
3. Logging: structured logs, no secrets in logs.
4. Input validation on all external inputs.
5. Tests for the critical paths + a CI workflow that runs them.
6. A README with setup, run, and deploy steps.
7. Health check endpoint or equivalent.

List what you changed and what you deliberately left as a TODO with reasons.
```

## Safety notes

Work on a branch and keep changes reviewable (commit per concern). Do not introduce paid services. Never log secrets/PII. Don't change behavior while refactoring — keep tests green at each step.

## Expected output

A hardened repo with env config, robust error handling, structured logging, input validation, critical-path tests, a CI workflow, a health check, and a setup/deploy README — plus a list of remaining TODOs.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
