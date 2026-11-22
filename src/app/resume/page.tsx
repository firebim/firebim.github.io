import type { Metadata } from "next";
import Link from "next/link";
import { capabilities, experiences, site } from "@/data/site";
import { projects } from "@/data/projects";
import { PageTitle, SectionLabel } from "@/components/ui";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <>
      <PageTitle title="이력서" desc="맡았던 일과 쓸 수 있는 기술, 근거가 되는 프로젝트를 정리했습니다." />
      <div className="no-print -mt-6 mb-8">
        <PrintButton />
      </div>

      <section className="mb-12">
        <SectionLabel>PROFILE</SectionLabel>
        <h2 className="text-2xl font-bold">{site.name}</h2>
        <p className="text-sm text-muted-foreground">
          {site.role} · {site.location}
        </p>
        <p className="mt-3 max-w-2xl text-muted-foreground">{site.intro}</p>
      </section>

      <section className="mb-12">
        <SectionLabel>EXPERIENCE</SectionLabel>
        <ol className="space-y-5 border-l border-border pl-5">
          {experiences.map((e) => (
            <li key={e.title}>
              <p className="text-xs text-muted-foreground">{e.period}</p>
              <p className="font-semibold">{e.title}</p>
              <p className="text-sm">{e.role}</p>
              <p className="text-sm text-muted-foreground">{e.summary}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-12">
        <SectionLabel>CAPABILITIES</SectionLabel>
        <dl className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((c) => (
            <div key={c.group} className="rounded-xl border border-border bg-card p-4">
              <dt className="font-semibold">{c.group}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{c.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <SectionLabel>SELECTED EVIDENCE</SectionLabel>
        <ul className="space-y-3">
          {projects
            .filter((p) => p.featured)
            .map((p) => (
              <li key={p.slug} className="rounded-xl border border-border bg-card p-4">
                <p className="font-semibold">{p.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.outcome}</p>
                <Link href={`/projects/${p.slug}/`} className="no-print mt-2 inline-block text-sm text-brand">
                  상세 기록 보기 →
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
