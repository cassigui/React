import { render, screen } from '@testing-library/react';
import App from './App';

test('Teste do teste', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
