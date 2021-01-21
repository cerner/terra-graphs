const terraDevSiteWebpackConfig = require('terra-dev-site/config/webpack/webpack.config');
const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { jsOptions, cssOptions } = require('./packages/carbon-graphs/webpack/helpers/rules');

const webpackConfig = (env) => ({
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.(less|css)$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'less-loader' }
        ]
        //   use: [MiniCssExtractPlugin.loader, ...cssOptions(env.TYPE)],
        }
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `./${folder}css/carbon-graphs.css`,
        chunkFilename: `./${folder}css/carbon-graphs.css`,
      }),
    ],
    stats: {
      colors: true,
      errorDetails: true,
      chunks: false,
      entrypoints: false,
      chunkModules: false,
      chunkOrigins: false,
      modules: false,
      warnings: false,
    }
});

module.exports = env => {

    return merge(terraDevSiteWebpackConfig, webpackConfig(env));
}

module.exports = terraDevSiteWebpackConfig;
