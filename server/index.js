const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { getAllproperties, addNewProperty } = require('./controllers/propertyController');
const { getPlaces } = require('./controllers/placesController');
const { corsMiddleware } = require('./middlewares');
const persist = require('./services/persistService');

persist.initStorage();
const app = express();
app.use(morgan('tiny'));

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(corsMiddleware);

app.get('/places', getPlaces);
app.post('/property', addNewProperty);
app.get('/properties', getAllproperties);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
