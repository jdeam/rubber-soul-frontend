import React from 'react';
import './DetailReviewBar.css'
import DetailStars from './DetailStars'

const DetailReviewBar = ({shoeReviews}) => {
  let numReviews = shoeReviews.length;
  let avgRating = 0;
  if (numReviews) {
    avgRating = shoeReviews.reduce((total, review) => {
      return total + review.star_count;
    }, 0) / numReviews;
  }

  return (
    <div id="Detail-review-bar">
      <DetailStars rating={ avgRating }/>
      <div id="Detail-number-reviews">
        <strong>{
          `${numReviews} ${ numReviews === 1 ? "Review" : "Reviews" }`
        }</strong>
      </div>
      <div id="Detail-show-all-reviews">
        <a href="#Detail-reviews-div">see all</a>
      </div>
    </div>
  )
}

export default DetailReviewBar
