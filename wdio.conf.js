const path = require('path');
const { config }  = require('@cerner/terra-functional-testing');

if (process.env.npm_package_name !== 'terra-graphs') {
  config.specs = [path.join(__dirname, 'packages', process.env.npm_package_name, 'tests', 'wdio', '**', '*-spec.js')];
}

exports.config = config;
