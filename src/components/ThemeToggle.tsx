"use client";

export default function ThemeToggle() {
  function toggle() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="라이트/다크 모드 전환"
      className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground hover:text-foreground"
    >
      {/* 서버 렌더에서는 현재 테마를 모르므로 아이콘 전환은 CSS(dark:)로 처리한다 */}
      <span aria-hidden className="dark:hidden">☾</span>
      <span aria-hidden className="hidden dark:inline">☀</span>
    </button>
  );
}
