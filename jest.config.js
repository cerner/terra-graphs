// const jestConfig = require('@cerner/jest-config-terra');

module.exports = {
//  ...jestConfig,
  preset: 'jest-puppeteer',
  //    testEnvironment:"jsdom",
  testEnvironmentOptions: {
    browsers: [
      'chrome',
      'firefox',
      'safari',
    ],
  },
  testMatch: [
    '**/carbon-graphs/tests/unit/controls/Bar/(*.)(test.js)',
    '**/carbon-graphs/tests/unit/controls/Carbon/(*.)(test.js)',
    '**/carbon-graphs/tests/unit/controls/Scatter/(*.)(test.js)',
    '**/carbon-graphs/tests/unit/controls/Pie/(*.)(test.js)',
    // The patterns below are temporarily commented out as not all tests are updated to work with Jest.
    // Updating them is currently a work in progress.
    // '**/tests/unit/**/(*.)(test.js)',
    // '**/tests/unit/**/**/(*.)(test.js)',
  ],
};
