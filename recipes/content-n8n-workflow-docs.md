# Create n8n workflow documentation

> You have n8n workflow JSON exports and need clear human-readable docs for your team.

| | |
|---|---|
| **ID** | `content-n8n-workflow-docs` |
| **Category** | `create-content` |
| **Best with** | Claude Code |

## Prompt

```text
Document the n8n workflow(s) exported in {{WORKFLOW_JSON_PATH}}.

1. Parse the workflow JSON: list nodes, their types, and how they connect (trigger -> ... -> output).
2. For each workflow, write: purpose, trigger, a step-by-step of what each node does, external services touched, and required credentials (by name only).
3. Produce a simple flow diagram in Mermaid.
4. Note error-handling branches and any ret/ rate limits.
5. Add a 'how to import and configure' section and a list of env/credentials the operator must set.

Describe what's actually in the JSON — don't invent nodes.
```

## Safety notes

Reference credentials by name only — never copy secret values out of the workflow JSON into docs. Describe only nodes that exist in the export. Keep the exported JSON (which may contain secrets) out of public repos.

## Expected output

Per-workflow docs with purpose, trigger, node-by-node steps, a Mermaid diagram, external services + credential names, error handling, and import/config instructions.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
