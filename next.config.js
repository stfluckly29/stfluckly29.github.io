/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  swcMinify: false,
  experimental: {
    scrollRestoration: true,
    nextScriptWorkers: true,
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};
