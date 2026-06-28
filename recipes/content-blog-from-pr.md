# Turn a merged PR into a blog post

> You shipped something good and want an engineering blog post explaining it, drawn from the actual PR/diff.

| | |
|---|---|
| **ID** | `content-blog-from-pr` |
| **Category** | `create-content` |
| **Best with** | Cursor |

## Prompt

```text
Write an engineering blog post based on this merged PR: {{PR_URL_OR_DIFF}}.

1. Read the diff and PR description to understand the problem, the approach, and the trade-offs.
2. Draft a post: hook, the problem, why it mattered, the approach (with a real code snippet from the diff), trade-offs considered, and the result.
3. Keep it technical and specific — pull concrete details from the actual change.
4. Add a short TL;DR at top and a 'what's next' at the end.
5. Suggest 3 title options and a 1-line social blurb.

Use only what's in the PR; mark anything you inferred.
```

## Safety notes

Use real details from the diff; mark inferences and don't overstate impact. Don't leak internal infra details, secrets, customer names, or unannounced plans. Code snippets should be the public-safe parts of the diff.

## Expected output

A technical blog post (TL;DR, problem, approach with a real snippet, trade-offs, result, what's next), 3 title options, and a social blurb — grounded in the actual PR.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
