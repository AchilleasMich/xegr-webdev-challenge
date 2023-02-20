const { createCache } = require('../services/cacheService');
const { getAll, persistProperty } = require('../services/persistService');

const propertyCache = createCache(600);

const addNewProperty = async (req, res) => {
  const values = req.body;
  try {
    await persistProperty(values);
    propertyCache.del('properties');
    return res.status(201).send();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
};

const getAllproperties = async (_, res) => {
  cachedProperties = propertyCache.get('properties');
  if (cachedProperties) {
    console.log('respond with cache');
    return res.json(cachedProperties);
  }

  try {
    const properties = await getAll();
    propertyCache.set('properties', properties);
    return res.json(properties);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = {
  getAllproperties,
  addNewProperty
};
