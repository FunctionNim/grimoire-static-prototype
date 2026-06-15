import type { GrimoireNode, GrimoireRelationship, RestorationRoute } from "./types";
import { buildNodeById } from "./nodeLookups";

export function getFirstCollapseForNode(nodes: GrimoireNode[], node: GrimoireNode) {
  if (!node.collapseLinks.length) return null;
  const nodeById = buildNodeById(nodes);
  return nodeById[node.collapseLinks[0]] ?? null;
}

export function getFirstRestorationForNode(nodes: GrimoireNode[], node: GrimoireNode) {
  if (!node.restorationLinks.length) return null;
  const nodeById = buildNodeById(nodes);
  return nodeById[node.restorationLinks[0]] ?? null;
}

export function getFirstRestorationRoute(
  nodes: GrimoireNode[],
  relationships: GrimoireRelationship[],
  collapseId: string
): RestorationRoute | null {
  const nodeById = buildNodeById(nodes);
  const route = relationships.find(
    (relationship) => relationship.source === collapseId && relationship.type === "restored_by"
  );

  if (!route) return null;

  const collapse = nodeById[collapseId];
  const restoration = nodeById[route.target];

  if (!collapse || !restoration) return null;

  return {
    collapse,
    restoration,
    relationship: route,
  };
}
