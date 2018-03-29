import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './AccountDropdown.css';
import LoggedInMenu from './LoggedInMenu';
import LoggedOutMenu from './LoggedOutMenu';

const AccountDropdown = ({ user_id }) => {
  return (
    <div className="navbar-item dropdown is-right is-hoverable">
        <div className="dropdown-trigger">
          {user_id ? 
            (<div to="/account" className="navbar-item">
              <p>My Account &nbsp;</p>
              <i className="fa fa-user-circle title is-4" aria-hidden="true" />
            </div>) : (
            <div className="navbar-item">
              <p>Login &nbsp;</p>
              <i className="fa fa-user-circle title is-4" aria-hidden="true" />
            </div>
          )}
          
        </div>
        <div className="dropdown-menu" id="dropdown-menu6" role="menu">
          {user_id ? <LoggedInMenu /> : <LoggedOutMenu /> }
        </div>
      </div>
  );
}
  
const mapStateToProps = (state) => ({ 
  user_id: state.userId 
});

export default connect(
  mapStateToProps
)(AccountDropdown);
