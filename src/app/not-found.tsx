import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20">
      <p className="text-sm font-semibold text-brand">404</p>
      <h1 className="mt-2 text-3xl font-bold">페이지를 찾을 수 없습니다.</h1>
      <p className="mt-3 text-muted-foreground">주소가 바뀌었거나 없는 페이지입니다.</p>
      <Link href="/" className="mt-6 inline-block text-brand">
        홈으로 돌아가기 →
      </Link>
    </div>
  );
}
