import React from 'react';
import { Link } from 'react-router-dom';

const CartDropdown = () => {

  return (
    <div class="navbar-item dropdown is-right is-hoverable">
      <div class="dropdown-trigger">
        <Link to="/cart" className="navbar-item">
          <i class="fa fa-shopping-cart title is-4" aria-hidden="true" />
        </Link>
      </div>
      <div class="dropdown-menu" id="dropdown-menu6" role="menu">
        <div class="dropdown-content">
          <div class="dropdown-item">
            <p>Add the <code>is-right</code> modifier for a <strong>right-aligned</strong> dropdown.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDropdown;
