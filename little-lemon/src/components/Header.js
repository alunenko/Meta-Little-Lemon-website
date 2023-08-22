import React, { Component } from 'react';
import Nav from './Nav';

export class Header extends Component {
  render() {
    return (
      <header class="pt-3 pb-3">
        <Nav />
      </header>
    )
  }
}

export default Header