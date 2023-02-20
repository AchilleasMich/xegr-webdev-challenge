// Third party service handlers
const fetch = require('node-fetch');

const fetchPlaces = async (query) => {
  const url = `https://4ulq3vb3dogn4fatjw3uq7kqby0dweob.lambda-url.eu-central-1.on.aws/?input=${query}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return { data: null, error: 'Request failed' };
    }
    const result = await response.json();
    return { data: result, error: '' };
  } catch (error) {
    return {
      data: null,
      error: 'Something went wrong'
    };
  }
};

module.exports = {
  fetchPlaces
};
