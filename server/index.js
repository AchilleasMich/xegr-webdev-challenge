const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const storage = require('node-persist');

(async () =>
  await storage.init({
    dir: './persist',
    stringify: JSON.stringify,
    parse: JSON.parse,
    encoding: 'utf8',
    logging: true,
    ttl: 24 * 60 * 60 * 1000,
    expiredInterval: 2 * 60 * 1000 // every 2 minutes the process will clean-up the expired cache
  }))();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: '*'
  })
);

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.get('/places', async (req, res) => {
  const url = `https://4ulq3vb3dogn4fatjw3uq7kqby0dweob.lambda-url.eu-central-1.on.aws/?input=${req.query.input}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(500).json({ error: 'Request failed' });
    }

    const result = await response.json();
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/property', async (req, res) => {
  const values = req.body;

  try {
    // pseudo random temporary unique id
    const id = Date.now().toString(16);
    console.log(id, values);
    await storage.setItem(id, { ...values, id: id });

    return res.status(201).send();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/properties', async (_, res) => {
  try {
    const properties = await storage.values();
    return res.json(properties);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
});

const port = 3456;

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
