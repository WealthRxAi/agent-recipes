# Generate SEO landing pages

> You want a set of SEO-targeted landing pages for your product's key use cases/keywords.

| | |
|---|---|
| **ID** | `launch-seo-pages` |
| **Category** | `launch-product` |
| **Best with** | Gemini CLI |

## Prompt

```text
Generate SEO landing pages for these use cases/keywords: {{LIST}}.

For each, create an HTML page with:
1. A unique, keyword-aligned <title> and meta description (no stuffing).
2. One clear H1, structured H2s, and genuinely useful content for that use case.
3. Proper semantic HTML, internal links between the pages, and JSON-LD structured data where relevant.
4. A CTA to {{PRIMARY_ACTION}}.
5. Fast, accessible, mobile-friendly markup; descriptive alt text.
6. A simple `sitemap.xml` listing the pages.

Write real, helpful content — not thin or duplicated boilerplate.
```

## Safety notes

No keyword stuffing, cloaking, or doorway/thin pages — those get penalized and hurt users. Each page must offer genuine, distinct value. Keep claims honest. Don't duplicate content across pages.

## Expected output

One useful SEO landing page per keyword (unique title/meta, semantic structure, internal links, JSON-LD, accessible markup, CTA) plus a sitemap.xml — no thin or stuffed content.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
