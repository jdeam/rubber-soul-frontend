import React from 'react';
import './Header.css';

const Header = () => (
  <nav className="navbar has-shadow Header-full">
    <div className="navbar-brand">
      <a className="navbar-item">
        <h1 className="rubber-soul title is-1">RubberSoul</h1>
      </a>

      <div className="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
  </nav>
);

export default Header;