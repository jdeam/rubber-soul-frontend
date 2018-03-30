import React from 'react';
import CheckoutCartItem from './CheckoutCartItem';
import { Link } from 'react-router-dom';
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
    <div className="empty-cart-message is-size-4">
      There are no items in your cart
      <Link
        to="/"
        className="button continue-shopping"
      >
        Continue shopping
      </Link>
    </div>
  )
}

export default CheckoutCartList;
