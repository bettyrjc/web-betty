const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  eslint: {
    dirs: ['src'],
  },
  experimental: {
    nftTracing: true,
    outputFileTracing: true,
  },
};

module.exports = nextConfig;
