import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar has-shadow">
    <div className="navbar-brand">
      <Link to="/shoes" className="navbar-item">
        <h1 className="rs-logo title is-1">RubberSoul</h1>
      </Link>
    </div>
  </nav>
);

export default Header;
