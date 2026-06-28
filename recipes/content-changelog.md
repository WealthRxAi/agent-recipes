# Generate a release changelog from git history

> You're cutting a release and want a clean, human-readable changelog from commits.

| | |
|---|---|
| **ID** | `content-changelog` |
| **Category** | `create-content` |
| **Best with** | Codex |

## Prompt

```text
Generate a changelog for the range {{FROM_TAG}}..{{TO_TAG_OR_HEAD}}.

1. Read commits with `git log {{FROM_TAG}}..{{TO_TAG}} --no-merges`.
2. Group into Added / Changed / Fixed / Removed / Security (Keep a Changelog format). Drop noise (typo/chore-only commits) or summarize them.
3. Rewrite each entry in clear user-facing language — what changed for the user, not the internal commit text.
4. Call out breaking changes prominently with a migration note.
5. Prepend the result to `CHANGELOG.md` under a new version heading and date.

Don't invent changes that aren't in the history.
```

## Safety notes

Only include changes actually present in the git range — don't invent entries. Flag breaking changes clearly. Don't expose internal-only details (security specifics, secrets) that shouldn't be public. Edit only CHANGELOG.md.

## Expected output

A Keep-a-Changelog-formatted section grouped by type, user-facing wording, prominent breaking-change notes, prepended to CHANGELOG.md under a dated version heading.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
