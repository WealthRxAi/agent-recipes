# Turn a Figma-like screenshot into React components

> You have a design screenshot and want clean, reusable React + Tailwind components that match it.

| | |
|---|---|
| **ID** | `ui-screenshot-to-react` |
| **Category** | `design-ui` |
| **Best with** | Cursor |

## Prompt

```text
Look at the screenshot at {{SCREENSHOT_PATH}} and rebuild it as React + Tailwind.

1. Break the screen into a component tree and list it first.
2. Implement each component in its own file under `src/components/`.
3. Match spacing, font sizes, weights, and colors closely; extract repeated values into Tailwind theme tokens.
4. Use semantic, accessible markup (buttons are <button>, inputs have labels).
5. Pass copy/data via props — don't hardcode text inside components.
6. Add a `Showcase` page that renders every component.

Build from primitives — don't pull in a UI kit.
```

## Safety notes

Do not invent real user data, logos, or trademarked assets — use placeholders. Keep components presentational/pure. Work on a branch.

## Expected output

A component tree, one file per component under src/components/, a Showcase page, accessible markup, and a result that closely matches the screenshot.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
