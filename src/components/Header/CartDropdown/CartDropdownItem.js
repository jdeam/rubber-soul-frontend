import React from 'react';
import './CartDropdownItem.css';
import { Link } from 'react-router-dom';
import { fetchSingleShoe, clearShoe, updateCart } from '../../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const CartDropdownItem = ({
  item,
  fetchSingleShoe,
  clearShoe,
  updateCart
}) => {

  return (
    item.shoe ? (
      <div className="dropdown-item cart-item">
        <Link
          to={ `/${item.shoe.id}` }
          onClick={ () => {
            clearShoe();
            fetchSingleShoe(item.shoe.id);
          } }
        >
          <img
            className="cart-img"
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
            <p className="is-size-6">{ item.shoe.model }</p>
            <p className="is-size-7">{ item.shoe.brand }</p>
            <p className="is-size-7">{ `Size ${item.size}` }</p>
          </div>
        </Link>
        <Link
          to={ `/${item.shoe.id}` }
          onClick={ () => {
            clearShoe();
            fetchSingleShoe(item.shoe.id);
          } }
        >
          <div>
            <p
              className="is-size-6"
            ><b>{ `$${item.shoe.price.toFixed(2)}` }</b>
            </p>
          </div>
        </Link>
        <div className="field has-addons">
          <div className="control qty-btn">
            <a
              className="button"
              onClick={ () => {
                const body = {
                  shoe_id: item.shoe.id,
                  size: item.size,
                  qty: item.cart_qty-1
                }
                updateCart(body);
              } }
            >
              –
            </a>
          </div>
          <div className="control" style={ {width: "35px"} }>
            <input
              className="input"
              type="text"
              value={ item.cart_qty }
              style={ { textAlign: "center" } }
              readOnly />
          </div>
          <div className="control qty-btn">
            <a
              className="button"
              onClick={ () => {
                const body = {
                  shoe_id: item.shoe.id,
                  size: item.size,
                  qty: item.cart_qty+1
                }
                updateCart(body);
              } }
            >
              +
            </a>
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
  clearShoe,
  updateCart
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(CartDropdownItem);
