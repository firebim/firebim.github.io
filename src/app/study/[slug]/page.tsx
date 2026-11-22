import type { Metadata } from "next";
import Link from "next/link";
import { getAllNotes, getNote } from "@/lib/notes";
import { Tag } from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllNotes().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { note } = getNote((await params).slug);
  return { title: note.title, description: note.summary };
}

export default async function NotePage({ params }: Props) {
  const { note, html } = getNote((await params).slug);
  return (
    <article className="max-w-3xl">
      <Link href="/study/" className="text-sm text-muted-foreground hover:text-foreground">
        ← 기술 노트
      </Link>
      <p className="mt-6 text-sm text-muted-foreground">{note.date}</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">{note.title}</h1>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {note.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      {/* content/notes 의 마크다운은 직접 쓰는 파일이므로 그대로 렌더한다 */}
      <div className="markdown mt-10" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
