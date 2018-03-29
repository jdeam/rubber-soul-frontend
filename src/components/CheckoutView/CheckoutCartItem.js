import React from 'react';
import { Link } from 'react-router-dom';
import { fetchSingleShoe, clearShoe } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './CheckoutCartItem.css';

const CheckoutCartItem = ({ item, fetchSingleShoe, clearShoe }) => {

  return (
    item.shoe ? (
      <div className="">
        <Link
          to={ `/${item.shoe.id}` }
          onClick={ () => {
            clearShoe();
            fetchSingleShoe(item.shoe.id);
          } }
        >
          <img
            className=""
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
