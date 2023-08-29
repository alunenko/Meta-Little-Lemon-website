import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

const initialState = {
  date: '',
  time: '',
  guestsAmount: '',
  occasionList: ['Birthday', 'Engagement', 'Anniversary'],
  occasion: '',
  isConfirmationSuccess: false,
  reservedData: '',
  loading: false,
  isDateTouched: false,
  isDateValid: false,
  isTimeTouched: false,
  isTimeValid: false,
  isGuestsAmountTouched: false,
  isGuestsAmountValid: false,
  isOccasionTouched: false,
  isOccasionValid: false,
  isFormValid: false
};

test('renders static text', () => {
  render(<BookingForm occasionList={initialState.occasionList} availableTimes={[]} state={{}} handleChange={() => {}} />);
  const staticText = screen.getByText('Table reservation:');
  expect(staticText).toBeInTheDocument();
});

describe('BookingForm Validation', () => {
  it('displays validation message for empty date', async () => {
    render(<BookingForm occasionList={initialState.occasionList} availableTimes={[]} state={{ ...initialState, isDateTouched: true }} handleChange={() => {}} />);

    fireEvent.blur(screen.getByLabelText('Choose date* (day by day the available booktime is different)'));

    const validationMessage = await screen.findByText('Required');
    expect(validationMessage).toBeInTheDocument();
  });

  it('displays validation message for empty time', async () => {
    render(<BookingForm occasionList={initialState.occasionList} availableTimes={[]} state={{ ...initialState, isTimeTouched: true }} handleChange={() => {}}/>);

    fireEvent.blur(screen.getByLabelText('Choose time* (related to date field)'));

    const validationMessage = await screen.findByText('Required');
    expect(validationMessage).toBeInTheDocument();
  });

  it('displays validation message for empty guests amount', async () => {
    render(<BookingForm occasionList={initialState.occasionList} availableTimes={[]} state={{ ...initialState, isGuestsAmountTouched: true }} handleChange={() => {}}/>);

    fireEvent.blur(screen.getByLabelText('Number of guests*'));

    const validationMessage = await screen.findByText('Required');
    expect(validationMessage).toBeInTheDocument();
  });

  it('displays validation message for invalid guests amount', async () => {
    render(<BookingForm occasionList={initialState.occasionList} availableTimes={[]} state={{ ...initialState, isGuestsAmountTouched: true, guestsAmount: '1' }} handleChange={() => {}}/>);

    fireEvent.blur(screen.getByLabelText('Number of guests*'));

    const validationMessage = await screen.findByText('Min 2, Max 10 guests');
    expect(validationMessage).toBeInTheDocument();
  });

  it('displays validation message for empty occasion', async () => {
    render(<BookingForm occasionList={initialState.occasionList} availableTimes={[]} state={{ ...initialState, isOccasionTouched: true }} handleChange={() => {}}/>);

    fireEvent.blur(screen.getByLabelText('Occasion*'));

    const validationMessage = await screen.findByText('Required');
    expect(validationMessage).toBeInTheDocument();
  });

  it('disables submit button when form is invalid', () => {
    render(<BookingForm occasionList={initialState.occasionList} availableTimes={[]} state={{ ...initialState }} handleChange={() => {}} handleSubmit={() => {}}/>);

    const submitButton = screen.getByRole('button', { name: 'Make Your reservation' });
    expect(submitButton).toBeDisabled();
  });

  it('enables submit button when form is valid', () => {
    render(
      <BookingForm
        occasionList={initialState.occasionList}
        availableTimes={[]}
        state={{
          ...initialState,
          date: '2023-08-30',
          time: '10:00',
          guestsAmount: '2',
          occasion: 'Birthday',
          isDateValid: true,
          isTimeValid: true,
          isGuestsAmountValid: true,
          isOccasionValid: true,
          isFormValid: true
        }}
        handleChange={() => {}}
        handleSubmit={() => {}}
      />
    );

    const submitButton = screen.getByRole('button', { name: 'Make Your reservation' });
    expect(submitButton).toBeEnabled();
  });
});
