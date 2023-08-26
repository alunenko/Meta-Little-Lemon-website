import React, { Component } from 'react'
import BookingForm from '../components/BookingForm/BookingForm';

const Reservationpage = ({ availableTimes, state, handleChange }) => {
  return (
      <>
        <BookingForm availableTimes={availableTimes} state={state} handleChange={handleChange}/>
      </>
  );
}

export default Reservationpage
