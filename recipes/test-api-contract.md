# Add API contract tests

> You want to guarantee your API's responses keep their shape so you don't silently break clients.

| | |
|---|---|
| **ID** | `test-api-contract` |
| **Category** | `write-tests` |
| **Best with** | Gemini CLI |

## Prompt

```text
Add contract tests for the API at {{BASE_PATH or 'these routes'}}.

1. List the endpoints, methods, and their documented/observed request + response shapes.
2. For each, write a test asserting status code, response schema (field names + types), and key invariants — not exact volatile values.
3. Cover error responses too (400/401/404/422) with their expected shapes.
4. Use the existing test runner; spin up the app or use a test client.
5. Flag any endpoint whose actual response differs from its documentation.

Assert structure and contracts, not brittle exact payloads.
```

## Safety notes

Run against a local/test instance, not production. Don't bake in secrets or real tokens. Assert schema/types, not volatile values (timestamps, ids), to avoid false failures. Report contract mismatches rather than loosening tests to hide them.

## Expected output

Contract tests per endpoint asserting status, response schema, and invariants (including error shapes), runnable locally/CI, plus a list of endpoints that diverge from their docs.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
