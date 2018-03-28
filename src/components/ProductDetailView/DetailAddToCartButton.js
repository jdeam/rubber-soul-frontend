import React from 'react';
import './DetailAddToCartButton.css'

const addShoeToCart = (shoe_id, qty, size) => {
  let cartItem = {
    shoe_id,
    qty,
    size
  }
  // localStorage.setItem('cartItem', JSON.stringify(cartItem));
  // let getStorage = localStorage.getItem('cartItem');
  // console.log(getStorage);
  let currentCartId = localStorage.getItem('cart_id');
  if (currentCartId) {
    //do stuff
    console.log('I HAVE AN ID');
  } else {
    //do other stuff without cart id
    console.log('I DO NOT HAVE ONE');
  }
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
