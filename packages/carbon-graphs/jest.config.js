const jestConfig = require('@cerner/jest-config-terra');

module.exports = {
  ...jestConfig,
  testMatch: [
    '**/tests/unit/controls/Bar/(*.)(test.js)',
    '**/tests/unit/controls/Carbon/(*.)(test.js)',
    '**/tests/unit/controls/Scatter/(*.)(test.js)',
    '**/tests/unit/controls/Pie/(*.)(test.js)',
    // The patterns below are temporarily commented out as not all tests are updated to work with Jest.
    // Updating them is currently a work in progress.
    // '**/tests/unit/**/(*.)(test.js)',
    // '**/tests/unit/**/**/(*.)(test.js)',
  ],
};
