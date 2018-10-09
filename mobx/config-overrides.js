const rewireMobX = require('react-app-rewire-mobx');

module.exports = function override(config, env) {
  config = rewireMobX(config, env);
  console.log('config', config);
  return config;
}
