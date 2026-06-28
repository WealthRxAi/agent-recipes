# Build an email digest script (dry-run safe)

> You want a script that compiles items (RSS, a JSON feed, a file) into a formatted email digest — without actually sending until you're ready.

| | |
|---|---|
| **ID** | `auto-email-digest` |
| **Category** | `automate-business` |
| **Best with** | Gemini CLI |

## Prompt

```text
Build a script that compiles a digest email from {{SOURCE e.g. a list of RSS feeds or items.json}}.

1. Fetch/read the items, dedupe, and sort by date or relevance.
2. Render an email-friendly HTML digest (inline styles) and a plain-text version.
3. DEFAULT TO DRY-RUN: write the digest to `out/digest.html` and print a summary. Only send if `--send` is passed.
4. If `--send` is used, read SMTP config from env (.env.example provided) — never hardcode credentials.
5. Handle a dead/empty source gracefully.
6. Document how to schedule it (cron) without installing it.

Safe by default — no accidental sends.
```

## Safety notes

Default to dry-run so nobody gets accidentally emailed; sending requires an explicit --send flag. Never hardcode SMTP credentials — use env only. Respect recipient consent and anti-spam laws. Honor source rate limits/robots when fetching.

## Expected output

A digest script that defaults to writing out/digest.html (HTML + pltext), dedupes and sorts items, sends only with --send using env-based SMTP, handles empty sources, and documents cron scheduling.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
