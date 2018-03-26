import React from 'react';
import './ProductDetailQtySelect.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseQty, decreaseQty } from '../../actions';

const ProductDetailQtySelect = ({
  shoeSizes,
  qty,
  increaseQty,
  decreaseQty,
}) => {

  return (
    <div id="ProductDetail-qty-select">
      <p><strong>Quantity</strong></p>
      <div id="ProductDetail-qty-input">
        <a onClick={ () => decreaseQty(qty) }>
          <i className="fa fa-minus cart-icon" />
        </a>
        &nbsp;
        <input
          type="text"
          className="input has-text-centered"
          value={ qty }
          style={{width: 40}}
          readOnly
        />
        &nbsp;
        <a onClick={ increaseQty }>
          <i className="fa fa-plus cart-icon" />
        </a>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({ qty: state.selectedQty });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  increaseQty,
  decreaseQty,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailQtySelect)
