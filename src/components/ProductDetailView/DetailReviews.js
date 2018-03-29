import React from 'react';
import DetailReviewsNav from './DetailReviewsNav';
import DetailReviewsList from './DetailReviewsList';

const DetailReviews = ({ reviews, shoeBrand, shoeModel }) => {

  return (
    <div id="Detail-reviews-div" className="section">
      <div id="Detail-reviews-container" className="container">
        <DetailReviewsNav />
        <DetailReviewsList reviews={ reviews } shoeBrand={ shoeBrand } shoeModel={ shoeModel } />
      </div>
    </div>
  )
}

export default DetailReviews
