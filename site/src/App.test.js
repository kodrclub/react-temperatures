import { render, screen } from '@testing-library/react';
import App from './App';

test('renders celsius input', () => {
  render(<App />);
  const celsiusElement = screen.getByText(/Celsius/i);
  expect(celsiusElement).toBeInTheDocument();
});

test('renders fahrenheit input', () => {
  render(<App />);
  const fahrenheitElement = screen.getByText(/fahrenheit/i);
  expect(fahrenheitElement).toBeInTheDocument();
});

test('renders veredict (idle)', () => {
  render(<App />);
  const veredictElement = screen.getByText(/waiting/i);
  expect(veredictElement).toBeInTheDocument();
});
