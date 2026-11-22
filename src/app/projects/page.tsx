import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { PageTitle, ProjectCard } from "@/components/ui";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageTitle
        title="Projects"
        meta={`${projects.length} entries`}
        desc="만든 서비스, 맡은 범위, 해결한 문제를 한눈에 살펴보세요."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </>
  );
}
