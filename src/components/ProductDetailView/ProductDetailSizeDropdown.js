import React from 'react';
import './ProductDetailSizeDropdown.css'

const ProductDetailSizeDropdown = ({shoeSizes}) => {

  return (
    <div id="ProductDetail-size-dropdown">
      <p><strong>Size</strong></p>
      <div className="dropdown">
        <div className="dropdown-trigger">
          <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
            <span>Select Size</span>
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
            {/* <a href="#" className="dropdown-item">
              Modifiers
            </a>
            <a href="#" className="dropdown-item">
              Grid
            </a>
            <a href="#" className="dropdown-item">
              Form
            </a>
            <a href="#" className="dropdown-item">
              Elements
            </a>
            <a href="#" className="dropdown-item">
              Components
            </a>
            <a href="#" className="dropdown-item">
              Layout
            </a> */}
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailSizeDropdown
