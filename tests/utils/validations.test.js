import { adTypes, errorMessages } from '../../src/constants';
import {
  areaValidation,
  priceValidation,
  titleValidation,
  typeValidation
} from '../../src/utils/validations';

test('Validate title', () => {
  expect(titleValidation()).toBe(errorMessages.FIELD_REQUIRED);
  expect(titleValidation('')).toBe(errorMessages.FIELD_REQUIRED);
  expect(titleValidation('asd')).toBe('');
  expect(
    titleValidation(
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    )
  ).toBe(errorMessages.MAX_CHARS(155));
});

test('Validate area', () => {
  expect(areaValidation()).toBe(errorMessages.FIELD_REQUIRED);
  expect(areaValidation({})).toBe(errorMessages.FIELD_REQUIRED);
  expect(areaValidation({ placeId: '' })).toBe(errorMessages.FIELD_REQUIRED);
  expect(areaValidation({ testfield: 'asd' })).toBe(errorMessages.FIELD_REQUIRED);
  expect(areaValidation({ placeId: '1234' })).toBe('');
});

test('Validate type', () => {
  expect(typeValidation()).toBe(errorMessages.FIELD_REQUIRED);
  expect(typeValidation('')).toBe(errorMessages.FIELD_REQUIRED);
  expect(typeValidation('arandomvalue')).toBe(errorMessages.UNSOPPORTED_OPTION);
  expect(typeValidation(adTypes[0])).toBe('');
});

test('Validate price', () => {
  expect(priceValidation()).toBe(errorMessages.FIELD_REQUIRED);
  expect(priceValidation('')).toBe(errorMessages.FIELD_REQUIRED);
  expect(priceValidation('-321.32')).toBe(errorMessages.NOT_NEGATIVE);
  expect(priceValidation('3.14')).toBe('');
});
