import React, { Component } from 'react'
import BookingForm from '../components/BookingForm/BookingForm';
import ConfirmedBooking from '../components/BookingForm/ConfirmedBooking/ConfirmedBooking'

const Reservationpage = ({ availableTimes, state, handleChange, handleSubmit }) => {
  return (
      <>
        <BookingForm availableTimes={availableTimes}
                     state={state}
                     handleChange={handleChange}
                     handleSubmit={handleSubmit}/>
      </>
  );
}

export default Reservationpage;
