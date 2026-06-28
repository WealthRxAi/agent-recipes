# Add email + password auth to an app

> An existing app needs real sign-up/login without paying for an auth provider.

| | |
|---|---|
| **ID** | `saas-auth-starter` |
| **Category** | `build-a-saas` |
| **Best with** | Codex |

## Prompt

```text
Add email + password authentication to this app using only open-source libraries.

1. Detect the framework and existing routes first; reuse the project's conventions.
2. Add sign-up, login, logout, and a password-reset stub (token printed to console for now, no email service).
3. Hash passwords with bcrypt/argon2. Store users in the existing DB or SQLite.
4. Issue an HTTP-only, same-site session cookie or signed JWT; protect at least one route.
5. Add server-side validation (email format, min password length) and rate-limit login attempts.
6. Add tests: successful login, wrong password rejected, protected route blocks anonymous users.

Do not add a paid auth provider.
```

## Safety notes

Never store plaintext passwords; use a vetted hashing library. Use HTTP-only, secure, same-site cookies. Put the session/JWT secret in env (.env.example only). Don't log credentials or tokens. Rate-limit auth endpoints.

## Expected output

Working sign-up/login/logout with hashed passwords, a protected route, server-side validation, login rate limiting, and 3 passing auth tests.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
