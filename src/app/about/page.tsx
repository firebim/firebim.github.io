import type { Metadata } from "next";
import { capabilities, experiences, site } from "@/data/site";
import { PageTitle, SectionLabel } from "@/components/ui";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageTitle title="About" desc="프로젝트 뒤에서 어떤 기준으로 일하는 사람인지 소개합니다." />

      <div className="grid gap-10 md:grid-cols-[18rem_1fr]">
        <aside className="h-fit rounded-xl border border-border bg-accent p-6">
          <p className="text-xs font-semibold text-brand">{site.role}</p>
          <p className="mt-1 text-3xl font-bold">{site.name}</p>
          <p className="mt-3 text-sm text-muted-foreground">{site.headline}</p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>{site.location}</li>
            <li>
              <a className="hover:text-brand" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a className="hover:text-brand" href={site.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </li>
          </ul>
        </aside>

        <div>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            {site.about.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {site.values.map((v) => (
              <div key={v.title} className="rounded-lg border border-border bg-card p-4">
                <p className="text-sm font-semibold text-brand">{v.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-16">
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

      <section className="mt-12">
        <SectionLabel>TECH STACK</SectionLabel>
        <dl className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((c) => (
            <div key={c.group} className="rounded-xl border border-border bg-card p-4">
              <dt className="font-semibold">{c.group}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{c.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
