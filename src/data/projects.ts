export type Project = {
  slug: string;
  title: string;
  role: string;
  summary: string;
  outcome: string;
  status: "Live" | "Archived" | "GitHub Only";
  period: string;
  team: string;
  tags: string[];
  link?: { label: string; href: string };
  sections: { heading: string; body: string }[];
  featured?: boolean;
};

// 아래 두 프로젝트는 샘플입니다. 같은 모양으로 항목을 추가하거나 바꾸세요.
export const projects: Project[] = [
  {
    slug: "sample-project-1",
    title: "[샘플] 프로젝트 이름 1",
    role: "[샘플] 맡은 역할",
    summary: "[샘플] 어떤 서비스이고 무엇을 만들었는지 한두 문장으로 적습니다.",
    outcome: "[샘플] 가장 중요한 결과를 한 문장으로 적습니다.",
    status: "Live",
    period: "2026.01 - 진행 중",
    team: "[샘플] 개인 프로젝트",
    tags: ["TypeScript", "Next.js", "PostgreSQL"],
    link: { label: "GitHub", href: "https://github.com/firebim" },
    featured: true,
    sections: [
      { heading: "문제", body: "[샘플] 어떤 문제를 발견했는지 적습니다." },
      { heading: "선택", body: "[샘플] 어떤 선택지를 비교했고 무엇을 골랐는지 적습니다." },
      { heading: "검증", body: "[샘플] 무엇으로 확인했는지 적습니다." },
      { heading: "다시 한다면", body: "[샘플] 무엇을 바꿀지 적습니다." },
    ],
  },
  {
    slug: "sample-project-2",
    title: "[샘플] 프로젝트 이름 2",
    role: "[샘플] 맡은 역할",
    summary: "[샘플] 어떤 서비스이고 무엇을 만들었는지 한두 문장으로 적습니다.",
    outcome: "[샘플] 가장 중요한 결과를 한 문장으로 적습니다.",
    status: "Archived",
    period: "2025.03 - 2025.12",
    team: "[샘플] 4인 팀",
    tags: ["Java", "Spring Boot", "MySQL"],
    featured: true,
    sections: [
      { heading: "문제", body: "[샘플] 어떤 문제를 발견했는지 적습니다." },
      { heading: "선택", body: "[샘플] 어떤 선택지를 비교했고 무엇을 골랐는지 적습니다." },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
