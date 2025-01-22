import type { NextConfig } from "next";
const withTM = require('next-transpile-modules')(['lucide-react']);

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    ppr: "incremental",
  },
  reactStrictMode: true,
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
  
};



module.exports = withTM(nextConfig);
