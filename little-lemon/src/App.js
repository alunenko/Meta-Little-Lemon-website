import './App.css';
import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Reservationpage from './pages/Reservationpage';

class App extends Component {
  constructor(props) {
    super(props);

    this.availableBookingTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00"
    ];

    this.state = {
      bookingState: {
        date: '',
        time: this.availableBookingTimes[1],
        guestsAmount: 1,
        occasion: 'Birthday'
      }
    };
  }

  handleBookingInputChange = (e) => {
    const { name, value } = e.target;
    this.setState( (prevstate) => ({
      bookingState: {
        ...prevstate.bookingState,
        [name]: value
      }
    }));
  }

  render () {
    return (
      <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/reserve-a-table" element={<Reservationpage availableTimes={this.availableBookingTimes} state={this.state.bookingState} handleChange={this.handleBookingInputChange}/>} />
          </Routes>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
