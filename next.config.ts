import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@/components/*": ["src/components/*"],
      "@/styles/*": ["src/styles/*"],
    },
  },
};

export default nextConfig;
