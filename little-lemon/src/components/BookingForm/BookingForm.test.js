import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders static text', () => {
  render(<BookingForm availableTimes={[]} state={{}} handleChange={() => {}} />);
  const staticText = screen.getByText('Table reservation:');
  expect(staticText).toBeInTheDocument();
});
