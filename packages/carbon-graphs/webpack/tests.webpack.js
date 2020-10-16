const testFiles = require.context('../tests/unit', true, /\.js$/);
testFiles.keys().forEach(testFiles);
const srcFiles = require.context('../src/main', true, /\.js$/);
srcFiles.keys().forEach(srcFiles);

