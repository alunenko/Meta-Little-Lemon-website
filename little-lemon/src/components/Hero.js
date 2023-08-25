import React, { Component } from 'react';
import brushettaSrc from '../assets/content/brushetta.jpg';

export class Hero extends Component {
  render() {
    return (
      <>
        <div className="full-screen-wrapper">
          <article className="home-main-article p-4 p-lg-0 position-relative">
            <h1>Little Lemon</h1>
            <img src={brushettaSrc}
                 alt="Brushetta" />
            <small>Chicago</small>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <a href="/reserve-a-table" role="button" className='ll-button-primary mt-3 mt-lg-0'>Reserve a Table</a>
          </article>
        </div>
        <div className="clearfix"></div>
      </>
    )
  }
}

export default Hero