export type NodeType =
  | "Function"
  | "Pressure"
  | "Collapse"
  | "Restoration"
  | "Assistance"
  | "Interface"
  | "Civilization";

export type GrimoireNode = {
  id: string;
  type: NodeType;
  name: string;
  color?: string | null;
  description: string;
  simpleMeaning: string;
  medicine?: string | null;
  poison?: string | null;
  collapseLinks: string[];
  restorationLinks: string[];
  uiUse: string[];
  gateway: string[];
  recursionLevel: number;
  canonStatus: string;
  originAtmosphere: string;
  version: string;
};

export type GrimoireRelationship = {
  id: string;
  source: string;
  target: string;
  type:
    | "collapses_into"
    | "restored_by"
    | "supports"
    | "observes"
    | "guides"
    | "transforms_into"
    | "anchors"
    | "routes_to"
    | "belongs_to_gateway"
    | "uses_interface"
    | "has_pressure"
    | "has_medicine"
    | "has_poison";
  weight: number;
  description: string;
  version: string;
};

export type RestorationRoute = {
  collapse: GrimoireNode;
  restoration: GrimoireNode;
  relationship: GrimoireRelationship;
};
