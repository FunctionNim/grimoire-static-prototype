import type { GrimoireNode } from "@/lib/types";

type CollapsePanelProps = {
  collapse: GrimoireNode | null;
};

export function CollapsePanel({ collapse }: CollapsePanelProps) {
  return (
    <article className="card danger">
      <p className="eyebrow">Collapse Risk</p>
      {collapse ? (
        <>
          <h2>{collapse.name}</h2>
          <p>{collapse.simpleMeaning}</p>
        </>
      ) : (
        <p>No collapse risk is linked yet.</p>
      )}
    </article>
  );
}
