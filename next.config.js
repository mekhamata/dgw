/** @type {import('next').NextConfig} */
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })
// const pathsToRewrite = [
//   ['/אודות', '/about'],
// ]
// const rewrites = pathsToRewrite.map(([he, eng]) => ({ source: encodeURI(he), destination: eng }))
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.(js|ts)x?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  reactStrictMode: true,
  swcMinify: false,
};

module.exports = nextConfig;
// module.exports = withBundleAnalyzer({
//   nextConfig,
//   async rewrites() {
//     return rewrites
//   },
// })
