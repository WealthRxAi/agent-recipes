# Recipes index

50 recipes. Browse below, or use the CLI:

```bash
node bin/agent-recipes.js list
node bin/agent-recipes.js show <id>
```

## analyze-repo

| Recipe | ID | Best with |
|---|---|---|
| [Map an unfamiliar codebase](./analyze-architecture-map.md) | `analyze-architecture-map` | Gemini CLI |
| [Find dead code and unused dependencies](./analyze-dead-code.md) | `analyze-dead-code` | Cursor |
| [Generate GitHub issues from TODOs](./analyze-issues-from-todos.md) | `analyze-issues-from-todos` | Codex |
| [Generate a contributor onboarding guide](./analyze-onboarding-guide.md) | `analyze-onboarding-guide` | Claude Code |
| [Audit repo security without changing files](./analyze-security-audit.md) | `analyze-security-audit` | Claude Code |

## automate-business

| Recipe | ID | Best with |
|---|---|---|
| [Automate a weekly CSV report](./auto-csv-report.md) | `auto-csv-report` | Codex |
| [Build an email digest script (dry-run safe)](./auto-email-digest.md) | `auto-email-digest` | Gemini CLI |
| [Build a local invoice generator](./auto-invoice-generator.md) | `auto-invoice-generator` | Cursor |
| [Build a lead-generation dashboard](./auto-lead-gen-dashboard.md) | `auto-lead-gen-dashboard` | Claude Code |
| [Scrape a public page into a structured CSV](./auto-scrape-to-sheet.md) | `auto-scrape-to-sheet` | Claude Code |

## build-a-saas

| Recipe | ID | Best with |
|---|---|---|
| [Add email + password auth to an app](./saas-auth-starter.md) | `saas-auth-starter` | Codex |
| [Build a local-first CRM](./saas-local-first-crm.md) | `saas-local-first-crm` | Claude Code |
| [Build a local JSON-database app (no server)](./saas-local-json-db.md) | `saas-local-json-db` | Cursor |
| [Add multi-tenant workspaces](./saas-multitenant.md) | `saas-multitenant` | Claude Code |
| [Build a full SaaS MVP in one repo](./saas-mvp-one-repo.md) | `saas-mvp-one-repo` | Claude Code |

## create-content

| Recipe | ID | Best with |
|---|---|---|
| [Turn a merged PR into a blog post](./content-blog-from-pr.md) | `content-blog-from-pr` | Cursor |
| [Generate a release changelog from git history](./content-changelog.md) | `content-changelog` | Codex |
| [Create docs from a codebase](./content-docs-from-code.md) | `content-docs-from-code` | Gemini CLI |
| [Create n8n workflow documentation](./content-n8n-workflow-docs.md) | `content-n8n-workflow-docs` | Claude Code |
| [Create a YouTube automation pipeline](./content-youtube-pipeline.md) | `content-youtube-pipeline` | Claude Code |

## design-ui

| Recipe | ID | Best with |
|---|---|---|
| [Turn a CSV into a dashboard](./ui-csv-to-dashboard.md) | `ui-csv-to-dashboard` | Codex |
| [Add accessible dark mode](./ui-dark-mode.md) | `ui-dark-mode` | Gemini CLI |
| [Create a landing page from product notes](./ui-landing-from-notes.md) | `ui-landing-from-notes` | Claude Code |
| [Turn a Figma-like screenshot into React components](./ui-screenshot-to-react.md) | `ui-screenshot-to-react` | Cursor |
| [Turn a screenshot into a working website](./ui-screenshot-to-site.md) | `ui-screenshot-to-site` | Claude Code |

## fix-bugs

| Recipe | ID | Best with |
|---|---|---|
| [Make the failing test suite green](./fix-failing-tests.md) | `fix-failing-tests` | Claude Code |
| [Diagnose and stabilize flaky tests](./fix-flaky-tests.md) | `fix-flaky-tests` | Cursor |
| [Hunt a performance regression](./fix-perf-regression.md) | `fix-perf-regression` | Claude Code |
| [Find root cause from a stack trace](./fix-prod-stacktrace.md) | `fix-prod-stacktrace` | Gemini CLI |
| [Fix TypeScript errors until clean](./fix-ts-errors-clean.md) | `fix-ts-errors-clean` | Codex |

## launch-product

| Recipe | ID | Best with |
|---|---|---|
| [Write a demo video script + storyboard](./launch-demo-script.md) | `launch-demo-script` | Codex |
| [Create an investor-ready technical roadmap](./launch-investor-roadmap.md) | `launch-investor-roadmap` | Claude Code |
| [Create a Product Hunt launch kit](./launch-ph-kit.md) | `launch-ph-kit` | Claude Code |
| [Write a launch-ready README](./launch-readme-polish.md) | `launch-readme-polish` | Cursor |
| [Generate SEO landing pages](./launch-seo-pages.md) | `launch-seo-pages` | Gemini CLI |

## refactor-code

| Recipe | ID | Best with |
|---|---|---|
| [Modernize callbacks to async/await](./refactor-async-await.md) | `refactor-async-await` | Gemini CLI |
| [Remove duplicate code safely](./refactor-dedupe.md) | `refactor-dedupe` | Claude Code |
| [Split a god file into clean modules](./refactor-extract-modules.md) | `refactor-extract-modules` | Cursor |
| [Make a project production-ready](./refactor-prod-ready.md) | `refactor-prod-ready` | Claude Code |
| [Migrate a codebase to strict TypeScript](./refactor-types-strict.md) | `refactor-types-strict` | Codex |

## ship-mvp

| Recipe | ID | Best with |
|---|---|---|
| [Build a Chrome extension MVP](./ship-chrome-extension.md) | `ship-chrome-extension` | Cursor |
| [Ship a zero-dependency CLI tool](./ship-cli-tool.md) | `ship-cli-tool` | Codex |
| [Convert a messy idea into a PRD](./ship-idea-to-prd.md) | `ship-idea-to-prd` | Claude Code |
| [Create a Stripe-free waitlist MVP](./ship-stripe-free-waitlist.md) | `ship-stripe-free-waitlist` | Claude Code |
| [Plan and scaffold a weekend MVP](./ship-weekend-mvp.md) | `ship-weekend-mvp` | Claude Code |

## write-tests

| Recipe | ID | Best with |
|---|---|---|
| [Add API contract tests](./test-api-contract.md) | `test-api-contract` | Gemini CLI |
| [Raise coverage to 80% on critical paths](./test-coverage-80.md) | `test-coverage-80` | Cursor |
| [Add end-to-end tests with Playwright](./test-e2e-playwright.md) | `test-e2e-playwright` | Codex |
| [Write a regression test from a bug report](./test-from-bug.md) | `test-from-bug` | Claude Code |
| [Write the missing tests](./test-write-missing.md) | `test-write-missing` | Claude Code |

---

_Generated by `scripts/build.js`. Do not edit by hand._
