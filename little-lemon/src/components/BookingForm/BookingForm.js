import React, { Component } from 'react';
import './BookingForm.css';

const BookingForm = ({ availableTimes, state, handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form onSubmit={this.handleSubmit}>
      <fieldset className='d-flex justify-content-between gap-3'>
        <legend>Table reservation:</legend>
        <div className="form-group">
          <label htmlFor="res-date">Choose date*</label>
          <input type="date"
                 required
                 name="date"
                 id="res-date"
                 className='form-control'
                 value={state.date}
                 onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="res-time">Choose time*</label>
          <select id="res-time"
                  required
                  className='form-control'
                  name="time"
                  value={state.time}
                  onChange={handleChange}>
                    {availableTimes.map(time => (<option key={time}>{time}</option>))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of guests*</label>
          <input type="number"
                 required
                 name="guestsAmount"
                 min="1"
                 max="10"
                 id="guests"
                 className='form-control'
                 value={state.guestsAmount}
                 onChange={handleChange}/>
        </div>
        <div className="form-group">
        <label htmlFor="occasion">Occasion*</label>
        <select id="occasion"
                required
                name="occasion"
                className='form-control'
                value={state.occasion}
                onChange={handleChange}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        </div>
        <div>
          <button className="ll-button-primary"
                type="submit">Make Your reservation</button>
        </div>
      </fieldset>
    </form>
  );
}

export default BookingForm;
