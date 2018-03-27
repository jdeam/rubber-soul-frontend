import React from 'react';
import './DetailAddToCartButton.css'

const addShoeToCart = (shoe_id, qty, size) => {
  let cartItem = {
    shoe_id,
    qty,
    size
  }
  console.log(cartItem);
}

const DetailAddToCartButton = ({ shoe_id, qty, size }) => {
  return (
    <div id="Detail-addToCart-button">
      <p>
        <a onClick={ (e) => addShoeToCart(shoe_id, qty, size) } className="button is-primary">Add to cart</a>
      </p>
    </div>
  )
}

export default DetailAddToCartButton
