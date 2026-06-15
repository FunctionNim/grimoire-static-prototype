# Phase 14 Repair Notes

## Patch Summary

This repair pass keeps the prototype bounded to the Phase 13 scope while fixing likely developer-handoff issues.

## Files Changed

- `tsconfig.json`
- `package.json`
- `app/node/[id]/page.tsx`
- `app/sophia/page.tsx`
- `app/watcher/page.tsx`
- `docs/phase14-static-prototype-qa-report.md`
- `docs/phase14-qa-results.json`

## Why These Changes Matter

- The app uses `@/` imports, so TypeScript needs a matching path alias.
- The helper code uses `Object.fromEntries`, so ES2020 is safer than ES2017.
- The route prop shapes were patched for a more robust App Router handoff.
- The `qa:smoke` alias makes validation easier to find.

## Preserved Boundaries

- 45 nodes only.
- 96 relationships only.
- Six routes only.
- Local JSON only.
- No database.
- No API.
- No ontology expansion.
