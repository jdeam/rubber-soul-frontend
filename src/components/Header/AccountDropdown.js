import React from 'react';
import { Link } from 'react-router-dom';
import './AccountDropdown.css';

const AccountDropdown = () => {

  return (
    <div class="navbar-item dropdown is-right is-hoverable">
      <div class="dropdown-trigger">
        <Link to="/account" className="navbar-item">
        <p>My Account &nbsp;</p>
        <i class="fa fa-user-circle title is-4" aria-hidden="true" />
      </Link>
    </div>
    <div class="dropdown-menu" id="dropdown-menu6" role="menu">
      <div class="dropdown-content">
        <div class="dropdown-item">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email" />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control sign-up-field">
                  <button class="button is-light">
                    Login
                  </button>
                  <button class="button is-text is-small">
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
