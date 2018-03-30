import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './AccountDropdown.css';
import LoggedInMenu from './LoggedInMenu';
import LoggedOutMenu from './LoggedOutMenu';

class AccountDropdown extends React.Component {

  render() {
    return (
      <div className="navbar-item dropdown is-right is-hoverable">
          <div className="dropdown-trigger">
            {this.props.user_id ?
              (<div to="/account" className="navbar-item">
                {this.props.first_name ? <p>Hi, {this.props.first_name} &nbsp;</p> : <p>Loading... &nbsp;</p>}
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
  first_name: state.user_info.first_name
});

const mapDispatchToProps = (dispatch) => bindActionCreators({

});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountDropdown);
