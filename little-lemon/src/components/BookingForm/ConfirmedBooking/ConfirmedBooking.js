import './ConfirmedBooking.css';
import React from 'react';

const ConfirmedBooking = ({reservedData}) => {
  console.log('ConfirmedBooking reservationMessage ', reservedData);
  return (
    <div className="d-flex container m-custom justify-content-center flex-column">
      <p>We're excited to confirm your reservation for an <span>{reservedData.occasion}</span> celebration on <span>{reservedData.date}</span> at <span>{reservedData.time}</span>.</p>
      <p>Your party of <span>{reservedData.guestsAmount} guests</span>  will be joining us for this special occasion. We look forward to providing you with a wonderful experience!</p>
    </div>
  )
}

export default ConfirmedBooking;
