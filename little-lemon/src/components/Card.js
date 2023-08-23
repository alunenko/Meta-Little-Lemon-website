import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
      <article className='card'>
        <img src="" alt="card image" />
        <div className="card-body">
          <h2 className='card-title'>1 post</h2>
          <p className='card-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur expedita eos eum ea exercitationem debitis sed dolorem provident. Dignissimos officiis voluptatem saepe error quam vitae. Quasi, suscipit deleniti! Nesciunt, ex!</p>
          <p className="card-text">other text</p>
        </div>
      </article>
    )
  }
}

export default Card