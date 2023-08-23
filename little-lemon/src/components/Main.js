import React, { Component } from 'react';
import Specials from './Specials';
import Card from './Card';
import Hero from './Hero';

export class Main extends Component {
  render() {
    return (
      <main>
        <Hero />
        <Specials />
        <section className='card-wrapper d-flex gap-4 p-4 pt-0 pb-0'>
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    )
  }
}

export default Main