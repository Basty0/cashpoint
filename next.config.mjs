/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "cash-point.sopera.mg" }],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
