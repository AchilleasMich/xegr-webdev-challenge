import { adTypes, errorMessages } from '../constants';

export const titleValidation = (title) => {
  if (!title) return errorMessages.FIELD_REQUIRED;
  if (title.length > 155) return errorMessages.MAX_CHARS(155);
  return '';
};

export const areaValidation = (area) => {
  if (!area) return errorMessages.FIELD_REQUIRED;
  if (!area.placeId) return errorMessages.FIELD_REQUIRED;
  return '';
};

export const typeValidation = (type) => {
  if (!type) return errorMessages.FIELD_REQUIRED;
  if (!adTypes.includes(type)) return errorMessages.UNSOPPORTED_OPTION;
  return '';
};

export const priceValidation = (price) => {
  if (!price) return errorMessages.FIELD_REQUIRED;
  if (Number.parseFloat(price) < 0) return errorMessages.NOT_NEGATIVE;
  return '';
};
