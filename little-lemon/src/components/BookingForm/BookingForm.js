import React, { Component } from 'react';
import './BookingForm.css';

export class BookingForm extends Component {
  constructor(props) {
    super(props);

    this.availableTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00"
    ];

    this.state = {
      date: '',
      time: this.availableTimes[1],
      guestsAmount: 1,
      occasion: 'Birthday'
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  render() {
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
                   value={this.state.date}
                   onChange={this.handleInputChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="res-time">Choose time*</label>
            <select id="res-time"
                    required
                    className='form-control'
                    name="time"
                    value={this.state.time}
                    onChange={this.handleInputChange}>
                      {this.availableTimes.map(time => (<option key={time}>{time}</option>))}
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
                   value={this.state.guestsAmount}
                   onChange={this.handleInputChange}/>
          </div>
          <div className="form-group">
          <label htmlFor="occasion">Occasion*</label>
          <select id="occasion"
                  required
                  name="occasion"
                  className='form-control'
                  value={this.state.occasion}
                  onChange={this.handleInputChange}>
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
    )
  }
}

export default BookingForm;
