import type { GrimoireNode } from "@/lib/types";

type RestorationRoutePanelProps = {
  restoration: GrimoireNode | null;
};

export function RestorationRoutePanel({ restoration }: RestorationRoutePanelProps) {
  return (
    <article className="card restoration">
      <p className="eyebrow">Restoration Route</p>
      {restoration ? (
        <>
          <h2>{restoration.name}</h2>
          <p>{restoration.simpleMeaning}</p>
        </>
      ) : (
        <p>No restoration route is linked yet.</p>
      )}
    </article>
  );
}
