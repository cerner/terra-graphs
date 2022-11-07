const { merge } = require('webpack-merge');
const {
  TerraDevSite,
} = require('@cerner/terra-dev-site');
const path = require('path');

const WebpackConfigTerra = require('@cerner/webpack-config-terra');

const coreConfig = (env = {}) => ({
  plugins: [
    new TerraDevSite({
      defaultLocale: env.defaultLocale,
      defaultTheme: 'orion-fusion-theme',
      primaryNavigationItems: [{
        path: '/home',
        label: 'Home',
        contentExtension: 'home',
        additionalContent: [
          {
            label: 'Home',
            filePath: path.resolve(process.cwd(), 'README.md'),
          },
        ],
      }, {
        path: '/graphs',
        label: 'Graphs',
        contentExtension: 'graph',
      }, {
        path: '/tests',
        label: 'Tests',
        contentExtension: 'test',
      }],
    }),
  ],
  resolve: {
    fallback: {
      util: require.resolve('util/'),
    },
  },
});

const mergedConfig = (env, argv) => (
  merge(WebpackConfigTerra(env, argv), coreConfig())
);

module.exports = mergedConfig;
