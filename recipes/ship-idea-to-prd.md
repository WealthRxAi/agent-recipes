# Convert a messy idea into a PRD

> You have a jumble of thoughts and need a clear product requirements doc before building.

| | |
|---|---|
| **ID** | `ship-idea-to-prd` |
| **Category** | `ship-mvp` |
| **Best with** | Claude Code |

## Prompt

```text
Turn these raw notes into a tight PRD:

{{PASTE_MESSY_NOTES}}

Produce a PRD with: Problem, Target user, Goals & non-goals, Core user stories (prioritized P0/P1/P2), Key flows, MVP scope vs. later, Success metrics, Open questions/risks, and a rough milestone plan.

Rules:
1. Ask me up to 5 clarifying questions first if anything critical is ambiguous.
2. Be ruthless about MVP scope — cut anything not needed to validate the core.
3. Don't invent requirements I didn't imply; mark assumptions clearly.
4. Keep it skimmable (headings, bullets, a scope table).
```

## Safety notes

Mark assumptions explicitly and don't invent hard requirements. Ask before guessing on anything that changes scope materially. This is a planning doc — keep proprietary/idea details in your own repo, not a public one.

## Expected output

A skimmable PRD: problem, users, goals/non-goals, prioritized user stories, flows, MVP scope table, success metrics, risks/open questions, and milestones — with assumptions flagged.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
