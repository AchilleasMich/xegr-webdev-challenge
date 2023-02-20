const { createCache } = require('../services/cacheService');
const { fetchPlaces } = require('../services/placesService');

const placesCache = createCache(3600);

const getPlaces = async (req, res) => {
  const cached = placesCache.get(req.query.input);
  if (cached) {
    return res.json(cached);
  }

  const resp = await fetchPlaces(req.query.input);
  if (resp.error) {
    return res.status(500).json({ error: resp.error });
  }

  placesCache.set(req.query.input, resp.data);
  return res.json(resp.data);
};

module.exports = {
  getPlaces
};
