import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './AccountDropdown.css';
import LoggedInMenu from './LoggedInMenu';
import LoggedOutMenu from './LoggedOutMenu';

class AccountDropdown extends React.Component {
  
  state = {
    headerJSX: null
  }
  componentDidMount() {
    this.showName(this.props.user_id);
  }
  showName = (user_id) => {
    // make axios call
    const BaseURL = 'http://localhost:8080';
    return axios.get(`${BaseURL}/user/${user_id}`)
      .then(user => {
        return <p>Hi, {user.data.data.first_name} &nbsp;</p>;
      })
      .then(jsx => {
        this.setState({ headerJSX: jsx });
      });
  }

  render() {
    return (
      <div className="navbar-item dropdown is-right is-hoverable">
          <div className="dropdown-trigger">
            {this.props.user_id ?
              (<div to="/account" className="navbar-item">
                {this.state.headerJSX ? this.state.headerJSX : <p>Loading... &nbsp;</p>}
                <i className="fa fa-user-circle title is-4" aria-hidden="true" />
              </div>) : (
              <div className="navbar-item">
                <p>My Account &nbsp;</p>
                <i className="fa fa-user-circle title is-4" aria-hidden="true" />
              </div>
            )}

          </div>
          <div className="dropdown-menu" id="dropdown-menu6" role="menu">
            {this.props.user_id ? <LoggedInMenu /> : <LoggedOutMenu /> }
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user_id: state.userId,
});

export default connect(
  mapStateToProps
)(AccountDropdown);
