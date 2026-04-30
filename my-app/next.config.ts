import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // THIS IS THE MAGIC LINE:
  output: "standalone",
};

export default nextConfig;
