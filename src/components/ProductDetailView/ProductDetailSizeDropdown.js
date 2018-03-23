import React from 'react';
import './ProductDetailSizeDropdown.css'

const ProductDetailSizeDropdown = ({shoeSizes}) => {

  let shoeSize = shoeSizes.map((shoeSize, i) => {
    console.log(shoeSize, i);
    for (let key in shoeSize) {
      console.log('key', key);
      return key;
      // console.log('qty', size[key]);
    }
  })

  return (
    <div id="ProductDetail-size-dropdown">
      <p><strong>Size</strong></p>
        <div className="control">
          <div className="select">
            <select>
              <option>Select Size</option>
              { shoeSize.map((size, i) => {
                return (
                  <option key={i}>{`${size}`}</option>
                )
              }) }
            </select>
          </div>
        </div>
    </div>
  )
}

export default ProductDetailSizeDropdown
