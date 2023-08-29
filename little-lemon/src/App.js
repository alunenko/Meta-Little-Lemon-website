import './App.css';
import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Reservationpage from './pages/Reservationpage';
import initializeTimes from './components/BookingForm/BookingTimes/BookingTimes';
import ConfirmedBooking from './components/BookingForm/ConfirmedBooking/ConfirmedBooking';

const initialState = {
  date: '',
  time: '',
  guestsAmount: 1,
  occasion: 'Birthday',
  isConfirmationSuccess: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATE':
      return {
        ...state,
        date: action.payload
      };
    case 'UPDATE_AVAILABLE_TIMES':
      return {
        ...state,
        availableBookingTimes: action.payload
    };
    case 'UPDATE_TIME':
      return {
        ...state,
        time: action.payload
      };
    case 'UPDATE_GUESTS':
      return {
        ...state,
        guestsAmount: action.payload
      };
    case 'UPDATE_OCCASION':
      return {
        ...state,
        occasion: action.payload
      };
    case 'SUCCESS_RESERVATION':
      return {
        ...state,
        isConfirmationSuccess: !state.isConfirmationSuccess
      };
    default:
      return state;
  }
};


const App = () => {
  const [bookingState, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'date') {
      const availableBookingTimes = initializeTimes(value);
      console.log('App handleChange availableBookingTimes ', availableBookingTimes);
      dispatch({
        type: 'UPDATE_DATE',
        payload: value
      });
      dispatch({
        type: 'UPDATE_AVAILABLE_TIMES',
        payload: availableBookingTimes
      });
    } else if (name === 'time') {
      dispatch({
        type: 'UPDATE_TIME',
        payload: value
      });
    } else if (name === 'guestsAmount') {
      dispatch({
        type: 'UPDATE_GUESTS',
        payload: value
      });
    } else if (name === 'occasion') {
      dispatch({
        type: 'UPDATE_OCCASION',
        payload: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    dispatch({
      type: 'SUCCESS_RESERVATION'
    });
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
              !bookingState.isConfirmationSuccess ? <Reservationpage
                availableBookingTimes={bookingState.availableBookingTimes}
                state={bookingState}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              /> : <ConfirmedBooking/>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
