import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { SophiaPanel } from "@/components/SophiaPanel";
import { loadSeedData } from "@/lib/loadSeedData";
import { getNodeById } from "@/lib/nodeLookups";
import { getFirstRestorationForNode } from "@/lib/restorationRoutes";

type SophiaPageProps = {
  searchParams?: Promise<{ node?: string }>;
};

export default async function SophiaPage({ searchParams }: SophiaPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const { nodes } = loadSeedData();
  const selectedNode = resolvedSearchParams.node ? getNodeById(nodes, resolvedSearchParams.node) : null;
  const restoration = selectedNode ? getFirstRestorationForNode(nodes, selectedNode) : null;

  return (
    <AppShell dominantColor="White">
      <SophiaPanel node={selectedNode} restoration={restoration} />
      <div className="button-row">
        <Link className="secondary-button" href={selectedNode ? `/node/${selectedNode.id}` : "/road"}>
          Return
        </Link>
      </div>
    </AppShell>
  );
}
