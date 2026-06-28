# Add accessible dark mode

> Your app only has a light theme and you want a proper, accessible dark mode with a toggle.

| | |
|---|---|
| **ID** | `ui-dark-mode` |
| **Category** | `design-ui` |
| **Best with** | Gemini CLI |

## Prompt

```text
Add a dark mode to this app.

1. Find hardcoded colors and replace them with CSS variables (or theme tokens) for both light and dark.
2. Add a toggle that respects `prefers-color-scheme` by default and persists the user's choice (localStorage).
3. Avoid pure black on pure white — use tuned neutrals. Verify text/background contrast meets WCAG AA.
4. Handle images, borders, shadows, and focus states in dark mode too.
5. Show me the before/after token map.

No flash of wrong theme on load.
```

## Safety notes

Verify WCAG AA contrast for both themes — dark mode often fails contrast. Prevent the flash-of-incorrect-theme by setting the theme before first paint. Don't break existing light-mode styling. Work on a branch.

## Expected output

A theme-token system, an accessible dark mode meeting WCAG AA contrast, a persistent toggle that respects system preference, no theme flash on load, and a before/after token map.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
