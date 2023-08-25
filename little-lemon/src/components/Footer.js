import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer>&copy; Little Lemon {new Date().getFullYear()}</footer>
    )
  }
}

export default Footer