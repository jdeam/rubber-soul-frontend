import React from 'react';
import CheckoutCartList from './CheckoutCartList';
import { connect } from 'react-redux';
import './CheckoutCart.css';

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
    <div className="column is-5 checkout-cart-container">
      <CheckoutCartList items={ itemsWithShoeData } />
      <hr />
      <div
        className="field has-addons coupon-box"
        style={ { marginTop: "10px"} }
      >
        <div className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="Discount code"
          />
        </div>
        <div className="control">
          <a className="button">
            APPLY
          </a>
        </div>
      </div>
      <hr />
      <div className="checkout-subtotal">
        <div>
          <p className="is-5">Subtotal</p>
          <p className="is-5">Shipping</p>
        </div>
        <div>
          <p className="is-5"><b>{ `$${subtotal.toFixed(2)}` }</b></p>
          <p className="is-5 shipping-right"><b>FREE</b></p>
        </div>
      </div>
      <hr />
      <div className="checkout-total">
        <span className="title is-4">Total</span>
        <span className="title is-4">{ `$${subtotal.toFixed(2)}` }</span>
      </div>
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
