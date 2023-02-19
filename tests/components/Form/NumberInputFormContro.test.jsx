import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { NumberInputFormControl } from '../../../src/components/Form';

test('NumberInputFormControl renders corectly', () => {
  render(
    <NumberInputFormControl
      field={{ label: 'test', input: { placeholder: 'placeholdertext' } }}
      error=""
    />
  );

  const input = screen.getByLabelText('test');
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: '123456' } });
  expect(screen.queryByDisplayValue('123456')).toBeInTheDocument();
});

test('NumberInputFormControl does not accept non numeric values', () => {
  render(
    <NumberInputFormControl
      field={{ label: 'test', input: { placeholder: 'placeholdertext' } }}
      error=""
    />
  );

  const input = screen.getByLabelText('test');

  fireEvent.change(input, { target: { value: 'notanumber' } });
  expect(screen.queryByDisplayValue('notanumber')).not.toBeInTheDocument();

  fireEvent.change(input, { target: { value: '123' } });
  expect(screen.queryByDisplayValue('123')).toBeInTheDocument();
});

test('NumberInputFormControl renders with error', () => {
  render(<NumberInputFormControl field={{}} error="There is an error" />);

  expect(screen.queryByTestId('inputFieldInformation-invalid')).toBeInTheDocument();
  expect(screen.getByText('There is an error')).toBeInTheDocument();
});
