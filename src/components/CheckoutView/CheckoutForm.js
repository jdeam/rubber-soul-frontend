import React, { Component } from 'react';
import { connect } from 'react-redux';
import states from './states';
import axios from 'axios';
import './CheckoutForm.css';
const BaseURL = 'http://localhost:8080';

class CheckoutForm extends Component {

  state = {
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    apt: '',
    city: '',
    country: '',
    state: '',
    zip: ''
  }

  async componentDidMount() {
    const response = await axios.get(
      `${BaseURL}/user/${this.props.userId}`
    );
    const userData = response.data.data;
    console.log(userData);
  }

  render() {
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
                  onChange={ (e) => this.setState({ firstName: e.target.value }) }
                  value={ this.state.firstName }
                />
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  placeholder="Last name"
                  onChange={ (e) => this.setState({ lastName: e.target.value }) }
                  value={ this.state.lastName }
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
              placeholder="Company (optional)"
              onChange={ (e) => this.setState({ company: e.target.value }) }
              value={ this.state.company }
            />
          </p>
        </div>

        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field is-larger">
              <p className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Address"
                  onChange={ (e) => this.setState({ address: e.target.value }) }
                  value={ this.state.address }
                />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Apt, suite, etc (optional)"
                  onChange={ (e) => this.setState({ apt: e.target.value }) }
                  value={ this.state.apt }
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
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" />
              &nbsp;Save this information for next time
            </label>
          </div>
        </div>

        <br />

        <div className="control">
          <button className="button is-primary is-floated-right">PLACE ORDER</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userId: state.userId
});

export default connect(
  mapStateToProps
)(CheckoutForm);
