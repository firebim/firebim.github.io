import Link from "next/link";
import { nav, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="no-print border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:px-6">
        <div>
          <p className="font-semibold text-foreground">{site.name}</p>
          <p>© {new Date().getFullYear()} {site.name}</p>
        </div>
        <nav aria-label="푸터 메뉴" className="flex gap-4">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-foreground">
              {n.label}
            </Link>
          ))}
          <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-foreground">
            이메일
          </a>
        </nav>
      </div>
    </footer>
  );
}
