import React, { Component } from 'react'

export class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src="./assets/logo.svg"
               alt="logo" />
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
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
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

export default Nav