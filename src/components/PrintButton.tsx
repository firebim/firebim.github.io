"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-md border border-border px-4 py-2 text-sm font-semibold hover:border-brand"
    >
      PDF로 저장
    </button>
  );
}
