import React from 'react';
import './DetailReviewBar.css'
import DetailStars from './DetailStars'

const DetailReviewBar = ({shoeReviews}) => {
  // console.log('!!!',shoeReviews);
  let numReviews = 0;
  // let reviewStars = 0;
  if (shoeReviews) {
    numReviews = shoeReviews.length;
    // reviewStars = Math.round(shoeReviews.reduce((total, review) => {
    //   return total + review.star_count;
    // }, 0) / shoeReviews.length * 2) / 2;
    // reviewStars = shoeReviews.reduce((total, review) => {
    //   return total + review.star_count;
    // }, 0) / shoeReviews.length;
  }
  // console.log('STARS', reviewStars);

  return (
    <div id="Detail-review-bar">
      <DetailStars shoeReviews={shoeReviews}/>
      <div id="Detail-number-reviews">
        <strong>{`${numReviews} Reviews`}</strong>
        {/* &nbsp; &nbsp; */}
      </div>
      <div id="Detail-show-all-reviews">
        <a href="#Detail-reviews-div">see all</a>
      </div>
    </div>
  )
}

export default DetailReviewBar
