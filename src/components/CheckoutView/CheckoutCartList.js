import React from 'react';
import CheckoutCartItem from './CheckoutCartItem';

const CheckoutCartList = ({ items }) => {
  const itemEls = items.map((item, i) => {
    return <CheckoutCartItem key={ i } item={ item } />;
  });

  return itemEls.length ? (
    <div>
      { itemEls }
    </div>
  ) : (
    <div></div>
  )
}

export default CheckoutCartList;
