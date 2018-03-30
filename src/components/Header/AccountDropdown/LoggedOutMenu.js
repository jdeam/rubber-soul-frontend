import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleModal, setModalContent } from '../../../actions';
import './AccountDropdown.css';

class LoggedOutMenu extends React.Component {
    toggleLogin = (toggleModal, setModalToLogin) => {
        toggleModal()
        setModalToLogin('Login');
    }

    toggleSignup = (toggleModal, setModalToSignup) => {
        toggleModal()
        setModalToSignup('Signup');
    }
    render() {
        return (
            <div>
                <div className="dropdown-content">
                    <div className="dropdown-item">
                        <div className="field">
                        <p className="control sign-up-field">
                            <button
                              onClick={(e) => this.toggleLogin(this.props.toggleModal, this.props.setModalContent)}
                              className="button is-info"
                              id="LoggedOutMenu-login-button"
                            >
                                Login
                            </button>
                        </p>
                        </div>
                    </div>
                    <div className="dropdown-item">
                        <div className="field">
                        <p
                          className="control sign-up-field"
                        >
                            <button
                              onClick={() => this.toggleSignup(this.props.toggleModal, this.props.setModalContent)}
                              className="button is-text is-small"
                              id="create-account-button"
                            >
                            Create an account
                            </button>
                        </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}



const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleModal,
    setModalContent
}, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps
)(LoggedOutMenu);
