import React from 'react';
import { Link } from 'react-router-dom';
import './AccountDropdown.css';

const AccountDropdown = () => {

  return (
    <div className="navbar-item dropdown is-right is-hoverable">
      <div className="dropdown-trigger">
        <Link to="/account" className="navbar-item">
        <p>My Account &nbsp;</p>
        <i className="fa fa-user-circle title is-4" aria-hidden="true" />
      </Link>
    </div>
    <div className="dropdown-menu" id="dropdown-menu6" role="menu">
      <div className="dropdown-content">
        <div className="dropdown-item">
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email" />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="password" placeholder="Password" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control sign-up-field">
                  <button className="button is-light">
                    Login
                  </button>
                  <button className="button is-text is-small">
                    Create an account
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default AccountDropdown;
