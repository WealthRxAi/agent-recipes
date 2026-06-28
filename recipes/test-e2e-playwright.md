# Add end-to-end tests with Playwright

> You want browser-level tests of the critical user journeys (sign-up, checkout, core flow).

| | |
|---|---|
| **ID** | `test-e2e-playwright` |
| **Category** | `write-tests` |
| **Best with** | Codex |

## Prompt

```text
Add Playwright end-to-end tests for the critical flows: {{FLOWS e.g. sign up, log in, create item}}.

1. Install and configure Playwright if not present (free, open-source).
2. Write one spec per flow, asserting on user-visible outcomes (text, URL, visible elements) — not internal IDs.
3. Use role/text selectors for resilience; avoid brittle CSS/xpath where possible.
4. Set up test data via the app's own UI or a seed step; clean up after.
5. Make tests runnable headless in CI with `npx playwright test`.
6. Report which flows are covered and any you couldn't automate.

Deterministic, no flaky waits — use auto-waiting/web-first assertions.
```

## Safety notes

Run E2E against a local/dev environment, never production. Don't hardcode real credentials — use env/test accounts. Use Playwright's auto-waiting instead of fixed sleeps to avoid flakiness. Keep test data isolated and cleaned up.

## Expected output

Configured Playwright, one resilient spec per critical flow asserting user-visible outcomes, headless CI-ready runs, and a coverage report of flows tested vs. skipped.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
