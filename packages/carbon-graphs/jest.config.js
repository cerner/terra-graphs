const jestConfig = require('@cerner/jest-config-terra');

module.exports = {
//  ...jestConfig,
  globals: { testURL: 'http://localhost:3000/tests/unit/helpers/static.html' },
//  preset: 'jest-puppeteer',
  testMatch: [
    '**/tests/unit/**/(*.)(test.js)',
    '**/tests/unit/**/**/(*.)(test.js)',
  ],
  testEnvironment: 'jsdom',
//    setupFiles: [
//      './jest.enzymeSetup.js',
//    ],
  verbose: true,
//  globalSetup: './global-setup.js',
//  globalTeardown: './global-teardown.js',
  //  snapshotSerializers: [
  //    'enzyme-to-json/serializer',
  //  ],
};
