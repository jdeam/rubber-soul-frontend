import React from 'react';
import './ProductDetailImg.css'

const ProductDetailImg = ({shoeImg}) => {

  return (
    <div className="column is-6">
      <div className="image is-2by2">
        <img id="ProductDetail-img" src={`${shoeImg}`} alt="product"/>
      </div>
    </div>
  )
}

export default ProductDetailImg
