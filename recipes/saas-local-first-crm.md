# Build a local-first CRM

> A solo founder or freelancer wants a private contact + deal tracker that runs locally with no cloud account.

| | |
|---|---|
| **ID** | `saas-local-first-crm` |
| **Category** | `build-a-saas` |
| **Best with** | Claude Code |

## Prompt

```text
Build a local-first CRM that stores everything on disk (SQLite or JSON), no cloud account required.

Entities: Contact (name, email, company, tags, notes), Deal (title, contact, stage, value, next action). Stages: lead -> contacted -> proposal -> won/lost.

1. Scaffold the data model and storage layer with migrations or a versioned schema.
2. Build views: contact list with search, contact detail with deal timeline, and a simple pipeline/kanban by stage.
3. Add import from CSV and export to CSV.
4. Add a 'follow-ups due' list based on each deal's next-action date.
5. Seed with 10 fake contacts and deals. Add tests for stage transitions and CSV round-trip.

Keep all data local. No external API keys.
```

## Safety notes

All data stays local — do not add any external sync or analytics. Treat contact data as private; keep real exports out of git. Validate CSV imports to avoid malformed rows corrupting storage.

## Expected output

A local CRM with contacts, deals, a pipeline view, CSV import/export, a follow-ups list, fake seed data, and tests for stage transitions + CSV round-trip.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
