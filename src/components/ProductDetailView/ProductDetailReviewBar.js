import React from 'react';
import './ProductDetailReviewBar.css'

const ProductDetailReviewBar = ({shoeReviews}) => {
  let numReviews = 0;
  if (shoeReviews) numReviews = shoeReviews.length;

  return (
    <div id="ProductDetail-review-bar">
      <div id="ProductDetail-review-stars">
          <i className="fas fa-star title is-5" style={{color: '#ed6c63'}} />
          <i className="fas fa-star title is-5" style={{color: '#ed6c63'}} />
          <i className="fas fa-star title is-5" style={{color: '#ed6c63'}} />
          <i className="fas fa-star title is-5" />
          <i className="fas fa-star title is-5" />
      </div>
      <div id="ProductDetail-number-reviews">
        <strong>{`${numReviews} Reviews`}</strong>
        {/* &nbsp; &nbsp; */}
      </div>
      <div id="ProductDetail-show-all-reviews">
        <a href="#ProductDetail-reviews-div">see all</a>
      </div>
    </div>
  )
}

export default ProductDetailReviewBar
