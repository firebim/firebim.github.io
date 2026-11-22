import type { NextConfig } from "next";

// GitHub Pages에 올리는 정적 사이트. 빌드 결과는 out/ 에 생긴다.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
