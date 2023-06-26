const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache.js");

const config = {
  experimental: {
    appDir: true,
  },
};

const nextConfig = withPWA({
  dest: "public",
  runtimeCaching,
  disable: process.env.NODE_ENV === "development",
})(config);

module.exports = nextConfig;
