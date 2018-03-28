import React from 'react';
import './CartDropdownItem.css'

const CartDropdownItem = ({ item }) => {
  return (
    item.shoe ? (
      <div className="dropdown-item cart-item">
        <img className="cart-img"
          src={ item.shoe.imgURL }
        />
        <div>
          <p className="is-size-6">{ item.shoe.model }</p>
          <p className="is-size-7">{ item.shoe.brand }</p>
          <p className="is-size-7">{ `Size ${item.size}` }</p>
        </div>
        <div>
          <p
            className="is-size-6"
          ><b>{ `$${item.shoe.price.toFixed(2)}` }</b>
          </p>
        </div>
        <div class="field has-addons">
          <div class="control qty-btn">
            <a class="button">
              –
            </a>
          </div>
          <div class="control" style={ {width: "35px"} }>
            <input
              class="input"
              type="text"
              value={ item.cart_qty }
              style={ { textAlign: "center" } }
              readOnly />
          </div>
          <div class="control qty-btn">
            <a class="button">
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

export default CartDropdownItem;
