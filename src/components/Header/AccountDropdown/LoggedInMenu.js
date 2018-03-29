import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCartId, setUserId, clearCart } from '../../../actions';
import './AccountDropdown.css';

const attemptSignOut = (e, setCartId, setUserId, clearCart) => {
    e.preventDefault();
    localStorage.setItem('token', undefined);
    setCartId(null);
    setUserId(null);
    clearCart();
}

const LoggedInMenu = ({ setCartId, setUserId, clearCart }) => {
    return (
        <div className="dropdown-content">
            <div className="dropdown-item">
                <Link to="/account">
                    <div id="my-account-option" className="field">
                        <p className="control has-icons-left has-icons-right">
                            <i className="fas fa-edit"></i>
                            <p>Edit My Account &nbsp;</p>
                        </p>
                    </div>
                </Link>
                
                <div className="field">
                    <p className="control sign-up-field">
                        <button onClick={(e) => attemptSignOut(e, setCartId, setUserId, clearCart)} className="button is-light">
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

export default connect(
    mapStateToProps, mapDispatchToProps
)(LoggedInMenu);