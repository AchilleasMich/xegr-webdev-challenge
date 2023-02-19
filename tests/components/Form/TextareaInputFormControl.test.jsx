import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { TextareaInputFormControl } from '../../../src/components/Form';

test('TextareaInputFormControl renders corectly', () => {
  render(
    <TextareaInputFormControl
      field={{ label: 'test', input: { placeholder: 'placeholdertext' } }}
      error=""
    />
  );

  const input = screen.getByLabelText('test');
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: 'This is a test value' } });

  expect(screen.queryByDisplayValue('This is a test value')).toBeInTheDocument();
});

test('TextareaInputFormControl renders with error', () => {
  render(<TextareaInputFormControl field={{}} error="There is an error" />);

  expect(screen.queryByTestId('inputFieldInformation-invalid')).toBeInTheDocument();
  expect(screen.getByText('There is an error')).toBeInTheDocument();
});
