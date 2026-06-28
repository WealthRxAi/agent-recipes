# Build a local invoice generator

> A freelancer wants to generate clean PDF/HTML invoices from a simple data file, locally.

| | |
|---|---|
| **ID** | `auto-invoice-generator` |
| **Category** | `automate-business` |
| **Best with** | Cursor |

## Prompt

```text
Build a local invoice generator.

1. Define an invoice as a small JSON/YAML file: from, to, line items (desc, qty, unit price), tax rate, notes, due date.
2. Compute subtotals, tax, and total correctly (watch rounding — use integer cents).
3. Render a clean, printable HTML invoice (and a PDF if a zero-cost local method is available; otherwise document 'print to PDF').
4. Auto-generate sequential invoice numbers and persist the counter locally.
5. Support multiple invoices and a simple list/index page.
6. Include a sample invoice and a README.

No paid services; everything runs locally.
```

## Safety notes

Use integer cents for money math to avoid floating-point rounding errors. Keep real client/financial data out of git. Don't hardcode tax logic as legal advice — make rates configurable and note the user is responsible for compliance.

## Expected output

A local invoice generator: data-file input, correct cent-based math, printable HTML (PDF or documented print-to-PDF), sequential numbering, an index page, a sample invoice, and a README.

---

_Part of [agent-recipes](../README.md) — free copy-paste recipes for AI coding agents._
