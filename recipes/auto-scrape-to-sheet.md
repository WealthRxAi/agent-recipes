# Scrape a public page into a structured CSV

> You need structured data from a public web page turned into a clean CSV, respectfully and locally.

| | |
|---|---|
| **ID** | `auto-scrape-to-sheet` |
| **Category** | `automate-business` |
| **Best with** | Claude Code |

## Prompt

```text
Scrape structured data from {{PUBLIC_URL}} into a CSV.

1. First check the site's robots.txt and terms; if scraping is disallowed, stop and tell me.
2. Fetch the page politely (a single request, a real user-agent, and a delay if paginating).
3. Parse the target fields: {{FIELDS e.g. title, price, link}}. Report the selectors you used.
4. Write `out/data.csv` with a header row; handle missing fields as empty, not crashes.
5. Save the raw HTML locally so re-parsing doesn't re-fetch.
6. Add a `--limit` for testing on a few rows first.

Be a good citizen: low volume, cached, respectful.
```

## Safety notes

Check robots.txt and the site's terms first — stop if scraping is disallowed. Scrape at low volume with delays and caching; never hammer a site (that's abuse/DoS). Don't collect personal data or bypass auth/paywalls. Keep scraped data local.

## Expected output

A polite scraper that respects robots.txt, writes out/data.csv with the requested fields, caches raw HTML, handles missing fields, supports --limit, and reports the selectors used.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
