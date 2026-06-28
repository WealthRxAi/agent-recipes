# Build a lead-generation dashboard

> You have leads in a CSV/JSON and want a local dashboard to score, filter, and track outreach — no CRM subscription.

| | |
|---|---|
| **ID** | `auto-lead-gen-dashboard` |
| **Category** | `automate-business` |
| **Best with** | Claude Code |

## Prompt

```text
Build a local lead-generation dashboard from {{LEADS_FILE (CSV/JSON)}}.

1. Load leads (name, company, email, source, status). Detect and report the schema.
2. Add a simple lead score (configurable weights, e.g. has-email + target-industry + company-size) and sort by it.
3. Dashboard views: KPI cards (total, by status, by source), a filterable/sortable table, and an outreach status toggle (new -> contacted -> replied -> won/lost) persisted locally.
4. Export the filtered view to CSV.
5. Keep everything local (client-side parse or a tiny local server). No paid CRM/API.

Handle messy/missing fields gracefully.
```

## Safety notes

Treat lead data as private PII — process locally, keep data files out of git, and never send it to third-party services. Respect anti-spam laws for any outreach (this tool only tracks, it doesn't send). Sanitize values before rendering (XSS).

## Expected output

A local dashboard with detected schema, a configurable lead score, KPI cards, a filterable table, a persisted outreach-status workflow, and CSV export — all offline.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
