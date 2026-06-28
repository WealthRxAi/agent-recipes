# Create a Stripe-free waitlist MVP

> You want to validate demand with a waitlist landing page before building the product — no payments, no paid services.

| | |
|---|---|
| **ID** | `ship-stripe-free-waitlist` |
| **Category** | `ship-mvp` |
| **Best with** | Claude Code |

## Prompt

```text
Build a waitlist MVP for: {{PRODUCT_ONE_LINER}}.

1. A landing page: clear headline, the problem, what they're signing up for, and an email form.
2. Store signups locally (SQLite or a JSON file) with email + timestamp + optional referral source. Dedupe emails.
3. A simple confirmation state after signup and a basic 'X people waiting' counter.
4. An admin/export route or script to dump signups to CSV.
5. Validate emails server-side; protect against obvious spam (honeypot field, basic rate limit).

No Stripe, no email provider, no paid APIs — just capture and store.
```

## Safety notes

Store emails responsibly: keep the signups file out of git, validate input, and add a basic anti-spam honeypot/rate limit. Don't email anyone without consent. Use .env.example for any config. No paid services.

## Expected output

A waitlist landing page, local deduped signup storage with timestamps, a confirmation state and counter, a CSV export, server-side email validation, and basic spam protection — no payments.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
