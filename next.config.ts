import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/my-nextjs-website',
};

export default nextConfig;
