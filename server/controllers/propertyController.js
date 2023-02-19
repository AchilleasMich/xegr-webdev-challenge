const { getAll, persistProperty } = require('../services/persistService');

const addNewProperty = async (req, res) => {
  const values = req.body;

  try {
    await persistProperty(values);
    return res.status(201).send();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
};

const getAllproperties = async (_, res) => {
  try {
    const properties = await getAll();
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
