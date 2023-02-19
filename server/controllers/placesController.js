const { fetchPlaces } = require('../services/placesService');

const getPlaces = async (req, res) => {
  const resp = await fetchPlaces(req.query.input);
  if (resp.error) {
    return res.status(500).json({ error: resp.error });
  }
  return res.json(resp.data);
};

module.exports = {
  getPlaces
};
