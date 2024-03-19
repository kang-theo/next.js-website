/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/kang-theo/next.js-blogposts/main/images/**",
      },
    ],
  },
  exclude: [/archive/, /app\/about/, /app\/todo/],
};

module.exports = nextConfig;
