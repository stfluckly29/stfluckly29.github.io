/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  swcMinify: false,
  assetPrefix: isProd ? '/stfluckly29.github.io/' : '',
  experimental: {
    scrollRestoration: true,
    nextScriptWorkers: true,
  },
  images: {
    unoptimized: true,
  },

  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
};
