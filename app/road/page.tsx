import { AppShell } from "@/components/AppShell";
import { ColorRoad } from "@/components/ColorRoad";
import { SophiaBookButton } from "@/components/SophiaBookButton";
import { WatcherLensButton } from "@/components/WatcherLensButton";
import { HelpButton } from "@/components/HelpButton";
import { loadSeedData } from "@/lib/loadSeedData";
import { getFunctionNodesInColorOrder } from "@/lib/nodeLookups";

export default function ColorRoadPage() {
  const { nodes } = loadSeedData();
  const functions = getFunctionNodesInColorOrder(nodes);

  return (
    <AppShell dominantColor="Blue">
      <ColorRoad nodes={functions} />
      <section className="button-row">
        <HelpButton contextId="color-road" />
        <SophiaBookButton contextId="color-road" />
        <WatcherLensButton contextId="color-road" />
      </section>
    </AppShell>
  );
}
