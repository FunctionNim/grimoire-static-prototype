import type { GrimoireNode } from "@/lib/types";

type NodeHeaderProps = {
  node: GrimoireNode;
};

export function NodeHeader({ node }: NodeHeaderProps) {
  return (
    <header className="node-header">
      <p className="eyebrow">{node.type}</p>
      <h1>{node.name}</h1>
      <p className="simple-meaning">{node.simpleMeaning}</p>
      <p className="node-meta">
        Color: {node.color ?? "None"} · Canon: {node.canonStatus} · Recursion Level: {node.recursionLevel}
      </p>
    </header>
  );
}
