import Link from "next/link";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { getAllNotes } from "@/lib/notes";
import { ProjectCard, SectionLabel } from "@/components/ui";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const notes = getAllNotes();
  const summary = [
    { label: "ROLE", title: site.role, desc: "[샘플] 한 줄 설명" },
    { label: "PROJECTS", title: `${projects.length}개 프로젝트`, desc: "대표 사례부터 확인" },
    { label: "NOTES", title: `${notes.length}개 기술 노트`, desc: "공부한 개념과 개발 기록" },
    { label: "CONTACT", title: "이메일로 연락", desc: site.email },
  ];

  return (
    <>
      <section className="py-10 sm:py-16">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">{site.name}.</h1>
        <p className="mt-6 max-w-2xl text-xl font-medium">{site.headline}</p>
        <p className="mt-4 max-w-2xl text-muted-foreground">{site.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="#projects" className="rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground">
            대표 프로젝트 보기 ↓
          </Link>
          <Link href="/resume/" className="rounded-md border border-border px-4 py-2.5 text-sm font-semibold hover:border-brand">
            이력서 보기 ↗
          </Link>
        </div>
      </section>

      <section aria-label="요약" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summary.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-5">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground">{s.label}</p>
            <p className="mt-2 font-semibold">{s.title}</p>
            <p className="mt-1 break-all text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </section>

      <section id="projects" className="mt-20 scroll-mt-20">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <SectionLabel>FEATURED</SectionLabel>
            <h2 className="text-2xl font-bold">대표 프로젝트</h2>
          </div>
          <Link href="/projects/" className="text-sm text-brand">
            더 많은 프로젝트 보기 ↗
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-4 sm:grid-cols-2">
        <Link href="/resume/" className="rounded-xl border border-border bg-card p-6 hover:border-brand">
          <p className="text-xs font-semibold tracking-widest text-brand">RESUME</p>
          <p className="mt-2 text-lg font-semibold">이력서</p>
          <p className="mt-1 text-sm text-muted-foreground">링크로 열고 PDF로 저장</p>
        </Link>
        <Link href="/study/" className="rounded-xl border border-border bg-card p-6 hover:border-brand">
          <p className="text-xs font-semibold tracking-widest text-brand">NOTES</p>
          <p className="mt-2 text-lg font-semibold">기술 노트</p>
          <p className="mt-1 text-sm text-muted-foreground">공부한 개념 글 {notes.length}개</p>
        </Link>
      </section>
    </>
  );
}
