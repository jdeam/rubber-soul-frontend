import React from 'react';

const ProductDetailPrice = ({shoePrice}) => {

  return (
    <p className="title is-3 has-text-muted">${`${shoePrice}`}</p>
  )
}

export default ProductDetailPrice
