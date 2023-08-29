import React from 'react'
import BookingForm from '../components/BookingForm/BookingForm';

const Reservationpage = ({ availableBookingTimes, state, handleChange, handleSubmit }) => {
  return (
      <>
        <BookingForm availableBookingTimes={availableBookingTimes}
                     state={state}
                     handleChange={handleChange}
                     handleSubmit={handleSubmit}/>
      </>
  );
}

export default Reservationpage;
