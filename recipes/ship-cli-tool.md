# Ship a zero-dependency CLI tool

> You want a small, installable command-line tool with no dependencies that does one job well.

| | |
|---|---|
| **ID** | `ship-cli-tool` |
| **Category** | `ship-mvp` |
| **Best with** | Codex |

## Prompt

```text
Build a zero-dependency CLI in {{LANGUAGE e.g. Node.js}} that: {{WHAT_IT_DOES}}.

1. Support subcommands and `--flags`; parse args by hand (no arg-parsing dependency).
2. Implement `--help` and a clear usage message; exit with proper codes (0 success, non-zero on error).
3. Read from stdin/files and write to stdout so it composes in pipelines.
4. Handle bad input gracefully with helpful errors (no stack-trace dumps for user errors).
5. Add a `bin` entry so it can be run/installed, and a README with examples.
6. Add a couple of tests for the core logic.

No runtime dependencies.
```

## Safety notes

Validate and sanitize all user input/paths; avoid shelling out with unsanitized args (command injection). Don't write outside intended paths. Use proper exit codes. Keep zero runtime deps as specified.

## Expected output

A zero-dependency CLI with subcommands/flags, `--help`, stdin/stdout support, graceful error handling, a bin entry, a README with examples, and core-logic tests.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
