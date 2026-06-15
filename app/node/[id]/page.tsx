import Link from "next/link";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { NodeHeader } from "@/components/NodeHeader";
import { MedicinePoisonPanel } from "@/components/MedicinePoisonPanel";
import { CollapsePanel } from "@/components/CollapsePanel";
import { RestorationRoutePanel } from "@/components/RestorationRoutePanel";
import { SophiaBookButton } from "@/components/SophiaBookButton";
import { WatcherLensButton } from "@/components/WatcherLensButton";
import { HelpButton } from "@/components/HelpButton";
import { loadSeedData } from "@/lib/loadSeedData";
import { getNodeById } from "@/lib/nodeLookups";
import { getFirstCollapseForNode, getFirstRestorationForNode } from "@/lib/restorationRoutes";

type NodeDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function NodeDetailPage({ params }: NodeDetailPageProps) {
  const { id } = await params;
  const { nodes } = loadSeedData();
  const node = getNodeById(nodes, id);

  if (!node) notFound();

  const collapse = getFirstCollapseForNode(nodes, node);
  const restoration = getFirstRestorationForNode(nodes, node);

  return (
    <AppShell dominantColor={node.color ?? "Blue"}>
      <section className="panel">
        <NodeHeader node={node} />
        <MedicinePoisonPanel medicine={node.medicine} poison={node.poison} />
        <section className="two-column">
          <CollapsePanel collapse={collapse} />
          <RestorationRoutePanel restoration={restoration} />
        </section>

        <div className="button-row">
          <HelpButton contextId={node.id} />
          <SophiaBookButton contextId={node.id} />
          <WatcherLensButton contextId={node.id} />
          <Link className="secondary-button" href="/road">Back to Color Road</Link>
        </div>
      </section>
    </AppShell>
  );
}
