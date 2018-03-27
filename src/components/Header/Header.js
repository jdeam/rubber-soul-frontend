import React from 'react';
import Headroom from 'react-headroom';
import AccountDropdown from './AccountDropdown';
import CartDropdown from './CartDropdown';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <Headroom>
    <nav className="navbar has-shadow">
      <div className="navbar-brand">
        <Link to="/shoes" className="navbar-item">
          <h1 className="rs-logo title is-1">RubberSoul</h1>
        </Link>
        <div class="navbar-search">
          <p class="control has-icons-left">
            <input class="input is-rounded" type="search" placeholder="Search shoes" />
            <span class="icon is-small is-left">
              <i class="fa fa-search" aria-hidden="true" />
            </span>
          </p>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <AccountDropdown />
          <hr class="navbar-divider" />
          <CartDropdown />
        </div>
      </div>
    </nav>
  </Headroom>
);

export default Header;
