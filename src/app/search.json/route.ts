import { projects } from "@/data/projects";
import { getAllNotes } from "@/lib/notes";

// 정적 export 에서는 빌드 때 한 번 만들어 out/search.json 으로 내보낸다.
export const dynamic = "force-static";

export function GET() {
  const items = [
    ...projects.map((p) => ({
      type: "프로젝트" as const,
      title: p.title,
      summary: p.summary,
      href: `/projects/${p.slug}/`,
      tags: p.tags,
    })),
    ...getAllNotes().map((n) => ({
      type: "노트" as const,
      title: n.title,
      summary: n.summary,
      href: `/study/${n.slug}/`,
      tags: n.tags,
    })),
  ];
  return Response.json(items);
}
