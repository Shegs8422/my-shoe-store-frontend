import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Add the hostnames of any external image providers you use here.
    // This is necessary for Next.js Image Optimization to work with external images.
    // Example: if your images are hosted on "cdn.example.com", you'd add:
    // {
    //   protocol: "https",
    //   hostname: "cdn.example.com",
    //   port: "",
    //   pathname: "/images/**", // Or your specific path
    // },
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      // Note: `example.com` was removed as it was a placeholder.
      // Add your actual image hostnames above.
    ],
  },
};

export default nextConfig;
