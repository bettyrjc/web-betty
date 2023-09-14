const { i18n } = require('./next-i18next.config');

const nextConfig = {
  // i18n,
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  images: {
    loader: 'akamai',
    path: './',
  },
  assetPrefix: './',
  // experimental: {
  //   nftTracing: true,
  //   outputFileTracing: true,
  // },
};

module.exports = nextConfig;
