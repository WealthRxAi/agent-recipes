# Build a full SaaS MVP in one repo

> You have an idea and want a working SaaS skeleton (auth, dashboard, data, deploy config) in a single repo without weeks of setup.

| | |
|---|---|
| **ID** | `saas-mvp-one-repo` |
| **Category** | `build-a-saas` |
| **Best with** | Claude Code |

## Prompt

```text
Build a minimal but real SaaS MVP for: {{ONE_LINE_IDEA}}.

Stack: a single repo, framework {{FRAMEWORK e.g. Next.js / SvelteKit / Express+React}}, local file or SQLite storage (no paid services).

1. Propose the smallest feature set that makes the product usable, then stop and show it to me before coding.
2. Scaffold: landing page, sign-up/login (email + password, hashed), an authenticated dashboard, and one core CRUD entity ({{CORE_ENTITY}}).
3. Persist data in SQLite (or a local JSON file if SQLite is unavailable). No external API keys.
4. Add a seed script with sample data and a `README` with run steps.
5. Add a basic test for the core entity and the auth flow.
6. Make `npm run dev` start everything with one command.

Keep it boring and shippable. No payment integration yet — leave a clearly marked TODO.
```

## Safety notes

Work on a fresh branch. Hash passwords (never store plaintext) and never commit a real secret — use a `.env.example`. Do not add paid SDKs or external API keys. Keep the seed data fake.

## Expected output

A runnable repo: landing + auth + dashboard + one CRUD entity, SQLite/JSON storage, seed script, a passing smoke test, and a README that starts the app with one command.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
