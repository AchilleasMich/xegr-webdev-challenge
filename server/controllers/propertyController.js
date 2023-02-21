const { createCache } = require('../services/cacheService');
const { getAll, persistProperty } = require('../services/persistService');

const propertyCache = createCache(600);

const addNewProperty = async (req, res) => {
  const values = req.body;

  if (!isNewPropertyInputValid(values)) {
    res.status(400).json({ error: 'Malformed input' })
  }

  try {
    await persistProperty(values);

    // delete cache entry since it is now invalid
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
    return res.json(cachedProperties);
  }

  try {
    const properties = await getAll();

    // set the result in cache for future reference
    propertyCache.set('properties', properties);
    return res.json(properties);
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred' });
  }
};


const isNewPropertyInputValid = (values) => {
  const {
    title,
    area,
    type,
    price,
  } = values;

  if (!title) return false
  if (title.length > 155) return false
  if (!type) return false
  if (!price) return false
  if (!area) return false
  if (!area.placeId) return false
  return true
}

module.exports = {
  getAllproperties,
  addNewProperty
};
