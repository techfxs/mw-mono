/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@mw-mono/header", "@mw-mono/footer"],
  output: "standalone",
};

module.exports = nextConfig;
