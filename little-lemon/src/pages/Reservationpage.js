import React, { Component } from 'react'
import BookingForm from '../components/BookingForm/BookingForm';

export class Reservationpage extends Component {
  render(props) {
    const { availableTimes, state, handleChange } = this.props;

    return (
        <>
          <BookingForm availableTimes={availableTimes} state={state} handleChange={handleChange}/>
        </>
    )
  }
}

export default Reservationpage