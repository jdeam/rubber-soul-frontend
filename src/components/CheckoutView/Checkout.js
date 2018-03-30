import React from 'react';
import CheckoutForm from './CheckoutForm';
import CheckoutCart from './CheckoutCart';

const Checkout = () => {

  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <div className="title is-2">
                Checkout
              </div>
            </div>
          </div>
          <hr />
          <div className="columns is-centered">
            <div className="column is-10">
              <div className="columns">
                <CheckoutForm />
                <CheckoutCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
