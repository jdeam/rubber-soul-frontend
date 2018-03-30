import React from 'react';
import CheckoutCartItem from './CheckoutCartItem';
import './CheckoutCartList.css';

const CheckoutCartList = ({ items }) => {
  const itemEls = items.map((item, i) => {
    return <CheckoutCartItem key={ i } item={ item } />;
  });

  return itemEls.length ? (
    <div className="checkout-cart-list">
      { itemEls }
    </div>
  ) : (
    <div></div>
  )
}

export default CheckoutCartList;
