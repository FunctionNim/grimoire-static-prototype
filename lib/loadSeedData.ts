import nodes from "@/data/seed/nodes.all.json";
import relationships from "@/data/seed/relationships.json";
import type { GrimoireNode, GrimoireRelationship } from "./types";

export function loadSeedData() {
  return {
    nodes: nodes as GrimoireNode[],
    relationships: relationships as GrimoireRelationship[],
  };
}
