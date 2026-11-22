"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/data/site";
import Search from "./Search";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="no-print sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2 font-bold">
          <span>{site.name}</span>
          <span className="text-xs font-normal text-muted-foreground">/ PORTFOLIO</span>
        </Link>
        <nav aria-label="주요 메뉴" className="order-3 flex w-full gap-5 text-sm sm:order-none sm:w-auto">
          {nav.map((n) => {
            const active = pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={`border-b-2 py-1 ${
                  active
                    ? "border-brand font-semibold"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="border-b-2 border-transparent py-1 text-muted-foreground hover:text-foreground"
          >
            GitHub ↗
          </a>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Search />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
