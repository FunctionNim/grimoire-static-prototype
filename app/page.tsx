import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { BlueThresholdHeader } from "@/components/BlueThresholdHeader";
import { SophiaBookButton } from "@/components/SophiaBookButton";
import { WatcherLensButton } from "@/components/WatcherLensButton";

export default function BlueStartMenuPage() {
  return (
    <AppShell dominantColor="Blue">
      <BlueThresholdHeader
        title="Welcome, traveler."
        subtitle="This is a game of pressure, memory, building, questioning, restoration, and change."
      />

      <section className="panel">
        <p>You do not need to understand the whole Grimoire to begin.</p>
        <p>Start with one choice. The road will teach you as you move.</p>

        <div className="button-row">
          <Link className="primary-button" href="/road">Begin Journey</Link>
          <Link className="secondary-button" href="/road">Learn the Colors</Link>
          <SophiaBookButton />
          <WatcherLensButton />
          <Link className="secondary-button" href="/gratitude">Leave for Now</Link>
        </div>
      </section>
    </AppShell>
  );
}
