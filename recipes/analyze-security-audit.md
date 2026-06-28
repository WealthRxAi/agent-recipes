# Audit repo security without changing files

> You want a security review of a repo but must not let the agent change anything.

| | |
|---|---|
| **ID** | `analyze-security-audit` |
| **Category** | `analyze-repo` |
| **Best with** | Claude Code |

## Prompt

```text
Perform a READ-ONLY security audit of this repository. Do NOT edit, create, move, or delete any file — produce a report only.

1. Scan for hardcoded secrets, API keys, and tokens.
2. Check dependencies for known-risky or outdated packages.
3. Look for injection risks (SQL, command, XSS), unsafe deserialization, and missing input validation.
4. Review auth/session handling and access control.
5. Check for secrets or sensitive files committed to git history.

For each finding: severity (High/Med/Low), file:line, why it matters, and a suggested fix. End with a prioritized top-5 list.
```

## Safety notes

READ-ONLY: make zero file changes and run no destructive or network-mutating commands. Redact any discovered secret — never print full values. This is a first-pass review, not a substitute for a professional pentest.

## Expected output

A markdown report grouped by severity with file:line references and fixes, plus a prioritized top-5 — and zero changes to the working tree.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
