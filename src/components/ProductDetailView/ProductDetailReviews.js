import React from 'react';
import ProductDetailReviewsNav from './ProductDetailReviewsNav'
import ProductDetailReviewsList from './ProductDetailReviewsList'

const ProductDetailReviews = ({reviews}) => {

  return (
    <div id="ProductDetail-reviews-div" className="section">
      <div id="ProductDetail-reviews-container" className="container">
        <ProductDetailReviewsNav />
        <ProductDetailReviewsList reviews={ reviews }/>
      </div>
    </div>
  )
}

export default ProductDetailReviews
