import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import InputFieldInformation from '../../../src/components/Form/InputFieldInformation';
import { FormControl, Input } from '@chakra-ui/react';

test('InputFieldInformation renders with information', () => {
  render(
    <FormControl>
      <Input />
      <InputFieldInformation isInvalid={false} message="Field is required" />
    </FormControl>
  );

  expect(screen.getByTestId('inputFieldInformation-info')).toBeInTheDocument();
});

test('InputFieldInformation renders with error', () => {
  render(
    <FormControl isInvalid>
      <Input />
      <InputFieldInformation isInvalid={true} message="Field is required" />
    </FormControl>
  );

  expect(screen.getByTestId('inputFieldInformation-invalid')).toBeInTheDocument();
});
