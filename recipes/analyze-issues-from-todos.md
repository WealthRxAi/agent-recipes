# Generate GitHub issues from TODOs

> Your code is full of TODO/FIXME/HACK comments and you want them turned into trackable issues.

| | |
|---|---|
| **ID** | `analyze-issues-from-todos` |
| **Category** | `analyze-repo` |
| **Best with** | Codex |

## Prompt

```text
Find actionable TODO/FIXME/HACK/XXX comments and turn them into well-formed GitHub issues.

1. Search the repo for TODO/FIXME/HACK/XXX (and similar). List each with file:line and surrounding context.
2. For each, draft an issue: a clear title, a body explaining the problem and acceptance criteria, suggested labels, and a rough effort estimate (S/M/L).
3. Group related TODOs into a single issue where it makes sense; drop stale/meaningless ones (note which).
4. Output everything to `issues.md` as a list I can review.
5. Only create real GitHub issues if I explicitly say so (and via `gh` with my confirmation) — otherwise just the file.

Don't create issues without my go-ahead.
```

## Safety notes

Default to writing issues.md only — do NOT create real issues automatically; require explicit confirmation before any `gh issue create`. Don't include secrets or sensitive context found near the TODOs. Avoid duplicating existing open issues.

## Expected output

An issues.md with one well-formed issue per actionable TODO (title, body, acceptance criteria, labels, effort), grouped/deduped sensibly — and no real issues created without confirmation.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
