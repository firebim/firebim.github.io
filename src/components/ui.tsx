import Link from "next/link";
import type { Project } from "@/data/projects";

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">{children}</span>
  );
}

export function PageTitle({ title, desc, meta }: { title: string; desc?: string; meta?: string }) {
  return (
    <div className="mb-10 border-b border-border pb-8">
      <div className="flex items-baseline gap-3">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {meta && <span className="text-sm text-muted-foreground">{meta}</span>}
      </div>
      {desc && <p className="mt-3 max-w-2xl text-muted-foreground">{desc}</p>}
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-xs font-semibold tracking-widest text-brand">{children}</p>;
}

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}/`}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 transition hover:border-brand"
    >
      <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
        <span>{p.role}</span>
        <span className="rounded-full border border-border px-2 py-0.5">{p.status}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold group-hover:text-brand">{p.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
      <p className="mt-4 rounded-md bg-accent px-3 py-2 text-sm">{p.outcome}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        {p.period} · {p.team}
      </p>
    </Link>
  );
}
