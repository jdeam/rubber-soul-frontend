import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AccountDropdown.css';

class AccountDropdown extends React.Component {
  state = { 
    email: '', 
    password: ''
  };

  setEmail = (e) => {
    this.setState({ email: e.target.value });
  }
  setPassword = (e) => {
    this.setState({ password: e.target.value });
  }
  attemptLogin = (e) => {
    e.preventDefault();
    if (!this.state.email.length || !this.state.password.length) {
      console.log('Please enter all fields');
    } else {
      const BaseURL = 'http://localhost:8080';
      axios.post(`${BaseURL}/user/login`, {
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {
          const token = res.headers.auth.split(' ')[1];
          localStorage.setItem('token', token);
          console.log(res.data.user_id, res.data.cart_id);
          console.log(token);
          this.setState({ email: '', password: '' });
        })
        .catch(err => {
          console.log('Invalid credentials');
        })
    } 
  }

  render () {
    
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
                  <input onChange={this.setEmail} value={this.state.email} className="input" type="email" placeholder="Email" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input onChange={this.setPassword} value={this.state.password} className="input" type="password" placeholder="Password" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control sign-up-field">
                  <button onClick={(e) => this.attemptLogin(e)} className="button is-light">
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
}

export default AccountDropdown;
