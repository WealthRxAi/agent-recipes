# Find dead code and unused dependencies

> The codebase has accumulated unused files, exports, and dependencies you'd like to safely remove.

| | |
|---|---|
| **ID** | `analyze-dead-code` |
| **Category** | `analyze-repo` |
| **Best with** | Cursor |

## Prompt

```text
Identify dead code and unused dependencies. Report first, remove only on my confirmation.

1. Find unreferenced files, unused exports, and unreachable functions. Show evidence (no inbound references) for each.
2. Find dependencies in package manifest that aren't imported anywhere.
3. Flag false-positive risks: dynamic imports, reflection, framework conventions, build-time-only deps, test-only usage.
4. Produce a removal plan ranked by confidence (safe / probably / risky).
5. Only after I approve, remove the 'safe' set on a branch and run the build + tests to confirm nothing broke.

Evidence before deletion.
```

## Safety notes

Don't delete on first pass — produce an evidence-backed plan and wait for approval. Beware dynamic imports, reflection, and framework magic that static analysis misses. After any removal, run build + full tests on a branch before trusting it.

## Expected output

A confidence-ranked report of dead files/exports/deps with evidence and false-positive caveats, then (only after approval) a verified removal of the safe set with green build + tests.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
