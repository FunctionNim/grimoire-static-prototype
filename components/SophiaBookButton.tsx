import Link from "next/link";
import { contextHref } from "@/lib/navigation";

type SophiaBookButtonProps = {
  contextId?: string;
};

export function SophiaBookButton({ contextId }: SophiaBookButtonProps) {
  return (
    <Link className="icon-link" href={contextHref("/sophia", contextId)}>
      Sophia Book
    </Link>
  );
}
