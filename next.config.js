/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  webpack: (config, { defaultLoaders }) => {
    config.resolve.alias["~"] = path.resolve(__dirname, "src/");
    return config;
  },
};

module.exports = nextConfig;
