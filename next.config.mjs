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
  // set up a custom incremental cache handler to skip the fetch cache
  experimental: {
    appDir: true,
    incrementalCacheHandlerPath: process.env.CUSTOM_CACHE_HANDLER
      ? path.resolve(__dirname, "cache-handler.js")
      : undefined,
  },
};

export default nextConfig;
