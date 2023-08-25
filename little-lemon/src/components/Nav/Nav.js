import React, { Component } from 'react';
import './Nav.css';
import logoImg from '../../assets/logo.svg';

export class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg m-custom">
        <div className="container-fluid">
          <a href="/">
            <img src={logoImg}
                alt="logo" />
          </a>
          <button className="navbar-toggler m-custom"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end"
               id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Reservations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Order Online</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;
