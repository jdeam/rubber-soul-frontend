import React from 'react';
import CheckoutCartList from './CheckoutCartList';
import { connect } from 'react-redux';

const CheckoutCart = ({ shoesById, cartItems }) => {
  const itemsWithShoeData = cartItems.map(item => {
    const { shoe_id, ...newItem } = item;
    newItem.shoe = shoesById[shoe_id];
    return newItem;
  });

  const subtotal = itemsWithShoeData.reduce((total, item) => {
    return total + (item.shoe ? (item.shoe.price * item.cart_qty) : 0);
  }, 0);

  return (
    <div className="column is-5">
      <CheckoutCartList items={ itemsWithShoeData } />
      <hr />
      
    </div>
  );
}

const mapStateToProps = (state) => ({
  shoesById: state.shoesById,
  cartItems: state.cartItems
});

export default connect(
  mapStateToProps
)(CheckoutCart);
