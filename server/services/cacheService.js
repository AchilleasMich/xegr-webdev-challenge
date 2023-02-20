const NodeCache = require('node-cache');
const createCache = (ttl) => {
  return new NodeCache({ stdTTL: ttl });
};

module.exports = {
  createCache
};
