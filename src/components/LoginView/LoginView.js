import React from 'react';
import 'bulma/css/bulma.css';
import './LoginView.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCartId, setUserId, fetchCart, toggleModal } from '../../actions';


class LoginView extends React.Component {
    state = {
        email: '',
        password: '',
        hasFailed: false,
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
                this.props.toggleModal();
                return this.props.fetchCart();
            })
            .then(res => {
                return this.setState({ email: '', password: '' });
            })
            .catch(err => {
                this.setState({ hasFailed: true });
            })
        }
    }
    render() {
        const { email, password } = this.state;
        let isEnabled = email.length > 0 && password.length > 0;
        return (
            <div>
              <form onSubmit={(e) => this.attemptLogin(e)}>
                <div className="field">
                    <label className="label ">Email</label>
                    <p className="control has-icons-left has-icons-right">
                        <input
                          onChange={this.setEmail}
                          value={this.state.email}
                          className="input is-focused"
                          type="email"
                          placeholder="Email"
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <p className="control has-icons-left">
                        <input onChange={this.setPassword} value={this.state.password} className="input" type="password" placeholder="Password" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div>
                    <p className={"help is-danger " + (this.state.hasFailed ? "LoginForm-shown" : "LoginForm-hide")}>Invalid Login</p>
                </div>
                <div className="field">
                    <p className="control sign-up-field">
                        <button
                          disabled={!isEnabled}
                          onClick={(e) => this.attemptLogin(e)}
                          className="button is-info">
                            Login
                        </button>
                    </p>
                </div>
              </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user_id: state.user_id
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setCartId,
    setUserId,
    fetchCart,
    toggleModal
}, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps
)(LoginView);
