import React from 'react';

const Header = () => (
  <nav className="nav has-shadow" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="#">
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
