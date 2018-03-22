import React from 'react';
import './ProductDetailReviewBar.css'

const ProductDetailReviewBar = ({shoeReviews}) => {
  let numReviews = shoeReviews.length;

  return (
    <p className="star-ratings">
      <i className="fas fa-star title is-5" style={{color: '#ed6c63'}} />
      <i className="fas fa-star title is-5" style={{color: '#ed6c63'}} />
      <i className="fas fa-star title is-5" style={{color: '#ed6c63'}} />
      <i className="fas fa-star title is-5" />
      <i className="fas fa-star title is-5" />
      &nbsp; &nbsp;
      <strong>{`${numReviews} Reviews`}</strong>
      {/* <strong>41 Reviews</strong> */}
      &nbsp; &nbsp;
      <a href="#">show all</a>
    </p>
  )
}

export default ProductDetailReviewBar
