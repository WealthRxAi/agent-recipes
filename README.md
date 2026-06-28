<div align="center">

# 🧑‍🍳 agent-recipes

### The missing manual for AI coding agents.

**Free, copy-paste recipes for Claude Code, Codex, Cursor, Gemini CLI, and any AI coding agent.**

Stop wrestling with vague prompts. Copy a recipe, paste it into your agent, ship the thing.

[![validate](https://github.com/agent-recipes/agent-recipes/actions/workflows/validate.yml/badge.svg)](https://github.com/agent-recipes/agent-recipes/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-7c93ff.svg)](LICENSE)
![Recipes](https://img.shields.io/badge/recipes-50-51e1b0)
![Dependencies](https://img.shields.io/badge/dependencies-0-success)
![No API key](https://img.shields.io/badge/API%20key-not%20required-success)

[Browse recipes](recipes/README.md) · [Use the CLI](#-30-second-quickstart) · [Open the web app](site/index.html) · [Contribute](CONTRIBUTING.md)

</div>

---

## Why this exists

AI coding agents are incredible — *when you know exactly what to ask*. The difference between "make me an app" and a precise, constraint-rich prompt is the difference between slop and shipping.

Most people relearn the same prompts over and over. **agent-recipes** is a free, open library of battle-tested prompts that already encode the constraints, the safety rails, and the expected output — so you skip straight to results.

- ✅ **Zero cost.** No accounts, no paid APIs, no API keys.
- ✅ **Zero dependencies.** The CLI and site are plain Node + plain HTML.
- ✅ **Copy-paste ready.** Each recipe is a real prompt with `{{PLACEHOLDERS}}` for your specifics.
- ✅ **Safety built in.** Every recipe says what the agent should *not* do.
- ✅ **Works with any agent.** Claude Code, Codex, Cursor, Gemini CLI, or whatever you use next.

> **Good agents need good instructions.** A capable model with a sloppy prompt produces sloppy work. The same model with a precise, constrained prompt produces something you can ship. These recipes are the precise, constrained prompts.

---

## ⚡ 30-second quickstart

No install. No dependencies. Just clone and run.

```bash
git clone https://github.com/agent-recipes/agent-recipes
cd agent-recipes

# List all 50 recipes
node bin/agent-recipes.js list

# Search for what you need
node bin/agent-recipes.js search "landing page"

# Print a full recipe (use case + prompt + safety + expected output)
node bin/agent-recipes.js show ui-landing-from-notes
```

Then copy the **PROMPT** block, paste it into your agent, swap the `{{PLACEHOLDERS}}`, and go.

### CLI examples

```bash
node bin/agent-recipes.js list                       # everything
node bin/agent-recipes.js list --category fix-bugs   # one category
node bin/agent-recipes.js search "tests"             # full-text search
node bin/agent-recipes.js show analyze-security-audit
```

---

## 🌐 Browse in your browser

A tiny static site with instant local search and one-click copy — no server, no tracking, no build step.

```bash
npm run build        # generates site/recipes.js
# then just open site/index.html in your browser
# (or serve it: npx serve site)
```

Type to filter across 50 recipes, click a category chip, hit **Copy prompt**. That's it.

---

## 📚 Recipe categories

| Category | What it's for |
|---|---|
| 🏗️ `build-a-saas` | Stand up real apps: SaaS MVPs, auth, multi-tenant, local-first CRM |
| 🐛 `fix-bugs` | Clear TypeScript errors, green the test suite, kill flaky tests, find root causes |
| ♻️ `refactor-code` | Production-readiness, module extraction, strict types, dedupe |
| 🎨 `design-ui` | Screenshot → site, screenshot → React, landing pages, dashboards, dark mode |
| 🧪 `write-tests` | Missing tests, E2E with Playwright, coverage, regression tests, contract tests |
| 🚀 `ship-mvp` | Idea → PRD, waitlist, Chrome extension, CLI tool, weekend MVP |
| ✍️ `create-content` | Docs from code, changelogs, YouTube pipelines, n8n docs, blog from PR |
| 🤖 `automate-business` | Lead dashboards, CSV reports, invoices, email digests, polite scraping |
| 🔍 `analyze-repo` | Read-only security audits, TODO → issues, codebase maps, dead-code hunts |
| 📣 `launch-product` | Investor roadmaps, launch-ready READMEs, Product Hunt kits, demo scripts |

### A few highlights

| Recipe | ID | Best with |
|---|---|---|
| Build a full SaaS MVP in one repo | `saas-mvp-one-repo` | Claude Code |
| Fix TypeScript errors until clean | `fix-ts-errors-clean` | Codex |
| Turn a screenshot into a working website | `ui-screenshot-to-site` | Claude Code |
| Turn a Figma-like screenshot into React components | `ui-screenshot-to-react` | Cursor |
| Create a landing page from product notes | `ui-landing-from-notes` | Claude Code |
| Audit repo security without changing files | `analyze-security-audit` | Claude Code |
| Generate GitHub issues from TODOs | `analyze-issues-from-todos` | Codex |
| Convert a messy idea into a PRD | `ship-idea-to-prd` | Claude Code |
| Create a Stripe-free waitlist MVP | `ship-stripe-free-waitlist` | Claude Code |
| Build a lead-generation dashboard | `auto-lead-gen-dashboard` | Claude Code |

➡️ **[See all 50 recipes →](recipes/README.md)**

---

## 🍳 Three full recipes (so you know what you're getting)

### 1. Turn a screenshot into a working website — `ui-screenshot-to-site`

> You have an image of a page (a competitor, a mockup, a sketch) and want a real, responsive HTML/CSS page that matches it.

**Prompt:**

```text
Recreate the attached screenshot at {{SCREENSHOT_PATH}} as a responsive website.

1. Describe the layout sections you see (header, hero, features, footer, etc.) before coding.
2. Build it with semantic HTML and modern CSS (flex/grid). Match layout, spacing, font sizes/weights, and colors as closely as you can.
3. Extract repeated colors/spacing into CSS variables.
4. Make it responsive: verify it looks right at 375px, 768px, and 1280px.
5. Use accessible markup (alt text, labels, contrast) and placeholder images/copy where the screenshot is unclear.

No frameworks unless I ask — plain HTML/CSS (and minimal JS only if needed).
```

**Safety notes:** Don't copy trademarked logos, brand assets, or real photos — use placeholders. Keep it accessible (contrast, alt text). This recreates layout/style, not someone's proprietary assets.

**Expected output:** A responsive, accessible HTML/CSS page that closely matches the screenshot across 375/768/1280px, with CSS variables for the palette and placeholders where the image was unclear.

---

### 2. Audit repo security without changing files — `analyze-security-audit`

> You want a security review of a repo but must not let the agent change anything.

**Prompt:**

```text
Perform a READ-ONLY security audit of this repository. Do NOT edit, create, move, or delete any file — produce a report only.

1. Scan for hardcoded secrets, API keys, and tokens.
2. Check dependencies for known-risky or outdated packages.
3. Look for injection risks (SQL, command, XSS), unsafe deserialization, and missing input validation.
4. Review auth/session handling and access control.
5. Check for secrets or sensitive files committed to git history.

For each finding: severity (High/Med/Low), file:line, why it matters, and a suggested fix. End with a prioritized top-5 list.
```

**Safety notes:** READ-ONLY — make zero file changes and run no destructive or network-mutating commands. Redact any discovered secret. This is a first-pass review, not a substitute for a professional pentest.

**Expected output:** A markdown report grouped by severity with file:line references and fixes, plus a prioritized top-5 — and zero changes to the working tree.

---

### 3. Create a landing page from product notes — `ui-landing-from-notes`

> You have rough notes about a product and want a polished, conversion-focused landing page.

**Prompt:**

```text
Turn these product notes into a high-converting landing page:

{{PASTE_PRODUCT_NOTES}}

1. Extract the core value prop, audience, and top 3 benefits. Show me your one-line headline + subhead before building.
2. Structure: hero (headline, subhead, CTA), social-proof slot, 3 benefits, how-it-works (3 steps), FAQ, final CTA, footer.
3. Write punchy, specific copy from the notes — no vague filler, no invented metrics.
4. Build it responsive with semantic HTML/CSS. Accessible and fast.
5. Add a single email-capture form that posts to a placeholder endpoint.

Keep claims honest — don't invent testimonials or numbers.
```

**Safety notes:** Never fabricate testimonials, customer logos, or metrics — use clearly-marked placeholders. Ensure accessibility (contrast, labels, focus states).

**Expected output:** A responsive, accessible landing page with a clear headline/subhead, benefits, how-it-works, FAQ, CTAs, and an email-capture form — copy grounded in the notes, no fabricated proof.

---

## 🤝 Contribute a recipe

The library is only as good as the community makes it. Got a prompt that consistently works? Add it.

1. Add your recipe to a `data/part-*.json` file (schema in [CONTRIBUTING.md](CONTRIBUTING.md)).
2. Run `npm run build && npm run validate`.
3. Open a PR.

Good recipes are **specific, copy-paste ready, honest, and safe.** That's the whole bar. → **[Contributing guide](CONTRIBUTING.md)**

---

## ⭐ If this saved you time

A star helps other builders find it — and tells us which recipes to add next. No pop-ups, no newsletter, no catch. If a recipe shipped your thing faster, that's the whole reason this exists. Drop a star and pass it on. 🙏

---

## 🗺️ Roadmap

- [ ] **100 recipes** across all categories
- [ ] **Per-agent variants** (the same goal tuned for Claude Code vs. Cursor vs. Gemini CLI)
- [ ] **`npx agent-recipes`** so there's nothing to clone
- [ ] **Recipe ratings** so the best prompts rise to the top
- [ ] **Tags & combos** (chain recipes into workflows)
- [ ] **Hosted site** with shareable recipe links
- [ ] **Localized recipes** (i18n)

Want one of these? [Open an issue](.github/ISSUE_TEMPLATE/recipe_request.md) or send a PR.

---

## 📂 Project structure

```
agent-recipes/
├─ bin/agent-recipes.js        # zero-dependency CLI (list / search / show)
├─ data/part-*.json            # source of truth for recipes (edit these)
├─ recipes.json                # generated searchable index
├─ recipes/                    # generated per-recipe markdown pages
├─ site/index.html             # static browser app (local search + copy)
├─ scripts/build.js            # regenerates recipes.json + markdown + site data
├─ scripts/validate-recipes.js # schema/uniqueness validation (CI)
└─ .github/workflows/validate.yml
```

---

<div align="center">

**Made by builders, for builders.** MIT licensed — use it, fork it, ship with it.

If good agents need good instructions, consider this the cookbook.

</div>
