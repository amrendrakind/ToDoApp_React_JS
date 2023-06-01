import { render, screen } from '@testing-library/react';
import App from './App';

test('should render the "Learn React" link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
