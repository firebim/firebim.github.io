import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const dir = path.join(process.cwd(), "content", "notes");

export type Note = {
  slug: string;
  title: string;
  summary: string;
  track: string;
  date: string; // YYYY-MM-DD
  tags: string[];
};

function readNote(file: string) {
  const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
  const note: Note = {
    slug: file.replace(/\.md$/, ""),
    title: String(data.title ?? file),
    summary: String(data.summary ?? ""),
    track: String(data.track ?? ""),
    date: String(data.date ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
  };
  return { note, content };
}

export function getAllNotes(): Note[] {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => readNote(f).note)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNote(slug: string) {
  const { note, content } = readNote(`${slug}.md`);
  return { note, html: marked.parse(content, { async: false }) as string };
}
