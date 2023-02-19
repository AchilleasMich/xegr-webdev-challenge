import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AreaAutoCompleteFormControl from '../../../src/components/Form/AreaAutoCompleteFormControl';

const places = [
  {
    placeId: '12123123',
    mainText: 'Aspra Spitia',
    secondaryText: 'Viotia'
  }
];

test('AreaAutoCompleteFormControl renders with autocomplete places container', () => {
  render(<AreaAutoCompleteFormControl area={{}} error="" places={places} />);

  expect(screen.queryByTestId('places-container')).toBeInTheDocument();
});

test('AreaAutoCompleteFormControl renders with autocomplete places container not present', () => {
  render(<AreaAutoCompleteFormControl area={{}} error="" places={[]} />);

  expect(screen.queryByTestId('places-container')).not.toBeInTheDocument();
});

test('AreaAutoCompleteFormControl renders with error', () => {
  render(<AreaAutoCompleteFormControl area={{}} error="There is an error" places={places} />);

  expect(screen.queryByTestId('inputFieldInformation-invalid')).toBeInTheDocument();
  expect(screen.getByText('There is an error')).toBeInTheDocument();
});
