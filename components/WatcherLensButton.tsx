import Link from "next/link";
import { contextHref } from "@/lib/navigation";

type WatcherLensButtonProps = {
  contextId?: string;
};

export function WatcherLensButton({ contextId }: WatcherLensButtonProps) {
  return (
    <Link className="icon-link" href={contextHref("/watcher", contextId)}>
      Watcher Lens
    </Link>
  );
}
