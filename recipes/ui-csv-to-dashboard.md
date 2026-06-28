# Turn a CSV into a dashboard

> You have a CSV and want an interactive dashboard with charts and filters — no backend, no paid tools.

| | |
|---|---|
| **ID** | `ui-csv-to-dashboard` |
| **Category** | `design-ui` |
| **Best with** | Codex |

## Prompt

```text
Build a dashboard for the CSV at {{CSV_PATH}}.

1. Read the header and a few rows; infer each column's type. Report the schema you detected.
2. Build a single-page dashboard (plain HTML/CSS/JS, parse CSV in-browser) with: summary KPI cards, 2-3 relevant charts, a filterable/sortable table, and a search box.
3. Use a tiny charting approach (canvas or a single lightweight lib via CDN) — no build step, no paid services.
4. Handle missing/dirty values gracefully.
5. Make it responsive and load the CSV from a local file input so any CSV works.

No backend, no API keys.
```

## Safety notes

Parse everything client-side — don't upload the CSV anywhere. Treat the data as private. Sanitize values before injecting into the DOM to avoid XSS. Handle malformed rows without crashing.

## Expected output

A single-page, client-side dashboard with detected schema, KPI cards, charts, a filterable/searchable table, a file picker for any CSV, and graceful handling of dirty data — no backend.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
