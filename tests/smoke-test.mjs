import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const nodes = JSON.parse(fs.readFileSync(path.join(root, "data/seed/nodes.all.json"), "utf8"));
const relationships = JSON.parse(fs.readFileSync(path.join(root, "data/seed/relationships.json"), "utf8"));

const requiredRoutes = [
  "app/page.tsx",
  "app/road/page.tsx",
  "app/node/[id]/page.tsx",
  "app/sophia/page.tsx",
  "app/watcher/page.tsx",
  "app/gratitude/page.tsx",
  "app/abel-symbols/page.tsx",
];

const requiredAbelSymbolFiles = [
  "data/abelTier0Symbols.ts",
  "components/AbelTier0SymbolGrid.tsx",
];

const nodeIds = new Set(nodes.map((node) => node.id));
const missingRoutes = requiredRoutes.filter((route) => !fs.existsSync(path.join(root, route)));
const missingAbelSymbolFiles = requiredAbelSymbolFiles.filter((file) => !fs.existsSync(path.join(root, file)));
const brokenRelationships = relationships.filter(
  (relationship) => !nodeIds.has(relationship.source) || !nodeIds.has(relationship.target)
);

const collapseNodes = nodes.filter((node) => node.type === "Collapse");
const restoredCollapseIds = new Set(
  relationships
    .filter((relationship) => relationship.type === "restored_by")
    .map((relationship) => relationship.source)
);
const orphanCollapses = collapseNodes.filter((node) => !restoredCollapseIds.has(node.id));

const expectedColorOrder = [
  "fn_stone",
  "fn_black",
  "fn_red",
  "fn_white",
  "fn_gold",
  "fn_brown",
  "fn_pink",
  "fn_green",
  "fn_purple",
  "fn_blue",
];

const functionIds = nodes
  .filter((node) => node.type === "Function")
  .map((node) => node.id);

const missingFunctions = expectedColorOrder.filter((id) => !functionIds.includes(id));
const symbolRegistryPath = path.join(root, "data/abelTier0Symbols.ts");
const symbolRegistry = fs.existsSync(symbolRegistryPath)
  ? fs.readFileSync(symbolRegistryPath, "utf8")
  : "";
const abelTier0SymbolCount = (symbolRegistry.match(/id: "/g) ?? []).length;

const failures = [];

if (nodes.length !== 45) failures.push(`Expected 45 nodes, found ${nodes.length}.`);
if (relationships.length !== 96) failures.push(`Expected 96 relationships, found ${relationships.length}.`);
if (missingRoutes.length) failures.push(`Missing routes: ${missingRoutes.join(", ")}`);
if (missingAbelSymbolFiles.length) failures.push(`Missing Abel symbol files: ${missingAbelSymbolFiles.join(", ")}`);
if (brokenRelationships.length) failures.push(`Broken relationships: ${brokenRelationships.length}`);
if (orphanCollapses.length) failures.push(`Orphan collapse nodes: ${orphanCollapses.map((node) => node.id).join(", ")}`);
if (missingFunctions.length) failures.push(`Missing required Function nodes: ${missingFunctions.join(", ")}`);
if (abelTier0SymbolCount !== 24) failures.push(`Expected 24 Abel Tier 0 symbols, found ${abelTier0SymbolCount}.`);

if (failures.length) {
  console.error("Smoke test failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Smoke test passed.");
console.log(`Nodes: ${nodes.length}`);
console.log(`Relationships: ${relationships.length}`);
console.log("Required routes exist.");
console.log("All collapse nodes have restoration coverage.");
console.log(`Abel Tier 0 symbols: ${abelTier0SymbolCount}`);
