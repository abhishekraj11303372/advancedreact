import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/edit/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders characters', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders numbers', () => {
  render(<App />);
  const linkElement = screen.getByText(/1/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders special characters', () => {
  render(<App />);
  const linkElement = screen.getByText(/#/i);
  expect(linkElement).toBeInTheDocument();
});
