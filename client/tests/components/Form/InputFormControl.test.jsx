import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { InputFormControl } from '../../../src/components/Form';

test('InputFormControl renders corectly', () => {
  render(
    <InputFormControl
      field={{ label: 'test', input: { placeholder: 'placeholdertext' } }}
      error=""
    />
  );

  const input = screen.getByLabelText('test');
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: 'This is a test value' } });

  expect(screen.queryByDisplayValue('This is a test value')).toBeInTheDocument();
});

test('InputFormControl renders with error', () => {
  render(<InputFormControl field={{}} error="There is an error" />);

  expect(screen.queryByTestId('inputFieldInformation-invalid')).toBeInTheDocument();
  expect(screen.getByText('There is an error')).toBeInTheDocument();
});
