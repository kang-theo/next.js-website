/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;
