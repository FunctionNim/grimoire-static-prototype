import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { BlueThresholdHeader } from "@/components/BlueThresholdHeader";
import { GratitudeMessage } from "@/components/GratitudeMessage";

export default function GratitudePage() {
  return (
    <AppShell dominantColor="Blue">
      <BlueThresholdHeader
        title="The road remains."
        subtitle="Leaving is not failure. Return when you are ready."
      />
      <GratitudeMessage />
      <div className="button-row">
        <Link className="primary-button" href="/">Return to Start</Link>
      </div>
    </AppShell>
  );
}
