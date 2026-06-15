import Link from "next/link";
import type { GrimoireNode } from "@/lib/types";

type FunctionNodeButtonProps = {
  node: GrimoireNode;
  index: number;
};

export function FunctionNodeButton({ node, index }: FunctionNodeButtonProps) {
  return (
    <Link className={`function-node color-${(node.color ?? "blue").toLowerCase()}`} href={`/node/${node.id}`}>
      <span className="function-index">{index + 1}</span>
      <strong>{node.name}</strong>
      <small>{node.simpleMeaning}</small>
    </Link>
  );
}
