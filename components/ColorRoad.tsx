import type { GrimoireNode } from "@/lib/types";
import { FunctionNodeButton } from "./FunctionNodeButton";

type ColorRoadProps = {
  nodes: GrimoireNode[];
};

export function ColorRoad({ nodes }: ColorRoadProps) {
  return (
    <section className="panel">
      <p className="eyebrow">The Continuity Road</p>
      <h1>Stone → Black → Red → White → Gold → Brown → Pink → Green → Purple → Blue</h1>
      <p>Select one color to learn what it means. The wheel can wait until you are ready.</p>
      <div className="color-road">
        {nodes.map((node, index) => (
          <FunctionNodeButton key={node.id} node={node} index={index} />
        ))}
      </div>
    </section>
  );
}
