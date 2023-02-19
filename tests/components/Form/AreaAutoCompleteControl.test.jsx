import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AreaAutoCompleteControl from '../../../src/components/Form/AreaAutoCompleteControl';

const places = [
  {
    placeId: '12123123',
    mainText: 'Aspra Spitia',
    secondaryText: 'Viotia'
  }
];

test('AreaAutoCompleteControl renders with autocomplete places container', () => {
  render(<AreaAutoCompleteControl area={{}} error="" places={places} />);

  expect(screen.queryByTestId('places-container')).toBeInTheDocument();
});

test('AreaAutoCompleteControl renders with autocomplete places container not present', () => {
  render(<AreaAutoCompleteControl area={{}} error="" places={[]} />);

  expect(screen.queryByTestId('places-container')).not.toBeInTheDocument();
});

test('AreaAutoCompleteControl renders with error', () => {
  render(<AreaAutoCompleteControl area={{}} error="There is an error" places={places} />);

  expect(screen.queryByTestId('inputFieldInformation-invalid')).toBeInTheDocument();
  expect(screen.getByText('There is an error')).toBeInTheDocument();
});
