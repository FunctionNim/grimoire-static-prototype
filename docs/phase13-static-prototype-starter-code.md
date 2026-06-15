# Phase 13 — Static Prototype Starter Code

Generated: 2026-06-15T03:58:02

## Purpose

Convert the Phase 12 build plan into actual starter code files for the six-screen local JSON prototype.

## Included Build

- Next.js App Router starter shape.
- Local JSON seed data from Phase 9.
- Six routes.
- Fourteen components.
- TypeScript helper functions.
- Smoke test script.
- Standalone HTML preview.

## Locked Routes

| Route | Screen |
|---|---|
| `/` | Blue Start Menu |
| `/road` | Color Road |
| `/node/[id]` | Node Detail |
| `/sophia` | Sophia Panel |
| `/watcher` | Watcher Panel |
| `/gratitude` | Blue Gratitude Exit |

## First Test Node

`fn_stone`

## Local Data

- `data/seed/nodes.all.json`
- `data/seed/relationships.json`

## Smoke Test Checks

- 45 nodes.
- 96 relationships.
- six required routes exist.
- no broken relationship links.
- all collapse nodes have restoration coverage.
- all required Function nodes are present.

## Next Required Action

Run the static prototype locally, then fix any TypeScript, layout, or navigation issues before adding database integration.
