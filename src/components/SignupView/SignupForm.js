import React from 'react';
import 'bulma/css/bulma.css';
import './SignupView.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCartId, setUserId, fetchCart, toggleModal } from '../../actions';

class SignupForm extends React.Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        hasFailed: false
    }
    setFirstName = (e) => {
        this.setState({ first_name: e.target.value });
    }
    setLastName = (e) => {
        this.setState({ last_name: e.target.value });
    }
    setEmail = (e) => {
        this.setState({ email: e.target.value });
    }
    setPassword = (e) => {
        this.setState({ password: e.target.value });
    }
    createUser = (e) => {
        e.preventDefault();
        if ((!this.state.first_name.length) || (!this.state.last_name.length) || (!this.state.email.length) ||(!this.state.password.length)) {
            return;
        }
        let { first_name, last_name, email, password } = this.state;
        const BaseURL = 'https://rubber-soul.herokuapp.com';
        axios.post(`${BaseURL}/user/signup`, {
            first_name,
            last_name,
            email,
            password
        })
            .then(res => {
                return axios.post(`${BaseURL}/user/login`, {
                    email,
                    password
                })
            })
            .then(res => {
                const token = res.headers.auth.split(' ')[1];
                localStorage.setItem('token', token);
                this.props.setCartId(res.data.claim.cart_id);
                this.props.setUserId(res.data.claim.user_id);
                this.props.toggleModal();
                return this.props.fetchCart();
            })
            .catch(err => {
                this.setState({ hasFailed: true });
            })
    }
    render() {
        const { email, password, first_name, last_name } = this.state;
        let isEnabled = email.length > 0 && password.length > 0 && first_name.length > 0 && last_name.length > 0;
        return(
            <div>
              <form onSubmit={(e) => this.createUser(e)}>
                <div className="field">
                    <label className="label">* First Name</label>
                    <div className="control">
                        <input
                          className="input is-focused"
                          type="text"
                          onChange={this.setFirstName}
                          placeholder="Jane"
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">* Last Name</label>
                    <div className="control">
                        <input className="input" type="text" onChange={this.setLastName} placeholder="Doe" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">* Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="email" onChange={this.setEmail} placeholder="myemail@..." />
                        <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">* Password</label>
                    <div className="control">
                        <input className="input" type="password" onChange={this.setPassword} />
                    </div>
                </div>
                <div>
                    <p className={"help is-danger " + (this.state.hasFailed ? "SignupForm-shown" : "SignupForm-hide")}>User Already Exists</p>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button disabled={!isEnabled}
                          onClick={(e) => this.createUser(e)}
                          className="button is-link"
                        >
                          Sign Up
                        </button>
                    </div>
                </div>
              </form>
            </div>
        );
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
)(SignupForm);
