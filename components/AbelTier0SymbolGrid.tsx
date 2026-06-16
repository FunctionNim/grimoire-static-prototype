import { ABEL_TIER_0_SYMBOLS } from "@/data/abelTier0Symbols";

export function AbelTier0SymbolGrid() {
  return (
    <section className="symbol-grid" aria-label="Abel Tier 0 placeholder symbols">
      {ABEL_TIER_0_SYMBOLS.map((symbol) => (
        <article className="symbol-card" key={symbol.id}>
          <div className="symbol-card-header">
            <span className="symbol-glyph" aria-hidden="true">
              {symbol.glyph}
            </span>
            <div>
              <p className="eyebrow">{symbol.category}</p>
              <h2>{symbol.name}</h2>
            </div>
          </div>

          <dl className="symbol-details">
            <div>
              <dt>Minimum read</dt>
              <dd>{symbol.minimumVisualRead}</dd>
            </div>
            <div>
              <dt>Meaning</dt>
              <dd>{symbol.gameplayMeaning}</dd>
            </div>
            <div>
              <dt>States</dt>
              <dd>{symbol.requiredStates.join(" / ")}</dd>
            </div>
          </dl>
        </article>
      ))}
    </section>
  );
}
