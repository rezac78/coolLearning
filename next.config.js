/** @type {import('next').NextConfig} */
const withSourceMaps = require("@zeit/next-source-maps");
const path = require("path");

const nextConfig = withSourceMaps({
  webpack: (config, { defaultLoaders }) => {
    config.resolve.alias["~"] = path.resolve(__dirname, "src/");
    return config;
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
});

module.exports = nextConfig;
