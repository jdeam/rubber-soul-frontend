import React from 'react';
import { Link } from 'react-router-dom';
import CartDropdownList from './CartDropdownList';
import './CartDropdown.css';

const CartDropdown = () => {

  return (
    <div className="navbar-item dropdown is-right is-hoverable">
      <div className="dropdown-trigger">
        <Link to="/checkout" className="navbar-item">
          <i className="fa fa-shopping-cart fa-flip-horizontal title is-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="dropdown-menu" id="cart-dropdown" role="menu">
        <CartDropdownList />
      </div>
    </div>
  );
}

export default CartDropdown;
