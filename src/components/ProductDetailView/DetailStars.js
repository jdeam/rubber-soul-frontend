import React from 'react'
import './DetailStars.css'

const DetailStars = ({ rating, shoeReviews }) => {
  let avgStars;
  if (shoeReviews) {
    avgStars = Math.round(shoeReviews.reduce((total, review) => {
      return total + review.star_count;
    }, 0) / shoeReviews.length * 2) / 2;
  }
  let ratingNum = avgStars ? avgStars : rating;
  let counter = ratingNum;
  let starEls = [];

  for (let i = 1; i <= 5; i++) {
    if (counter >= 1) {
      starEls.push(<i key={i} className="fa fa-star title is-5" style={{color: '#ed6c63'}} />);
      counter -= 1;
    }
    else if (counter > 0) {
      starEls.push(
        <span id="fa-stack">
          <i key={i} id="star-left-half" className="fa fa-star-half title is-5" style={{color: '#ed6c63'}}></i>
          <i key={i} id="star-right-half" className="fa fa-star-o title is-5"  style={{color: '#ed6c63'}} />
        </span>
      )
      counter -= 0.5;
    }
    else if (counter === 0) {
      starEls.push(
        <i key={i} className="fa fa-star-o title is-5"  style={{color: '#ed6c63'}} />
      );
    }
  }

  return (
    <div id="DetailReview-starRating">
      { starEls }
    </div>
  )
}

export default DetailStars
