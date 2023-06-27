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
})(config);

module.exports = nextConfig;
