import React from 'react';
import { Link } from 'react-router-dom';

const CartDropdown = () => {

  return (
    <div className="navbar-item dropdown is-right is-hoverable">
      <div className="dropdown-trigger">
        <Link to="/cart" className="navbar-item">
          <i className="fa fa-shopping-cart title is-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="dropdown-menu" id="dropdown-menu6" role="menu">
        <div className="dropdown-content">
          <div className="dropdown-item">
            <p>Add the <code>is-right</code> modifier for a <strong>right-aligned</strong> dropdown.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDropdown;
