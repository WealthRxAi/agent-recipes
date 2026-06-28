# Split a god file into clean modules

> One giant file does everything and is impossible to navigate or test.

| | |
|---|---|
| **ID** | `refactor-extract-modules` |
| **Category** | `refactor-code` |
| **Best with** | Cursor |

## Prompt

```text
Refactor {{BIG_FILE}} into small, cohesive modules without changing behavior.

1. Map the file: list every function/class and group them by responsibility.
2. Propose a target module layout and show it before moving code.
3. Extract one cohesive group at a time into its own file with clear exports; update imports.
4. Keep public APIs identical (re-export from the old path if other code depends on it).
5. Run tests (or add characterization tests first if there are none) after each extraction.
6. End with a short map of the new structure.

Behavior must not change — this is a pure refactor.
```

## Safety notes

If there are no tests, add characterization tests capturing current behavior BEFORE refactoring. Move in small, test-verified steps. Preserve public APIs (re-export if needed) so callers don't break. Work on a branch.

## Expected output

The god file split into cohesive modules, identical public APIs, green tests at every step (with characterization tests added if none existed), and a map of the new structure.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
