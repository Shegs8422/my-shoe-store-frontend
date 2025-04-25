import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "example.com", // Replace with your image hostname
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
