import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  console.log(process.env.NODE_ENV);
  render(<App />);
  const linkElement = screen.getByText('About');
  expect(linkElement).toBeInTheDocument();
});
