export const adTypes = ['Rent', 'Buy', 'Exchange', 'Donate'];

export const infoMessage = {
  FIELD_REQUIRED: '*Field is Required',
  FIELD_PLACEHOLDER: (field) => `Please Provide ${field}`,
  PROPERTY_ADDED: 'Property Added Successfully'
};

export const errorMessages = {
  FIELD_REQUIRED: '* Field is Required',
  MAX_CHARS: (max) => `Field must not exceed ${max} chars`,
  NOT_NEGATIVE: 'Field can only accept positive values',
  UNSOPPORTED_OPTION: 'The option is not supported',
  FAIL_CREATE_PROPERTY: 'Failed to create new property',
  FAIL_FETCH_PLACES: 'Failed to fetch suggestions',
  GENERIC_ERROR: 'Something went wrong...'
};

const API_URL = `http://${import.meta.env.VITE_PROPERTIES_API_URL}:${
  import.meta.env.VITE_PROPERTIES_API_PORT
}`;
export const FETCH_PLACES_URL = `${API_URL}/places`;
export const FETCH_PROPERTIES_URL = `${API_URL}/properties`;
export const POST_PROPERTY_URL = `${API_URL}/property`;
