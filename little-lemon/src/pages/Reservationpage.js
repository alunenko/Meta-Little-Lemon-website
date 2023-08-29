import React from 'react'
import BookingForm from '../components/BookingForm/BookingForm';

const Reservationpage = ({ availableBookingTimes, occasionList, state, handleChange, handleBlur, handleSubmit }) => {
  return (
      <>
        <BookingForm availableBookingTimes={availableBookingTimes}
                     state={state}
                     occasionList={occasionList}
                     handleChange={handleChange}
                     handleBlur={handleBlur}
                     handleSubmit={handleSubmit}/>
      </>
  );
}

export default Reservationpage;
