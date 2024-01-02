const jestConfig = require('@cerner/jest-config-terra');

module.exports = {
  ...jestConfig,
  testMatch: [
    '**/carbon-graphs/tests/unit/**/(*.)(test.js)',
    '**/carbon-graphs/tests/unit/**/**/(*.)(test.js)',
  ],
//  setupFiles: [
//    './jest.enzymeSetup.js',
//  ],
//  snapshotSerializers: [
//    'enzyme-to-json/serializer',
//  ],
};
