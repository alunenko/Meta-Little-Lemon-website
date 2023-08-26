import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import updateTimes from './components/BookingForm/UpdateTimes/UpdateTimes';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText('Little Lemon');
  expect(linkElement).toBeInTheDocument();
});
