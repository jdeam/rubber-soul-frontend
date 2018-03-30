import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserInfo } from '../../../actions';
import './AccountDropdown.css';
import LoggedInMenu from './LoggedInMenu';
import LoggedOutMenu from './LoggedOutMenu';

class AccountDropdown extends React.Component {
  
  render() {
    console.log(this.props.user_info);
    return (
      <div className="navbar-item dropdown is-right is-hoverable">
          <div className="dropdown-trigger">
            {this.props.user_id ?
              (<div to="/account" className="navbar-item">
                {this.props.user_info.first_name ? <p>Hi, {this.props.user_info.first_name} &nbsp;</p> : <p>Loading... &nbsp;</p>}
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
  user_info: state.user_info
});

const mapDispatchToProps = (dispatch) => bindActionCreators({

});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountDropdown);
