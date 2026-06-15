import type { GrimoireNode, GrimoireRelationship } from "./types";
import { COLOR_ORDER } from "./colorOrder";

export function buildNodeById(nodes: GrimoireNode[]) {
  return Object.fromEntries(nodes.map((node) => [node.id, node]));
}

export function getNodeById(nodes: GrimoireNode[], id: string) {
  return nodes.find((node) => node.id === id) ?? null;
}

export function getNodesByType(nodes: GrimoireNode[], type: GrimoireNode["type"]) {
  return nodes.filter((node) => node.type === type);
}

export function getFunctionNodesInColorOrder(nodes: GrimoireNode[]) {
  const nodeById = buildNodeById(nodes);
  return COLOR_ORDER.map((id) => nodeById[id]).filter(Boolean);
}

export function getRelationshipsFrom(relationships: GrimoireRelationship[], source: string) {
  return relationships.filter((relationship) => relationship.source === source);
}

export function getRelationshipsTo(relationships: GrimoireRelationship[], target: string) {
  return relationships.filter((relationship) => relationship.target === target);
}
