import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/collection", destination: "/shop", permanent: true }];
  },
};

export default nextConfig;
