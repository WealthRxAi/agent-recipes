# Turn a screenshot into a working website

> You have an image of a page (a competitor, a mockup, a sketch) and want a real, responsive HTML/CSS page that matches it.

| | |
|---|---|
| **ID** | `ui-screenshot-to-site` |
| **Category** | `design-ui` |
| **Best with** | Claude Code |

## Prompt

```text
Recreate the attached screenshot at {{SCREENSHOT_PATH}} as a responsive website.

1. Describe the layout sections you see (header, hero, features, footer, etc.) before coding.
2. Build it with semantic HTML and modern CSS (fl/ grid). Match layout, spacing, font sizes/weights, and colors as closely as you can.
3. Extract repeated colors/spacing into CSS variables.
4. Make it responsive: verify it looks right at 375px, 768px, and 1280px.
5. Use accessible markup (alt text, labels, contrast) and placeholder images/copy where the screenshot is unclear.

No frameworks unless I ask — plain HTML/CSS (and minimal JS only if needed).
```

## Safety notes

Do not copy trademarked logos, brand assets, or real photos — use placeholders. Don't fabricate real content. Keep it accessible (contrast, alt text). This recreates layout/style, not someone's proprietary assets.

## Expected output

A responsive, accessible HTML/CSS page that closely matches the screenshot across 375/768/1280px, with CSS variables for the palette and placeholders where the image was unclear.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
