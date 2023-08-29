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
import { submitAPI } from './api';
import Loader from './components/Loader/Loader';

const initialState = {
  date: '',
  time: '',
  guestsAmount: '',
  occasionList: ['Birthday', 'Engagement', 'Anniversary'],
  occasion: '',
  isConfirmationSuccess: false,
  reservedData: '',
  loading: false,
  isDateTouched: false,
  isDateValid: false,
  isTimeTouched: false,
  isTimeValid: false,
  isGuestsAmountTouched: false,
  isGuestsAmountValid: false,
  isOccasionTouched: false,
  isOccasionValid: false,
  isFormValid: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATE':
      return {
        ...state,
        date: action.payload,
        isDateValid: action.payload !== ''
      };
    case 'TOUCHED_DATE':
      return {
        ...state,
        isDateTouched: action.payload,
      };
    case 'UPDATE_AVAILABLE_TIMES':
      return {
        ...state,
        availableBookingTimes: action.payload
    };
    case 'UPDATE_TIME':
      console.log('UPDATE_TIME ', action.payload, action.payload !== '');
      return {
        ...state,
        time: action.payload,
        isTimeValid: action.payload !== ''
      };
    case 'TOUCHED_TIME':
      return {
        ...state,
        isTimeTouched: action.payload,
      };
    case 'UPDATE_GUESTS':
      return {
        ...state,
        guestsAmount: action.payload,
        isGuestsAmountValid: action.payload >= 2 && action.payload <= 10
      };
    case 'TOUCHED_GUESTS':
      return {
        ...state,
        isGuestsAmountTouched: action.payload,
      };
    case 'UPDATE_OCCASION':
      return {
        ...state,
        occasion: action.payload,
        isOccasionValid: action.payload !== ''
      };
    case 'TOUCHED_OCCASION':
      return {
        ...state,
        isOccasionTouched: action.payload,
      };
    case 'FORM_VALID':
      return {
        ...state,
        isFormValid: state.isDateValid && state.isTimeValid && state.isGuestsAmountValid && state.isOccasionValid
      };
    case 'SUCCESS_RESERVATION':
      return {
        ...state,
        isConfirmationSuccess: !state.isConfirmationSuccess,
        reservedData: action.payload
      };
    case 'LOADING':
      return {
        ...state,
        loading: !state.loading
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
      dispatch({
        type: 'UPDATE_DATE',
        payload: value
      });
      dispatch({
        type: 'UPDATE_AVAILABLE_TIMES',
        payload: initializeTimes(value)
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

    dispatch({
      type: 'FORM_VALID'
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === 'date') {
      dispatch({
        type: 'TOUCHED_DATE',
        payload: true
      });
    } else if (name === 'time') {
      dispatch({
        type: 'TOUCHED_TIME',
        payload: true
      });
    } else if (name === 'guestsAmount') {
      dispatch({
        type: 'TOUCHED_GUESTS',
        payload: true
      });
    } else if (name === 'occasion') {
      dispatch({
        type: 'TOUCHED_OCCASION',
        payload: true
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    document.body.classList.add('no-scroll');

    dispatch({
      type: 'LOADING'
    });

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    submitAPI(formJson).then((reservedData) => {
      console.log('responseData ', reservedData);
      if(reservedData) {
        dispatch({
          type: 'LOADING'
        });

        document.body.classList.remove('no-scroll');

        dispatch({
          type: 'SUCCESS_RESERVATION',
          payload: JSON.parse(reservedData)
        });
      }
    });
  };

  return (
    <>
      {bookingState.loading && <Loader />}
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
                occasionList={bookingState.occasionList}
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
              /> : <ConfirmedBooking reservedData={bookingState.reservedData}/>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
