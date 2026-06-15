import type { GrimoireNode } from "@/lib/types";

type WatcherPanelProps = {
  node?: GrimoireNode | null;
  collapse?: GrimoireNode | null;
  restoration?: GrimoireNode | null;
};

export function WatcherPanel({ node, collapse, restoration }: WatcherPanelProps) {
  return (
    <section className="panel watcher-panel">
      <p className="eyebrow">Watcher Lens</p>
      <h1>What happened still matters.</h1>
      <p>The Watcher records consequence without command.</p>

      {node ? (
        <article className="card">
          <p className="eyebrow">Observed Node</p>
          <h2>{node.name}</h2>
          <p>{node.simpleMeaning}</p>
        </article>
      ) : null}

      {collapse ? (
        <article className="card danger">
          <p className="eyebrow">Observed Risk</p>
          <h2>{collapse.name}</h2>
          <p>{collapse.simpleMeaning}</p>
        </article>
      ) : (
        <p className="soft-note">No specific collapse context is selected.</p>
      )}

      {restoration ? (
        <article className="card restoration">
          <p className="eyebrow">Restoration Still Visible</p>
          <h2>{restoration.name}</h2>
          <p>{restoration.simpleMeaning}</p>
        </article>
      ) : null}

      <p className="boundary-note">The Watcher records. The Watcher does not judge.</p>
    </section>
  );
}
