# Create an investor-ready technical roadmap

> You need a credible technical roadmap to show investors or stakeholders, derived from your product and current code.

| | |
|---|---|
| **ID** | `launch-investor-roadmap` |
| **Category** | `launch-product` |
| **Best with** | Claude Code |

## Prompt

```text
Build an investor-ready technical roadmap for: {{PRODUCT}} (current state: {{WHERE_YOU_ARE}}).

1. Summarize the current architecture and what's already shipped (ground it in the repo if available).
2. Define phases (Now / Next / Later) with concrete milestones, each tied to a business outcome.
3. For each phase: key features, technical work, rough effort, and the main risks + mitigations.
4. Call out scalability, security, and reliability investments and when they're needed.
5. Add a one-slide-style summary and a realistic timeline (quarters, not exact dates).
6. Keep claims honest and assumptions explicit.

Credible over hype.
```

## Safety notes

Keep projections honest — don't overpromise timelines or invent metrics; mark assumptions. Don't expose secrets or sensitive IP if this doc will be shared. Tie technical work to outcomes, not buzzwords.

## Expected output

A roadmap doc: current state, Now/Next/Later phases with milestones tied to outcomes, per-phase effort + risks/mitigations, scalability/security investments, a summary, and a quarter-level timeline with explicit assumptions.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
