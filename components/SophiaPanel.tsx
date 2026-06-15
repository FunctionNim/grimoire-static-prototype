import type { GrimoireNode } from "@/lib/types";

type SophiaPanelProps = {
  node?: GrimoireNode | null;
  restoration?: GrimoireNode | null;
};

export function SophiaPanel({ node, restoration }: SophiaPanelProps) {
  return (
    <section className="panel sophia-panel">
      <p className="eyebrow">Sophia Book</p>
      <h1>Here is one way to continue.</h1>
      <p>You may step back. You may return later. You may keep the question without letting it consume you.</p>

      {node ? (
        <article className="card">
          <p className="eyebrow">Current Pressure</p>
          <h2>{node.name}</h2>
          <p>{node.simpleMeaning}</p>
        </article>
      ) : null}

      {restoration ? (
        <article className="card restoration">
          <p className="eyebrow">Gentle Restoration Option</p>
          <h2>{restoration.name}</h2>
          <p>{restoration.simpleMeaning}</p>
        </article>
      ) : (
        <p className="soft-note">Choose a node first to see a specific restoration route.</p>
      )}

      <p className="boundary-note">Sophia guides. Sophia does not command.</p>
    </section>
  );
}
