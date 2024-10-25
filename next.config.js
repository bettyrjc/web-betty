// const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  images: {
    loader: 'default',
    path: '/',
  },
};

module.exports = nextConfig;
