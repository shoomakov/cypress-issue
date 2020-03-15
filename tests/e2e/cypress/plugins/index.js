const browserify = require('@cypress/browserify-preprocessor');
const { initPlugin } = require('cypress-plugin-snapshots/plugin');


module.exports = (on, config) => {
  const options = browserify.defaultOptions;

  options.browserifyOptions.plugin.unshift(['tsify']);

  on('file:preprocessor', browserify(options));

  initPlugin(on, config);

  return config;
};
