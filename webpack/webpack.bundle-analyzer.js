const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const prodConfig = require('./webpack.production');

module.exports = {
    ...prodConfig,
    plugins: [
      ...prodConfig.plugins,
        new BundleAnalyzerPlugin()
    ]
};
