# Create a landing page from product notes

> You have rough notes about a product and want a polished, conversion-focused landing page.

| | |
|---|---|
| **ID** | `ui-landing-from-notes` |
| **Category** | `design-ui` |
| **Best with** | Claude Code |

## Prompt

```text
Turn these product notes into a high-converting landing page:

{{PASTE_PRODUCT_NOTES}}

1. Extract the core value prop, audience, and top 3 benefits. Show me your one-line headline + subhead before building.
2. Structure: hero (headline, subhead, CTA), social-proof slot, 3 benefits, how-it-works (3 steps), FAQ, final CTA, footer.
3. Write punchy, specific copy from the notes — no vague filler, no invented metrics.
4. Build it responsive with semantic HTML/CSS (or {{FRAMEWORK}} if I name one). Accessible and fast.
5. Add a single email-capture form that posts to a placeholder endpoint.

Keep claims honest — don't invent testimonials or numbers.
```

## Safety notes

Never fabricate testimonials, customer logos, or metrics — use clearly-marked placeholders. Keep copy honest. Ensure accessibility (contrast, labels, focus states). Work on a branch.

## Expected output

A responsive, accessible landing page with a clear headline/subhead, benefits, how-it-works, FAQ, CTAs, and an email-capture form — copy grounded in the notes, no fabricated proof.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
