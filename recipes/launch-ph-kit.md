# Create a Product Hunt launch kit

> You're launching on Product Hunt (or similar) and want all the copy assets ready in one pass.

| | |
|---|---|
| **ID** | `launch-ph-kit` |
| **Category** | `launch-product` |
| **Best with** | Claude Code |

## Prompt

```text
Create a Product Hunt launch kit for: {{PRODUCT_ONE_LINER}} (details: {{KEY_DETAILS}}).

Produce a `launch/` folder with:
1. `tagline.md` — 5 tagline options (<= 60 chars).
2. `description.md` — the listing description (what, who, why now).
3. `maker-comment.md` — a first comment from the maker (story + ask for feedback).
4. `gallery-brief.md` — 4-6 gallery image/screenshot ideas with captions.
5. `social.md` — launch-day posts for X/LinkedIn + 3 reply-bait follow-ups.
6. `faq.md` — answers to the 8 likely questions.

Honest, specific, no hype-speak or fake numbers.
```

## Safety notes

Keep all claims truthful — no fabricated user counts, awards, or testimonials. Don't promise features you can't ship at launch. Avoid manipulative engagement bait; keep it genuine.

## Expected output

A launch/ folder: taglines, listing description, maker comment, gallery brief, social posts, and an FAQ — specific, honest, and ready to paste.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
