import React from 'react';
import './ProductDetailTitle.css'

const ProductDetailTitle = ({
  shoeBrand,
  shoeModel,
}) => {

  return (
    <div id="ProductDetail-header" className="section product-header">
      <div id="ProductDetail-header-container" className="container">
        <div className="columns">
          <div className="column">
            <span id="ProductDetail-brandname" className="title is-3">{`${shoeModel}`}</span>
            <span className="title is-3 has-text-muted">&nbsp;|&nbsp;</span>
            <span className="title is-4 has-text-muted">{`${shoeBrand}`}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailTitle
