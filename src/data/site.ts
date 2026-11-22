// 사이트 전체에서 쓰는 개인 정보와 이력. 아래 값은 모두 샘플이므로 본인 내용으로 바꾸세요.
// "[샘플]"이 붙은 문구는 화면에 그대로 보입니다. 다 바꾸고 나면 검색해서 남은 곳이 없는지 확인하세요.

export const site = {
  name: "신현빈",
  url: "https://firebim.github.io",
  github: "https://github.com/firebim",
  email: "hello@example.com", // [샘플] 실제 이메일로 교체
  location: "Seoul, KR", // [샘플]
  role: "Developer", // [샘플]
  headline: "[샘플] 한 줄로 나를 소개하는 문장을 여기에 적습니다.",
  intro:
    "[샘플] 어떤 일을 하는 사람인지, 어떤 기준으로 일하는지 두세 문장으로 적습니다. 홈 화면 첫 문단에 보입니다.",
  about: [
    "[샘플] 소개 첫 문단입니다. 어떤 문제에 관심이 있고 어떤 방식으로 일하는지 적습니다.",
    "[샘플] 두 번째 문단입니다. 도구나 습관, 일하는 원칙처럼 프로젝트 결과만으로는 안 보이는 것을 적습니다.",
    "[샘플] 세 번째 문단입니다. 이 사이트가 무엇을 보여 주려는 기록인지 적습니다.",
  ],
  values: [
    { title: "[샘플] 가치 1", body: "한 줄 설명을 적습니다." },
    { title: "[샘플] 가치 2", body: "한 줄 설명을 적습니다." },
    { title: "[샘플] 가치 3", body: "한 줄 설명을 적습니다." },
  ],
};

export type Experience = {
  period: string;
  title: string;
  role: string;
  summary: string;
};

export const experiences: Experience[] = [
  {
    period: "2026.01 - 진행 중",
    title: "[샘플] 소속 또는 프로젝트 이름",
    role: "[샘플] 맡은 역할",
    summary: "[샘플] 무엇을 담당했는지 한 줄로 적습니다.",
  },
  {
    period: "2025.03 - 2025.12",
    title: "[샘플] 이전 소속 또는 프로젝트 이름",
    role: "[샘플] 맡은 역할",
    summary: "[샘플] 무엇을 담당했는지 한 줄로 적습니다.",
  },
];

export const capabilities: { group: string; items: string[] }[] = [
  { group: "[샘플] 분야 1", items: ["기술 A", "기술 B", "기술 C"] },
  { group: "[샘플] 분야 2", items: ["기술 D", "기술 E"] },
  { group: "[샘플] 분야 3", items: ["기술 F", "기술 G", "기술 H"] },
];

// 노트 트랙(분류). content/notes/*.md 의 frontmatter `track` 값이 id 와 같아야 한다.
export const tracks = [
  { id: "basics", title: "[샘플] 기반 개념", desc: "다른 주제를 이해하는 바탕이 되는 개념을 정리합니다." },
  { id: "design", title: "[샘플] 설계와 구조", desc: "선택지를 비교하고 이유를 남긴 글을 모읍니다." },
];

export const nav = [
  { href: "/projects/", label: "프로젝트" },
  { href: "/study/", label: "기술 노트" },
  { href: "/resume/", label: "이력서" },
  { href: "/about/", label: "소개" },
];
