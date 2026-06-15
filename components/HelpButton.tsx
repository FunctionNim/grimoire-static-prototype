type HelpButtonProps = {
  contextId?: string;
};

export function HelpButton({ contextId }: HelpButtonProps) {
  return (
    <button className="icon-button" type="button" aria-label={`Open Help Layer for ${contextId ?? "current screen"}`}>
      ?
    </button>
  );
}
