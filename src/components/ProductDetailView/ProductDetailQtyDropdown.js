import React from 'react';
import './ProductDetailQtyDropdown.css'

const ProductDetailQtyDropdown = () => {

  return (
    <div id="ProductDetail-qty-dropdown">
      <p><strong>Quantity</strong></p>
      <div className="dropdown">
        <div className="dropdown-trigger">
          <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
            <span>Select Quantity</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu3" role="menu">
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">
              Overview
            </a>
            <a className="dropdown-item">
              1
            </a>
            <a className="dropdown-item">
              2
            </a>
            <a className="dropdown-item">
              3
            </a>
            <a className="dropdown-item">
              4
            </a>
            <a className="dropdown-item">
              5
            </a>
            {/* <hr className="dropdown-divider" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailQtyDropdown
