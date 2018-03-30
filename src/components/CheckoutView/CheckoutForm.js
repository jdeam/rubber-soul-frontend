import React, { Component } from 'react';
import './CheckoutForm.css';
const states = Object.keys(require('./states.json'));

class CheckoutForm extends Component {

  state = {
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    apt: '',
    city: '',
    country: ''
  }

  render() {
    return (
      <div
        className="column is-7 checkout-form"
        style={ { borderRight: "1px solid #DBDBDB" } }
      >
        <div class="field">
          <label class="label">Contact information</label>
          <div class="control">
            <input class="input" type="email" placeholder="Email" />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" />
              &nbsp;Keep me up to date on news and exclusive offers
            </label>
          </div>
        </div>

        <br />

        <label class="label">Shipping address</label>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="text" placeholder="First name" />
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="text" placeholder="Last name" />
              </p>
            </div>
          </div>
        </div>

        <div class="field">
          <p class="control is-expanded">
            <input class="input" type="text" placeholder="Company (optional)" />
          </p>
        </div>

        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-larger">
              <p class="control">
                <input class="input" type="text" placeholder="Address" />
              </p>
            </div>
            <div class="field">
              <p class="control">
                <input class="input" type="text" placeholder="Apt, suite, etc (optional)" />
              </p>
            </div>
          </div>
        </div>

        <div class="field">
          <p class="control is-expanded">
            <input class="input" type="text" placeholder="City" />
          </p>
        </div>

        <div class="field is-grouped is-grouped-centered">
          <p class="control">
            <span class="select">
              <select>
                <option selected>Country</option>
                <option>United States</option>
                <option disabled>Canada</option>
              </select>
            </span>
          </p>
          <p class="control">
            <span class="select">
              <select>
                <option selected>State</option>
                { states.map(state => {
                  return <option>{ state }</option>;
                }) }
              </select>
            </span>
          </p>
          <p class="control is-expanded">
            <input class="input" type="text" placeholder="Zip code" />
          </p>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" />
              &nbsp;Save this information for next time
            </label>
          </div>
        </div>

        <br />

        <div class="control">
          <button class="button is-primary is-floated-right">PLACE ORDER</button>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
