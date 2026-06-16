import { AppShell } from "@/components/AppShell";
import { BlueThresholdHeader } from "@/components/BlueThresholdHeader";
import { AbelTier0SymbolGrid } from "@/components/AbelTier0SymbolGrid";
import { ABEL_TIER_0_SYMBOLS } from "@/data/abelTier0Symbols";

export default function AbelSymbolsPage() {
  return (
    <AppShell dominantColor="Stone">
      <BlueThresholdHeader
        title="Abel Tier 0 Symbols"
        subtitle="Readable placeholders for the first playable Abel slice. These are gameplay signals first and art polish later."
      />

      <section className="panel">
        <p className="simple-meaning">
          Tier 0 contains {ABEL_TIER_0_SYMBOLS.length} required placeholder symbols.
        </p>
        <p>
          This page is a small-scale readability pass for the Abel slice. Every symbol below must be recognizable before full art, animation, or VFX polish begins.
        </p>
      </section>

      <AbelTier0SymbolGrid />
    </AppShell>
  );
}
