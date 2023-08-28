import './App.css';
import React, { useState, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Reservationpage from './pages/Reservationpage';
import initializeTimes from './components/BookingForm/BookingTimes/BookingTimes';
import updateTimes from './components/BookingForm/UpdateTimes/UpdateTimes';

const initialState = {
  date: '',
  time: '',
  guestsAmount: 1,
  occasion: 'Birthday'
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATE':
      return {
        ...state,
        date: action.payload
      };
    default:
      return state;
  }
};

const App = () => {
  const [bookingState, dispatch] = useReducer(reducer, initialState);

  const handleBookingInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_DATE',
      payload: value
    });
  }

  const availableBookingTimes = initializeTimes(bookingState.date);

  const updateTimes = () => {
    return availableBookingTimes;
  };

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route
            path="/reserve-a-table"
            element={
              <Reservationpage
                availableTimes={availableBookingTimes}
                state={bookingState}
                handleChange={handleBookingInputChange}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
