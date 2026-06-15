import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { WatcherPanel } from "@/components/WatcherPanel";
import { loadSeedData } from "@/lib/loadSeedData";
import { getNodeById } from "@/lib/nodeLookups";
import { getFirstCollapseForNode, getFirstRestorationForNode } from "@/lib/restorationRoutes";

type WatcherPageProps = {
  searchParams?: Promise<{ node?: string }>;
};

export default async function WatcherPage({ searchParams }: WatcherPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const { nodes } = loadSeedData();
  const selectedNode = resolvedSearchParams.node ? getNodeById(nodes, resolvedSearchParams.node) : null;
  const collapse = selectedNode ? getFirstCollapseForNode(nodes, selectedNode) : null;
  const restoration = selectedNode ? getFirstRestorationForNode(nodes, selectedNode) : null;

  return (
    <AppShell dominantColor="Gold">
      <WatcherPanel node={selectedNode} collapse={collapse} restoration={restoration} />
      <div className="button-row">
        <Link className="secondary-button" href={selectedNode ? `/node/${selectedNode.id}` : "/road"}>
          Return
        </Link>
      </div>
    </AppShell>
  );
}
