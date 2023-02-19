export const adTypes = ['Rent', 'Buy', 'Exchange', 'Donate'];

export const infoMessage = {
  FIELD_REQUIRED: 'Field is Required',
  FIELD_PLACEHOLDER: (field) => `Please Provide ${field}`
};

export const errorMessages = {
  FIELD_REQUIRED: 'Field is Required',
  MAX_CHARS: (max) => `Field must not exceed ${max} chars`,
  NOT_NEGATIVE: 'Field can only accept positive values',
  UNSOPPORTED_OPTION: 'The option is not supported'
};
