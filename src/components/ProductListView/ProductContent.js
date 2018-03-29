import React from 'react';
import ProductContentOnHover from './ProductContentOnHover';

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
      <ProductContentOnHover shoe={ shoe } />
    </div>
  );
}

export default ProductContent;
