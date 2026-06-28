# Automate a weekly CSV report

> You manually summarize a CSV every week and want a script that produces the report in one command.

| | |
|---|---|
| **ID** | `auto-csv-report` |
| **Category** | `automate-business` |
| **Best with** | Codex |

## Prompt

```text
Write a script that turns {{CSV_PATH}} into a weekly summary report.

1. Read the CSV; detect columns and types; report the schema.
2. Compute the metrics I care about: {{METRICS e.g. totals, week-over-week change, top N by X}}.
3. Output a readable `report.md` (and optionally a small HTML version) with tables and a short narrative summary of notable changes.
4. Make the date window a parameter (default: last 7 days) and handle empty/missing data.
5. Add a `--dry-run` that prints to stdout without writing files.
6. Document how to schedule it (cron example) — but don't install anything.

Deterministic and idempotent.
```

## Safety notes

Don't auto-send the report anywhere or install cron jobs — just generate the file and document scheduling. Treat the data as private (keep inputs/outputs out of git if sensitive). Handle missing data without crashing or producing misleading numbers.

## Expected output

A script that produces report.md (and optional HTML) with the requested metrics, a parameterized date window, --dry-run support, graceful empty-data handling, and documented (not installed) cron scheduling.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
