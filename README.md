# Grimoire Static Prototype

Six-screen local JSON prototype for the Grimoire Version 1.0 doorway.

## GitHub Runtime Gate

This repo includes:

```text
.github/workflows/phase16-runtime-gate.yml
```

It runs:

```bash
npm ci
npm run qa:smoke
npm run build
```

## Required first browser path

```text
/ → /road → /node/fn_stone → /sophia?node=fn_stone → /watcher?node=fn_stone → /gratitude
```

---

# Grimoire Phase 13 — Static Prototype Starter Code

Generated: 2026-06-15T03:58:02

This is the first static starter code packet for the six-screen local JSON prototype.

## What is included

- Next.js-style App Router starter code.
- Six routes:
  - `/`
  - `/road`
  - `/node/[id]`
  - `/sophia`
  - `/watcher`
  - `/gratitude`
- 14 reusable components.
- Local JSON seed copied from Phase 9.
- Local lookup helpers.
- Restoration route helpers.
- Smoke test script.
- Standalone preview HTML.

## Run as Next.js app

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Run smoke test

```bash
npm run smoke
```

## Standalone preview

Open:

```text
preview/index.html
```

This preview does not require Next.js. It is a simple static HTML proof of the six-screen flow.

## Required first demo path

Blue Start Menu → Color Road → Stone Node Detail → Sophia Panel → Watcher Panel → Blue Gratitude Exit

## Boundary

No database.
No API.
No ontology expansion.
No extra screens until the six-screen prototype passes acceptance.


---

# Phase 14 Repair Layer

This packet has been QA-reviewed and patched.

## Run QA

```bash
npm run qa:smoke
```

## Main repaired files

- `tsconfig.json`
- `app/node/[id]/page.tsx`
- `app/sophia/page.tsx`
- `app/watcher/page.tsx`

See:

- `docs/phase14-static-prototype-qa-report.md`
- `docs/phase14-repair-notes.md`
