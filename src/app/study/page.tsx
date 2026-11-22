import type { Metadata } from "next";
import Link from "next/link";
import { tracks } from "@/data/site";
import { getAllNotes } from "@/lib/notes";
import { PageTitle, SectionLabel, Tag } from "@/components/ui";

export const metadata: Metadata = { title: "Study Notes" };

export default function StudyPage() {
  const notes = getAllNotes();
  return (
    <>
      <PageTitle
        title="Study Notes"
        meta={`${notes.length} entries`}
        desc="프로젝트에서 발견한 질문과 쌓아가는 개념을 순서와 맥락이 보이게 정리한 기술 기록입니다."
      />

      {tracks.map((t, i) => {
        const inTrack = notes.filter((n) => n.track === t.id);
        return (
          <section key={t.id} className="mb-12">
            <SectionLabel>{String(i + 1).padStart(2, "0")} · {inTrack.length} NOTES</SectionLabel>
            <h2 className="text-xl font-bold">{t.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
            <ul className="mt-4 divide-y divide-border rounded-xl border border-border bg-card">
              {inTrack.length === 0 && (
                <li className="px-5 py-4 text-sm text-muted-foreground">아직 글이 없습니다.</li>
              )}
              {inTrack.map((n) => (
                <li key={n.slug}>
                  <Link href={`/study/${n.slug}/`} className="block px-5 py-4 hover:bg-muted">
                    <p className="font-medium">{n.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{n.summary}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      <span className="mr-1 text-xs text-muted-foreground">{n.date}</span>
                      {n.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
}
