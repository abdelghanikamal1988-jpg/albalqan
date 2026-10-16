import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/albalqan",
  assetPrefix: "/albalqan/",
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
