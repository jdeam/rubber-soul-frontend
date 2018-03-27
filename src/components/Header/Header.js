import React from 'react';
import Headroom from 'react-headroom';
import AccountDropdown from './AccountDropdown';
import CartDropdown from './CartDropdown';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchInput from '../SearchBar/SearchInput';

const Header = () => (
  <Headroom id="Header">
    <nav id="Header-navbar" className="navbar has-shadow">
      <div className="navbar-brand">
        <Link to="/shoes" className="navbar-item">
          <h1 className="rs-logo title is-1">RubberSoul</h1>
        </Link>
        <div className="navbar-search">
          <p className="control has-icons-left">
            <SearchInput />
            {/* <input className="input is-rounded" type="search" placeholder="Search shoes" /> */}
            {/* <span className="icon is-small is-left">
              <i className="fa fa-search" aria-hidden="true" />
            </span> */}
          </p>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <AccountDropdown />
          <hr className="navbar-divider" />
          <CartDropdown />
        </div>
      </div>
    </nav>
  </Headroom>
);

export default Header;
