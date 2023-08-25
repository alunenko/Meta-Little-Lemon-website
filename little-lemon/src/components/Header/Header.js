import React, { Component } from 'react';
import Nav from '../Nav/Nav';

export class Header extends Component {
  render() {
    return (
      <header className="pt-2 pb-2 fixed-top">
        <Nav />
      </header>
    )
  }
}

export default Header;
