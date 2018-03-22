import React from 'react';
import './ProductDetailTitle.css';

const ProductDetailTitle = ({
  shoeBrand,
  shoeModel,
}) => {

  return (
    <div className="section product-header">
      <div className="container">
        <div className="columns">
          <div className="column">
            <span id="ProductDetail-brandname" className="title is-3">{`${shoeBrand}`}</span>
            <span className="title is-3 has-text-muted">&nbsp;|&nbsp;</span>
            <span className="title is-4 has-text-muted">{`${shoeModel}`}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailTitle
