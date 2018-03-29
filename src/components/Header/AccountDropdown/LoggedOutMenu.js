import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCartId, setUserId, fetchCart, toggleModal } from '../../../actions';
import './AccountDropdown.css';
import SignupView from '../../SignupView/SignupView';


class LoggedOutMenu extends React.Component {
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
    setModalState = () => {
        this.setState({ modalIsActive: !this.state.modalIsActive });
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
                this.props.setCartId(res.data.claim.cart_id);
                this.props.setUserId(res.data.claim.user_id);
                return this.props.fetchCart();
            })
            .then(res => {
                return this.setState({ email: '', password: '' });
            })
            .catch(err => {
                console.log('Invalid credentials');
            })
        } 
    }

    render() {
        return (
            <div>
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
                            <button onClick={() => this.props.toggleModal()} className="button is-text is-small">
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
    user_id: state.userId 
});
  
const mapDispatchToProps = (dispatch) => bindActionCreators({
    setCartId, 
    setUserId, 
    fetchCart,
    toggleModal
}, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps
)(LoggedOutMenu);
