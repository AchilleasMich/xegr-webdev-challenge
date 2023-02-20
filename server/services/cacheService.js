// Quick cache solutions use localstorage like api
const NodeCache = require('node-cache');
const createCache = (ttl) => {
  return new NodeCache({ stdTTL: ttl });
};

module.exports = {
  createCache
};
