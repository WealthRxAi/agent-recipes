# Modernize callbacks to async/await

> Legacy callback/promise-chain code is hard to read and error-prone.

| | |
|---|---|
| **ID** | `refactor-async-await` |
| **Category** | `refactor-code` |
| **Best with** | Gemini CLI |

## Prompt

```text
Convert callback-style and promise-chain code to async/await without changing behavior.

1. List the files/functions using callbacks or `.then()` chains.
2. Convert each to async/await, preserving error semantics (every reject path becomes a try/catch or propagates).
3. Keep concurrency where it existed — use `Promise.all` instead of awaiting in a loop when calls were parallel.
4. Make sure errors are still handled, not swallowed.
5. Run tests after each file.

Behavior, ordering, and error handling must stay identical.
```

## Safety notes

Preserve error handling exactly — async/await makes it easy to accidentally swallow a rejection. Don't serialize calls that used to run in parallel (use Promise.all). Convert and test one file at a time on a branch.

## Expected output

Callbacks/promise-chains converted to async/await with identical behavior, preserved error handling and concurrency, and green tests after each file.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
