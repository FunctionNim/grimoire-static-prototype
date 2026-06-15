type MedicinePoisonPanelProps = {
  medicine?: string | null;
  poison?: string | null;
};

export function MedicinePoisonPanel({ medicine, poison }: MedicinePoisonPanelProps) {
  return (
    <section className="two-column">
      <article className="card">
        <p className="eyebrow">Medicine</p>
        <p>{medicine || "No medicine text is defined for this node yet."}</p>
      </article>
      <article className="card warning">
        <p className="eyebrow">Poison</p>
        <p>{poison || "No poison text is defined for this node yet."}</p>
      </article>
    </section>
  );
}
