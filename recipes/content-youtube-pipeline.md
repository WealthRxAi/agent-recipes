# Create a YouTube automation pipeline

> You want a repeatable, mostly-local pipeline that turns a topic into a script, title, description, chapters, and thumbnail brief — without paid APIs.

| | |
|---|---|
| **ID** | `content-youtube-pipeline` |
| **Category** | `create-content` |
| **Best with** | Claude Code |

## Prompt

```text
Build a local content pipeline that turns a topic into a ready-to-record YouTube package.

Input: a topic + target length in `input.md`.
Produce, as files in `out/`:
1. `script.md` — a hook, structured sections, and a CTA, timed to the target length.
2. `title-options.md` — 10 title variations (curiosity + clarity, no clickbait lies).
3. `description.md` — SEO description, chapters/timestamps, and a links section.
4. `thumbnail-brief.md` — 3 thumbnail concepts (text overlay + visual).
5. `tags.md` — relevant tags/keywords.

Rules:
- Pure local files; do NOT call the YouTube API or upload anything. If you add an upload step, leave it as a documented dry-run stub.
- Don't invent fake stats or fake citations.
```

## Safety notes

No uploads or YouTube API calls — keep it local; any publish step must be a clearly-marked dry-run stub with no hardcoded credentials. No clickbait that misrepresents content. Don't fabricate statistics or sources.

## Expected output

An `out/` folder with script.md, title-options.md, description.md (with chapters), thumbnail-brief.md, and tags.md — all generated locally, no uploads, no fabricated stats.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
