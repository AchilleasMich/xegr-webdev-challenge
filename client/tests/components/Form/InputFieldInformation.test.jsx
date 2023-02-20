import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import InputFieldInformation from '../../../src/components/Form/helpers/InputFieldInformation';
import { FormControl, Input } from '@chakra-ui/react';

test('InputFieldInformation renders with information', () => {
  render(
    <FormControl>
      <Input />
      <InputFieldInformation info="Field is required" />
    </FormControl>
  );

  expect(screen.getByTestId('inputFieldInformation-info')).toBeInTheDocument();
});

test('InputFieldInformation renders with error', () => {
  render(
    <FormControl isInvalid>
      <Input />
      <InputFieldInformation error="There is an error" info="Field is required" />
    </FormControl>
  );

  expect(screen.getByTestId('inputFieldInformation-invalid')).toBeInTheDocument();
});
