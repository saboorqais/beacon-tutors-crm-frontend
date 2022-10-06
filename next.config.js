
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  webpack(config) {
      config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack', 'url-loader']
      });

      return config;
  },
  compiler: {styledComponents: true}

});
