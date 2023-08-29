import React from 'react';
import './BookingForm.css';
import {TodayAPI, MaxReservationDateAPI } from '../../api';

const BookingForm = ({ availableBookingTimes, occasionList, state, handleChange, handleBlur, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className='d-flex justify-content-between gap-3'>
        <legend>Table reservation:</legend>
        <div className="form-group">
          <label htmlFor="res-date">Choose date* <span className='form-text'>(day by day the available booktime is different)</span></label>
          <input type="date"
                 required
                 name="date"
                 id="res-date"
                 className='form-control'
                 min={TodayAPI}
                 max={MaxReservationDateAPI}
                 value={state.date}
                 onChange={handleChange}
                 onBlur={handleBlur}/>
          {state.isDateTouched && !state.isDateValid && <div className="validation">Required</div>}
        </div>
        <div className="form-group">
          <label htmlFor="res-time">Choose time* <span className='form-text'>(related to date field)</span></label>
          <select id="res-time"
                  required
                  className='form-control'
                  name="time"
                  value={state.time}
                  onChange={handleChange}
                  onBlur={handleBlur}>
                    <option hidden disabled value=""> -- At first, select the date -- </option>
                    {availableBookingTimes.map((time) => (<option key={time}>{time}</option>))}
          </select>
          {state.isTimeTouched && !state.isTimeValid && <div className="validation">Required</div>}
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of guests*</label>
          <input type="number"
                 required
                 name="guestsAmount"
                 min="2"
                 max="10"
                 id="guests"
                 className='form-control'
                 value={state.guestsAmount}
                 onChange={handleChange}
                 onBlur={handleBlur}/>
            {state.isGuestsAmountTouched && state.guestsAmount == '' && <div className="validation">Required</div>}
            {state.guestsAmount && !state.isGuestsAmountValid && <div className="validation">Min 2, Max 10 guests</div>}
        </div>
        <div className="form-group">
          <label htmlFor="occasion">Occasion*</label>
          <select id="occasion"
                  required
                  name="occasion"
                  className='form-control'
                  value={state.occasion}
                  onChange={handleChange}
                  onBlur={handleBlur}>
              <option hidden disabled value=""> -- select an option -- </option>
              {occasionList.map((value) => (<option key={value}>{value}</option>))}
          </select>
          {state.isOccasionTouched && !state.isOccasionValid && <div className="validation">Required</div>}
        </div>
        <div>
          <button className="ll-button-primary"
                type="submit">Make Your reservation</button>
        </div>
      </fieldset>
    </form>
  );
}

BookingForm.defaultProps = {
  availableBookingTimes: [],
};

export default BookingForm;
