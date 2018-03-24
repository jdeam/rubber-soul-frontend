import React from 'react';
import './ProductDetailSizeDropdown.css';

const ProductDetailSizeDropdown = ({ sizes }) => {

  const availableSizes = sizes ?
    sizes.filter(size => {
      return Object.values(size)[0];
    }).map(size => {
      return Object.keys(size)[0];
    }) : [];

  return (
    <div id="ProductDetail-size-dropdown">
      <p><strong>Size</strong></p>
        <div className="control">
          <div className="select">
            <select>
              <option>Select Size</option>
              { availableSizes.map((size, i) => {
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
