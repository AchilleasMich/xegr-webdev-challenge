import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

test('App renders', () => {
  render(<App />);

  expect(screen.getByTestId('xe-webdev-challenge')).toBeInTheDocument();
});
