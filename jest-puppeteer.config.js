const path = require('path');

const CRX_PATH = path.resolve(__dirname, './dist/unzipped_chrome_extension');

module.exports = {
  launch: {
    headless: 'chrome', // Extensions won't load if headerless=true
    // headless: false,  // Add this to debug
    args: [
      `--disable-extensions-except=${CRX_PATH}`,
      `--load-extension=${CRX_PATH}`,
    ],
  },
};
