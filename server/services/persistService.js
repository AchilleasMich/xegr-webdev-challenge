// Pseudo persistant storge solution for the solution
// Values are persisted in files
const storage = require('node-persist');

const initStorage = async () =>
  await storage.init({
    dir: './persist',
    stringify: JSON.stringify,
    parse: JSON.parse,
    encoding: 'utf8',
    logging: true,
    ttl: 24 * 60 * 60 * 1000,
    expiredInterval: 2 * 60 * 1000 // every 2 minutes the process will clean-up the expired cache
  });

const getAll = async () => {
  const res = await storage.values();
  return res;
};

const persistProperty = async (values) => {
  // pseudo random temporary unique id
  const id = Date.now().toString(16);
  await storage.setItem(id, { ...values, id });
};

module.exports = {
  initStorage,
  persistProperty,
  getAll
};
