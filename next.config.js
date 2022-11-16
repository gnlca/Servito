/** @type {import('next').NextConfig} */
const nextConfig = {

  // experimental: {
  //   appDir: true,
  // },
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
}

module.exports = nextConfig
