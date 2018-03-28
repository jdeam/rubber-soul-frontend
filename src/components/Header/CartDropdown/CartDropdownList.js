import React from 'react';
import CartDropdownItem from './CartDropdownItem';
import { connect } from 'react-redux';
import './CartDropdownList.css';
import { Link } from 'react-router-dom';

const CartDropdownList = ({ shoesById, cartItems }) => {
  const itemsWithShoeData = cartItems.map(item => {
    const { shoe_id, ...newItem } = item;
    newItem.shoe = shoesById[shoe_id];
    return newItem;
  });

  const subtotal = itemsWithShoeData.reduce((total, item) => {
    return total + (item.shoe ? (item.shoe.price * item.cart_qty) : 0);
  }, 0);

  const itemEls = itemsWithShoeData.map((item, i) => {
    return <CartDropdownItem key={ i } item={ item } />;
  });

  return itemEls.length ? (
    <div className="dropdown-content">
      { itemEls.map((itemEl, i, arr) => {
          return [
            itemEl,
            <hr
              key={ i+ arr.length }
              className="navbar-divider"
            />
          ];
      }) }
      <div className="dropdown-item subtotal">
        <div className="subtotal-content">
          <div className="is-size-6"><b>Subtotal:</b></div>
          <div className="is-size-6"><b>{ `$${subtotal.toFixed(2)}` }</b></div>
        </div>
        <Link to="/checkout" class="button checkout-btn">CHECKOUT</Link>
      </div>
    </div>
  ) : (
    <div className="dropdown-content">
      Your cart is empty.
    </div>
  )
}

const mapStateToProps = (state) => ({
  shoesById: state.shoesById,
  cartItems: state.cartItems
})

export default connect(
  mapStateToProps
)(CartDropdownList);
