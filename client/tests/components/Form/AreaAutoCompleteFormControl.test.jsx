import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import AreaAutoCompleteFormControl from '../../../src/components/Form/AreaAutoCompleteFormControl';

const area = {
  label: 'test',
  input: {
    name: 'test'
  },
  control: {
    value: {
      placeId: '',
      mainText: 'Magoula',
      secondaryText: ''
    },
    setValue: vi.fn()
  }
};
const selectedArea = {
  label: 'test',
  input: {
    name: 'test'
  },
  control: {
    value: {
      placeId: '123123',
      mainText: 'Magoula',
      secondaryText: ''
    },
    setValue: vi.fn()
  }
};

const places = [
  {
    placeId: '12123123',
    mainText: 'Aspra Spitia',
    secondaryText: 'Viotia'
  }
];

test('AreaAutoCompleteFormControl renders and autocomplete places container appears when on focused', () => {
  render(<AreaAutoCompleteFormControl area={area} error="" places={places} />);
  act(() => screen.getByLabelText('test').focus());

  expect(screen.queryByTestId('places-container')).toBeInTheDocument();
});

test('AreaAutoCompleteFormControl renders with autocomplete places container not open by default when not focused', () => {
  render(<AreaAutoCompleteFormControl area={area} error="" places={[]} />);

  expect(screen.queryByTestId('places-container')).not.toBeInTheDocument();
});

test('AreaAutoCompleteFormControl renders with autocomplete places container not open when place id present (selected from autocomplete)', () => {
  render(<AreaAutoCompleteFormControl area={selectedArea} error="" places={[]} />);

  expect(screen.queryByTestId('places-container')).not.toBeInTheDocument();
});

test('AreaAutoCompleteFormControl renders with error', () => {
  render(<AreaAutoCompleteFormControl area={area} error="There is an error" places={places} />);

  expect(screen.queryByTestId('inputFieldInformation-invalid')).toBeInTheDocument();
  expect(screen.getByText('There is an error')).toBeInTheDocument();
});
