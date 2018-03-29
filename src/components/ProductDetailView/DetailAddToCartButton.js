import React from 'react';
import './DetailAddToCartButton.css';
import Notifications, {notify} from 'react-notify-toast';
import { updateCart } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const DetailAddToCartButton = ({ shoe_id, qty, size, updateCart }) => {

  let submitAction;
  if (qty && size) {
    submitAction = () => {updateCart({shoe_id, qty, size}); notify.show('Item Added!', "success")}
  } else {
    submitAction = () => notify.show('Please select a size and quantity.', "error")
  }

  return (
    <div id="Detail-addToCart-button">
      <Notifications />
      <p>
        <a
          onClick={ submitAction }
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
