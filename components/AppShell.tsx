import Link from "next/link";
import type { ReactNode } from "react";

type AppShellProps = {
  children: ReactNode;
  dominantColor?: string;
};

export function AppShell({ children, dominantColor = "Blue" }: AppShellProps) {
  return (
    <main className={`app-shell color-${dominantColor.toLowerCase()}`}>
      <nav className="top-nav" aria-label="Primary navigation">
        <Link href="/">Start</Link>
        <Link href="/road">Color Road</Link>
        <Link href="/abel-symbols">Abel Symbols</Link>
        <Link href="/sophia">Sophia</Link>
        <Link href="/watcher">Watcher</Link>
        <Link href="/gratitude">Leave</Link>
      </nav>
      {children}
    </main>
  );
}
