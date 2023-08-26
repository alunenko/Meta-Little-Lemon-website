import React, { Component } from 'react';
import Specials from '../components/Specials';
import Card from '../components/Card';
import Hero from '../components/Hero';

export class Homepage extends Component {
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

  render() {
    return (
      <>
        <Hero />
        <Specials />
        <section className='card-wrapper d-flex gap-4 p-4 pt-0 pb-0'>
          <Card />
          <Card />
          <Card />
        </section>
      </>
    )
  }
}

export default Homepage;
