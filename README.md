# firebim.github.io

신현빈 포트폴리오 사이트. Next.js(정적 export) + Tailwind CSS, GitHub Pages로 배포합니다. 주소: https://hyunkong.me

## 내용 바꾸는 곳

| 무엇 | 파일 |
| --- | --- |
| 이름, 소개, 경력, 기술 스택, 노트 분류 | `src/data/site.ts` |
| 프로젝트 | `src/data/projects.ts` |
| 기술 노트 | `content/notes/*.md` (파일을 추가하면 글이 늘어납니다) |

`[샘플]`이 붙은 문구는 자리표시자입니다. 모두 바꾼 뒤 `[샘플]`을 검색해 남은 곳이 없는지 확인하세요.

## 개발

```powershell
npm install
npm run dev     # http://localhost:3000
npm run build   # out/ 에 정적 파일 생성
```

## 배포

`main`에 push하면 `.github/workflows/deploy.yml`이 빌드해서 GitHub Pages에 올립니다.
저장소 Settings → Pages → Source 가 **GitHub Actions** 여야 합니다. 커스텀 도메인(`public/CNAME`)은 빌드 결과에 포함됩니다.
