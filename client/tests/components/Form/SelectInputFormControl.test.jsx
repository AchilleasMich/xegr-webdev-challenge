import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { SelectInputFormControl } from '../../../src/components/Form';

test('SelectInputFormControl renders corectly', () => {
  render(<SelectInputFormControl field={{ label: 'test' }} error="" options={['a', 'b']} />);

  const input = screen.getByLabelText('test');
  expect(input).toBeInTheDocument();
  expect(screen.queryByTestId('optionid-a')).toBeInTheDocument();
  expect(screen.queryByTestId('optionid-b')).toBeInTheDocument();

  fireEvent.change(input, { target: { value: 'a' } });

  expect(input.value).toBe('a');
});

test('SelectInputFormControl renders with error', () => {
  render(<SelectInputFormControl field={{}} error="There is an error" />);

  expect(screen.queryByTestId('inputFieldInformation-invalid')).toBeInTheDocument();
  expect(screen.getByText('There is an error')).toBeInTheDocument();
});
