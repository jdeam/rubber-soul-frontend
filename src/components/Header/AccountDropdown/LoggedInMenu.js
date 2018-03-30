import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCartId, setUserId, clearCart } from '../../../actions';
import { withRouter } from 'react-router-dom';
import './AccountDropdown.css';

const attemptSignOut = (e, setCartId, setUserId, clearCart, history) => {
    e.preventDefault();
    localStorage.setItem('token', undefined);
    setCartId(null);
    setUserId(null);
    clearCart();
    history.push("/");
}

const LoggedInMenu = ({ setCartId, setUserId, clearCart, user_id, history }) => {
    return (
        <div className="dropdown-content">
            <div className="dropdown-item">
                <div className="field">
                    <p className="control sign-up-field">
                        <button
                          id="LoggedInMenu-logout-button"
                          onClick={(e) => attemptSignOut(e, setCartId, setUserId, clearCart, history )}
                          className="button is-danger"
                        >
                        Log Out
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );

}

const mapStateToProps = (state) => ({
    user_id: state.userId
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setCartId,
    setUserId,
    clearCart
}, dispatch);

export default withRouter(connect(
    mapStateToProps, mapDispatchToProps
)(LoggedInMenu));
