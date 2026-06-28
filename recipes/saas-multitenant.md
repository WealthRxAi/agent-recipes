# Add multi-tenant workspaces

> Your single-user app needs teams/workspaces so multiple users share isolated data.

| | |
|---|---|
| **ID** | `saas-multitenant` |
| **Category** | `build-a-saas` |
| **Best with** | Claude Code |

## Prompt

```text
Add multi-tenant workspaces to this app so data is isolated per workspace.

1. Add a `Workspace` and a `Membership` (user, workspace, role: owner/member) model.
2. Every tenant-scoped row gets a `workspace_id`. Write a migration to backfill existing rows into a default workspace.
3. Add middleware that resolves the current workspace and rejects cross-workspace access.
4. Add invite-by-email (token-based, printed to console — no email service) and a workspace switcher in the UI.
5. Audit every existing query to add the workspace filter; list anything you could not scope.
6. Add tests proving user A cannot read or write user B's workspace data.

No paid services.
```

## Safety notes

The critical risk is data leakage across tenants — every tenant-scoped query MUST filter by workspace_id; enumerate any query you can't confidently scope instead of guessing. Run the backfill migration on a branch and back up data first. Authorize role-gated actions server-side.

## Expected output

Workspace + membership models, a backfill migration, workspace-scoping middleware, console-based invites, a switcher, and tests proving cross-tenant isolation.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
