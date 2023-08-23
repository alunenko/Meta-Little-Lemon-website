import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
      <article className='card m-custom'>
        <img src="./assets/content/restauranfood.jpg"
             className="card-img-top w-100 object-fit-cover"
             alt="card image" />
        <div className="card-body pt-4 pb-4">
          <h2 className='card-title pb-3 d-flex justify-content-between'>Greek Salad <span className='card-price'>$12.95</span></h2>
          <p className='card-text'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
          <p className="card-text m-order d-flex gap-3 align-items-center">Order a delivery <img src="./assets/icons/motobike.png" alt="motobike icon" className='icon-motobike'/></p>
        </div>
      </article>
    )
  }
}

export default Card