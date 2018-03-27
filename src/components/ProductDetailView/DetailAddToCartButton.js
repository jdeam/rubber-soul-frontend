import React from 'react';
import './DetailAddToCartButton.css'

const DetailAddToCartButton = () => {

  return (
    <div id="Detail-addToCart-button">
      <p>
        {/* <a href="#">
          <i className="fas fa-minus cart-icon" />
        </a>
        &nbsp;
        <input type="text" name className="input has-text-centered" defaultValue={1} style={{width: 40}} />
        &nbsp;
        <a href="#">
          <i className="fas fa-plus cart-icon" />
        </a> */}
        {/* &nbsp; &nbsp; &nbsp; */}
        <a className="button is-primary">Add to cart</a>
      </p>
    </div>
  )
}

export default DetailAddToCartButton
