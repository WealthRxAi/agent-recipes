# Build a Chrome extension MVP

> You want a working Manifest V3 Chrome extension that does one useful thing on web pages.

| | |
|---|---|
| **ID** | `ship-chrome-extension` |
| **Category** | `ship-mvp` |
| **Best with** | Cursor |

## Prompt

```text
Build a Manifest V3 Chrome extension that: {{WHAT_IT_DOES e.g. highlights and saves selected text}}.

1. Create `manifest.json` (MV3) requesting only the minimum permissions needed — justify each.
2. Implement the content script and/or popup UI and a service worker if needed.
3. Persist data with `chrome.storage` (not localStorage).
4. Add an options/popup page to view or manage saved data.
5. Write a README with exact 'Load unpacked' install steps for testing.
6. Keep it dependency-light; no remote code (MV3 forbids it).

Works by loading unpacked in chrome://extensions.
```

## Safety notes

Request the minimum permissions and justify each — over-broad host permissions are a privacy/security risk and block store review. No remote/eval'd code (MV3 forbids it). Don't exfiltrate page data; keep storage local. Don't hardcode secrets.

## Expected output

A loadable MV3 extension with a minimal-permission manifest, content script/popup, chrome.storage persistence, an options page, and a README with 'Load unpacked' steps.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
