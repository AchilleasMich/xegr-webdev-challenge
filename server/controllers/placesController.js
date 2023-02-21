const { createCache } = require('../services/cacheService');
const { fetchPlaces } = require('../services/placesService');

const placesCache = createCache(3600);

const getPlaces = async (req, res) => {
  const {
    input
  } = req.query;

  if (!input) res.status(400).json({ error: 'Malformed input' })

  const cached = placesCache.get(req.query.input);
  if (cached) {
    return res.json(cached);
  }

  const resp = await fetchPlaces(req.query.input);
  if (resp.error) {
    return res.status(500).json({ error: resp.error });
  }

  placesCache.set(input, resp.data);
  return res.json(resp.data);
};

module.exports = {
  getPlaces
};
