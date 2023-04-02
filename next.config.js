
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack(config) {
      config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack', 'url-loader']
      });

      return config;
  },
  compiler: {styledComponents: true}

});
