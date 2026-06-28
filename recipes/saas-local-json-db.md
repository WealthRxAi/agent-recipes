# Build a local JSON-database app (no server)

> You want a small app that stores data in a local JSON file so you can prototype with zero infrastructure.

| | |
|---|---|
| **ID** | `saas-local-json-db` |
| **Category** | `build-a-saas` |
| **Best with** | Cursor |

## Prompt

```text
Build a small app that uses a local JSON file as its database, for: {{APP_PURPOSE e.g. tracking habits}}.

1. Create a tiny data layer (`db.js`) with `getAll`, `getById`, `create`, `update`, `remove` that reads/writes `data/db.json` atomically (write to a temp file, then rename).
2. Validate every record against a simple schema before writing.
3. Build a minimal UI (or CLI if I say so) for create/list/edit/delete of {{ENTITY}}.
4. Handle the empty-file and corrupt-file cases gracefully.
5. Add 3 tests for the data layer covering create, update, and a corrupt-file read.

No external database, no ORM, no paid services.
```

## Safety notes

Use atomic writes (temp file + rename) so a crash can't corrupt the JSON. Never store secrets in db.json. Add data/db.json to .gitignore if it will hold real data; commit only a sample.

## Expected output

A working app with an atomic JSON data layer, schema validation, CRUD UI/CLI, graceful corrupt-file handling, and 3 passing data-layer tests.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
