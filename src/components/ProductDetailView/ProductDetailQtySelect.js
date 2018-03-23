import React from 'react';
import './ProductDetailQtySelect.css'

const ProductDetailQtySelect = ({ shoeSizes }) => {
  console.log('props', shoeSizes);

  // let shoeSize = shoeSizes.map((shoeSize, i) => {
  //   console.log(shoeSize, i);
  //   for (let key in shoeSize) {
  //     console.log('key', key);
  //     return key;
  //     // console.log('qty', size[key]);
  //   }
  // })

  return (
    <div id="ProductDetail-qty-select">
      <p><strong>Quantity</strong></p>
      <div id="ProductDetail-qty-input">
        <a>
          <i className="fa fa-minus cart-icon" />
        </a>
        &nbsp;
        <input type="text" className="input has-text-centered" defaultValue={1} style={{width: 40}} />
        &nbsp;
        <a>
          <i className="fa fa-plus cart-icon" />
        </a>
      </div>
    </div>
  )
}

export default ProductDetailQtySelect