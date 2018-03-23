import React from 'react';
import ProductCol from './ProductCol'

const ProductRow = ({ shoes }) => {
  return (
    <div className="columns">
      {
        shoes.map((shoe, i) => {
          return <ProductCol key={ i } shoe={ shoe } />
        })
      }
    </div>
  )
}

export default ProductRow;
