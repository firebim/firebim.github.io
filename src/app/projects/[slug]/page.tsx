import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { Tag } from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  return { title: p?.title, description: p?.summary };
}

export default async function ProjectPage({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) notFound();

  return (
    <article className="max-w-3xl">
      <Link href="/projects/" className="text-sm text-muted-foreground hover:text-foreground">
        ← 프로젝트 목록
      </Link>
      <p className="mt-6 text-sm text-muted-foreground">
        {p.role} · {p.status}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">{p.title}</h1>
      <p className="mt-4 text-muted-foreground">{p.summary}</p>
      <p className="mt-6 rounded-md bg-accent px-4 py-3 font-medium">{p.outcome}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        {p.period} · {p.team}
      </p>
      {p.link && (
        <a href={p.link.href} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-brand">
          {p.link.label} ↗
        </a>
      )}
      <div className="mt-10 space-y-8">
        {p.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-xl font-semibold">{s.heading}</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
