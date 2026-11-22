"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Item = { type: "프로젝트" | "노트"; title: string; summary: string; href: string; tags: string[] };

export default function Search() {
  const [items, setItems] = useState<Item[] | null>(null);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  const started = useRef(false);

  // 포커스나 첫 입력 때 한 번만 색인(search.json)을 가져온다.
  function load() {
    if (started.current) return;
    started.current = true;
    fetch("/search.json")
      .then((r) => r.json())
      .then(setItems)
      .catch(() => setItems([]));
  }

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!box.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const term = q.trim().toLowerCase();
  const results = term
    ? (items ?? [])
        .filter((i) => `${i.title} ${i.summary} ${i.tags.join(" ")}`.toLowerCase().includes(term))
        .slice(0, 8)
    : [];

  return (
    <div ref={box} className="relative">
      <input
        type="search"
        value={q}
        placeholder="검색"
        aria-label="프로젝트와 노트 검색"
        onFocus={() => {
          load();
          setOpen(true);
        }}
        onChange={(e) => {
          load();
          setQ(e.target.value);
          setOpen(true);
        }}
        onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
        className="h-9 w-32 rounded-md border border-border bg-background px-3 text-sm placeholder:text-muted-foreground sm:w-48"
      />
      {open && term && (
        <ul className="absolute right-0 mt-2 w-72 overflow-hidden rounded-lg border border-border bg-card shadow-lg">
          {results.length === 0 ? (
            <li className="px-3 py-3 text-sm text-muted-foreground">
              {items ? "결과가 없습니다." : "불러오는 중…"}
            </li>
          ) : (
            results.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  onClick={() => {
                    setOpen(false);
                    setQ("");
                  }}
                  className="block px-3 py-2 hover:bg-muted"
                >
                  <span className="text-xs text-brand">{r.type}</span>
                  <span className="block text-sm font-medium">{r.title}</span>
                </Link>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
