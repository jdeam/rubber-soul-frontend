import React from 'react';
import './DetailAddToCartButton.css';
import { updateCart } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const DetailAddToCartButton = ({ shoe_id, qty, size, updateCart }) => {
  return (
    <div id="Detail-addToCart-button">
      <p>
        <a
          onClick={ () => {
            if (qty && size) updateCart({shoe_id, qty, size});
          } }
          className="button is-primary"
        >
          Add to Cart
        </a>
      </p>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateCart
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(DetailAddToCartButton);
