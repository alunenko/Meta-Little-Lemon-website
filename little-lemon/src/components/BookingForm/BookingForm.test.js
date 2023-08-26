import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm'; // Make sure to import the correct path

test('renders static text', () => {
  render(<BookingForm availableTimes={[]} state={{}} handleChange={() => {}} />);
  const staticText = screen.getByText('Table reservation:');
  expect(staticText).toBeInTheDocument();
});
