# Write the missing tests

> A module has little or no test coverage and you want a meaningful suite, fast.

| | |
|---|---|
| **ID** | `test-write-missing` |
| **Category** | `write-tests` |
| **Best with** | Claude Code |

## Prompt

```text
Add tests for {{FILE_OR_MODULE}} using the project's existing test runner.

1. Detect the test framework, folder convention, and style first — match them.
2. Read the module and list its public functions and their branches.
3. For each, write tests for the happy path, edge cases (empty, null, large, boundary), and error handling.
4. Name tests by behavior, e.g. `returns 0 for an empty cart`.
5. Run the suite and report coverage before/after.

Test behavior, not internals. If a test exposes a real bug, leave it failing and call it out.
```

## Safety notes

Don't change production code to make testing easier unless it's a genuine bug fix (note it). Never weaken an assertion to force a pass. No real network/DB calls in unit tests — mock them.

## Expected output

New test files in the project's convention covering happy/edge/error paths, all green except any that expose real bugs (clearly reported), and a coverage delta.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
