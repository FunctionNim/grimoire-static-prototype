# GitHub Handoff — Grimoire Static Prototype

Generated: 2026-06-15T04:14:57

## Recommended repository

`FunctionNim/grimoire-static-prototype`

## Purpose

This repository should hold the six-screen static UI prototype, separate from `FunctionNim/fotn-deterministic-runtime`.

The runtime repo is the consequence engine.
This repo is the entry/UI prototype.

## Included workflow

`.github/workflows/phase16-runtime-gate.yml`

The workflow runs:

```bash
npm ci
npm run qa:smoke
npm run build
```

## Required browser path after CI passes

```text
/ → /road → /node/fn_stone → /sophia?node=fn_stone → /watcher?node=fn_stone → /gratitude
```

## Phase 16 pass gate

Advance only when:

- GitHub Actions passes.
- Browser path passes locally or via Playwright.
- Seed remains 45 nodes.
- Relationships remain 96.
- No database dependency is introduced.
- No new ontology nodes are added.

## Next expansion after pass

1. Help Layer behavior.
2. Accessibility/keyboard pass.
3. Responsive layout pass.
4. First card-frame mockup using existing nodes.
5. Still no new ontology nodes.
