import React, { Component } from 'react';
import Specials from '../components/Specials';
import Card from '../components/Card';
import Hero from '../components/Hero';

export class Homepage extends Component {
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
