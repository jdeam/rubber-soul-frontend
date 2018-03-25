import React from 'react';
import ProductSizes from './ProductSizes';

const ProductContent = ({ shoe }) => {
  const priceStyle = {
    float: 'right',
    fontWeight: 'bold'
  };

  return (
    <div className="card-content">
      <p className="title is-4">{ shoe.model }</p>
      <p className="subtitle is-6">
        { shoe.brand }
        <span
          className="shoe-price"
          style={ priceStyle }
          >{ `$${shoe.price.toFixed(2)}` }
        </span>
      </p>
      <ProductSizes shoe={ shoe } />
    </div>
  );
}

export default ProductContent;
