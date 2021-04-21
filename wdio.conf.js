const path = require('path');
const { config } = require('@cerner/terra-functional-testing/lib/config/wdio.conf');

if (process.env.npm_package_name !== 'terra-graphs') {
  config.specs = [path.join(__dirname, 'packages', process.env.npm_package_name, 'tests', 'wdio', '**', '*-spec.js')];
}

const travis = process.env.TRAVIS;

if (travis) {
  config.host = 'localhost';
}

exports.config = config;