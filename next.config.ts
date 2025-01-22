import type { NextConfig } from "next";
const withTM = require('next-transpile-modules')(['lucide-react']);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    // Adding to ignore the errors silently
    config.ignoreWarnings = [
      (warning: { module: { resource: string | string[]; }; }) => warning.module?.resource?.includes('lucide-react'), // Ignore lucide-react warnings
    ];

    // Optional: to handle specific build problems like fs module issue
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }

    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    ppr: "incremental",
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
  
};



export default withTM({
  ...nextConfig,
  transpileModules: ['lucide-react'],
});
