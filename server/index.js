const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();

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

const port = 3456;

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
