# Map an unfamiliar codebase

> You just cloned a repo and need a fast, accurate mental model of how it's structured.

| | |
|---|---|
| **ID** | `analyze-architecture-map` |
| **Category** | `analyze-repo` |
| **Best with** | Gemini CLI |

## Prompt

```text
Give me a map of this codebase so I can get productive fast.

1. Identify entry points, the main modules, and their responsibilities.
2. Draw the high-level architecture as a Mermaid diagram (components + data flow).
3. Explain the request/data lifecycle for one core flow, step by step, with file references.
4. List external dependencies and what each is used for.
5. Point out where to add a new feature of type {{FEATURE_TYPE}}, and any risky/confusing areas.
6. Note the build/test/run commands.

Ground everything in the real files — cite file:line.
```

## Safety notes

Read-only analysis — don't modify files. Cite real file paths; mark anything inferred rather than confirmed. Don't expose secrets found while exploring. Keep the summary accurate over impressive.

## Expected output

An architecture overview with a Mermaid diagram, a traced core flow with file references, a dependency list, guidance on where to add features, risky-area callouts, and the build/test/run commands.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
