import React from 'react';
import { render, screen } from '@testing-library/react'; // Import necessary testing utilities
import '@testing-library/jest-dom'; // Import for extended Jest matchers
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
