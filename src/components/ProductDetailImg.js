import React from 'react';

const ProductDetailImg = ({shoeImg}) => {

  return (
    <div className="column is-6">
      <div className="image is-2by2">
        <img src={`${shoeImg}`} alt="product"/>
      </div>
    </div>
  )
}

export default ProductDetailImg
