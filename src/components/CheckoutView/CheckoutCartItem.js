import React from 'react';
import { Link } from 'react-router-dom';
import { fetchSingleShoe, clearShoe } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './CheckoutCartItem.css';

const CheckoutCartItem = ({ item, fetchSingleShoe, clearShoe }) => {

  return (
    item.shoe ? (
      <div className="checkout-cart-item-container">
        <div className="checkout-cart-item">
          <div className="cart-image-content">
            <Link
              to={ `/${item.shoe.id}` }
              onClick={ () => {
                clearShoe();
                fetchSingleShoe(item.shoe.id);
              } }
            >
              <img
                className="checkout-cart-img"
                alt={ `${item.shoe.brand} ${item.shoe.model}` }
                src={ item.shoe.imgURL }
              />
            </Link>
            <Link
              to={ `/${item.shoe.id}` }
              onClick={ () => {
                clearShoe();
                fetchSingleShoe(item.shoe.id);
              } }
            >
              <div>
                <p>
                  <span className="is-size-5"><b>{ item.shoe.model }</b></span>
                  <span className="is-size-5">&nbsp;|&nbsp;</span>
                  <span className="is-size-6">{ item.shoe.brand }</span>
                </p>
                <p>
                  <span className="is-size-7">{ `Size ${item.size}` }</span>
                </p>
              </div>
            </Link>
          </div>
          <div>
            <p
              className="is-size-6"
            >
              <b>{
              `$${item.shoe.price.toFixed(2)}` +
              (item.cart_qty > 1 ? ` × ${item.cart_qty}` : "") }
              </b>
            </p>
          </div>
        </div>
      </div>
    ) : (
      <div></div>
    )
  );
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchSingleShoe,
  clearShoe
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(CheckoutCartItem);
