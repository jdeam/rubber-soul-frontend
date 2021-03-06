import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCartId, fetchCart } from '../../actions';
import { bindActionCreators } from 'redux';
import Notifications, {notify} from 'react-notify-toast';
import states from './states';
import axios from 'axios';
import './CheckoutForm.css';
const BaseURL = 'https://rubber-soul.herokuapp.com';

class CheckoutForm extends Component {

  state = {
    first_name: '',
    last_name: '',
    email: '',
    address_line_1: '',
    address_line_2: '',
    city: '',
    state: '',
    zip: '',
    phone_number: '',
    country: 'United States'
  }

  componentDidMount() {
    this.updateForm();
  }

  componentWillReceiveProps() {
    this.updateForm();
  }

  updateForm() {
    let user = this.props.user_info;
    if (user.email) this.setState({ email: user.email });
    if (user.first_name) this.setState({ first_name: user.first_name });
    if (user.last_name) this.setState({ last_name: user.last_name });
    if (user.address_line_1) this.setState({ address_line_1: user.address_line_1 });
    if (user.address_line_2) this.setState({ address_line_2: user.address_line_2 });
    if (user.city) this.setState({ city: user.city });
    if (user.state) this.setState({ state: user.state });
    if (user.zip) this.setState({ zip: user.zip });
    if (user.phone_number) this.setState({ phone_number: user.phone_number });
  }

  postOrder = async (body) => {
    if (!body.user_id || !body.cart_id) return;
    const token = localStorage.getItem('token');
    const response = await axios.patch(
      `${BaseURL}/auth/cart/complete`,
      body,
      { headers: { token } }
    );
    const cart = response.data.data;
    this.props.setCartId(cart.id);
    this.props.fetchCart();
  }

  getDisabledState() {
    if (
      !this.state.first_name ||
      !this.state.last_name ||
      !this.state.email ||
      !this.state.address_line_1 ||
      !this.state.city ||
      !this.state.state ||
      !this.state.country ||
      !this.state.zip ||
      !this.state.phone_number
    ) {
      return true;
    }
    return false;
  }

  render() {
    const disabledState = (
      !!this.props.cartItems.length ? this.getDisabledState() : false
    );
    return (
      <div
        className="column is-7 checkout-form"
        style={ { borderRight: "1px solid #DBDBDB" } }
      >
        <div className="field">
          <label className="label">Contact information</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Email"
              onChange={ (e) => this.setState({ email: e.target.value }) }
              value={ this.state.email }
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" />
              &nbsp;Keep me up to date on news and exclusive offers
            </label>
          </div>
        </div>

        <br />

        <label className="label">Shipping address</label>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  placeholder="First name"
                  onChange={ (e) => this.setState({ first_name: e.target.value }) }
                  value={ this.state.first_name }
                />
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  placeholder="Last name"
                  onChange={ (e) => this.setState({ last_name: e.target.value }) }
                  value={ this.state.last_name }
                />
              </p>
            </div>
          </div>
        </div>

        <div className="field">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Address"
              onChange={ (e) => this.setState({ address_line_1: e.target.value }) }
              value={ this.state.address_line_1 }
            />
          </p>
        </div>

        <div className="field">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Line 2 (optional)"
              onChange={ (e) => this.setState({ address_line_2: e.target.value }) }
              value={ this.state.address_line_2 }
            />
          </p>
        </div>

        <div className="field">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="City"
              onChange={ (e) => this.setState({ city: e.target.value }) }
              value={ this.state.city }
            />
          </p>
        </div>

        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <span className="select">
              <select
                onChange={ (e) => {
                  const value = (
                    e.target.value === "Country" ? "" : e.target.value
                  );
                  this.setState({ country: value })
                } }
                value={ this.state.country }
              >
                <option>Country</option>
                <option>United States</option>
                <option disabled>Canada</option>
              </select>
            </span>
          </p>
          <p className="control">
            <span className="select">
              <select
                onChange={ (e) => {
                  const value = (
                    e.target.value === "State" ? "" : e.target.value
                  );
                  this.setState({ state: value })
                } }
                value={ this.state.state }
              >
                <option>State</option>
                { Object.keys(states).map((state, i) => {
                  return <option key={i}>{ state }</option>;
                }) }
              </select>
            </span>
          </p>
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Zip code"
              onChange={ (e) => this.setState({ zip: e.target.value }) }
              value={ this.state.zip }
            />
          </p>
        </div>

        <div className="field">
          <p className="control is-expanded">
            <input
              className="input"
              type="tel"
              placeholder="Phone"
              onChange={ (e) => this.setState({ phone_number: e.target.value }) }
              value={ this.state.phone_number }
            />
          </p>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" />
              &nbsp;Save this information for next time
            </label>
          </div>
        </div>

        <br />

        <div className="control cart-buttons">
          <Link
            to="/"
            className="button is-text"
            >
            <span className="icon">
              <i className="fa fa-caret-left"></i>
            </span>
            <span>See more shoes</span>
          </Link>
          <Notifications />
          <button
            disabled={ disabledState }
            className="button is-primary is-wide"
            onClick={ () =>
              {this.postOrder({
              user_id: this.props.user_id,
              cart_id: this.props.cart_id
              });
              notify.show("Thanks for shopping with us!", "success", 2500)} }
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user_id: state.userId,
  cart_id: state.cartId,
  cartItems: state.cartItems,
  user_info: state.user_info
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setCartId,
  fetchCart
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutForm);
