import React, { Component } from 'react';
import Nav from './Nav';

export class Header extends Component {
  render() {
    return (
      <header className="pt-sm-2 pt-lg-4 pb-sm-2 pb-lg-4">
        <Nav />
      </header>
    )
  }
}

export default Header