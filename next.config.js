/** @type {import('next').NextConfig} */
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })
// const pathsToRewrite = [
//   ['/אודות', '/about'],
// ]
// const rewrites = pathsToRewrite.map(([he, eng]) => ({ source: encodeURI(he), destination: eng }))
const webpack = require("webpack");
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.(js|ts)x?$/,
      use: ["@svgr/webpack"],
    });
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );

    return config;
  },
  reactStrictMode: true,
  swcMinify: false,
  publicRuntimeConfig: {
    // NEXT_PUBLIC_EMAILJS_PRIVATE: process.env.NEXT_PUBLIC_EMAILJS_PRIVATE,
    processEnv: process.env,
  },
};

module.exports = nextConfig;
// module.exports = withBundleAnalyzer({
//   nextConfig,
//   async rewrites() {
//     return rewrites
//   },
// })
