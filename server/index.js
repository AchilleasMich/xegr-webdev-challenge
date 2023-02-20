const express = require('express');
const cors = require('cors');
const { getAllproperties, addNewProperty } = require('./controllers/propertyController');
const { getPlaces } = require('./controllers/placesController');
const { corsMiddleware } = require('./middlewares');
const persist = require('./services/persistService');

persist.initStorage();
const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(corsMiddleware);

app.get('/places', getPlaces);
app.post('/property', addNewProperty);
app.get('/properties', getAllproperties);

const port = 3456;

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
