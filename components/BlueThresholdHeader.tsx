type BlueThresholdHeaderProps = {
  title: string;
  subtitle: string;
};

export function BlueThresholdHeader({ title, subtitle }: BlueThresholdHeaderProps) {
  return (
    <header className="threshold-header">
      <p className="eyebrow">Blue Threshold</p>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}
