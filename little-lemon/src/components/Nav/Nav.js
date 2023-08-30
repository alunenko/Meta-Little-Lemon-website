import React from 'react';
import './Nav.css';
import logoImg from '../../assets/logo.svg';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg m-custom">
      <div className="container-fluid">
        <a href="/"
           aria-label="Little lemon logo. Navigate to home page">
          <img src={logoImg}
              alt="logo" />
        </a>
        <button className="navbar-toggler m-custom"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle main navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end"
             id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active"
                 href="/"
                 aria-label="Navigate to Home page">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"
                 href="/about"
                 aria-label="Navigate to About page">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"
                 href="#"
                 aria-label="Navigate to Menu page">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"
                 href="#"
                 aria-label="Navigate to Reservations">Reservations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"
                 href="#"
                 aria-label="Navigate to make Order Online">Order Online</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"
                 href="#"
                 aria-label="Login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
