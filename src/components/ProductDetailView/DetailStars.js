import React from 'react'
import './DetailStars.css'

const DetailStars = ({ rating }) => {

  let counter = Math.round(rating * 2)/2;
  let starEls = [];

  for (let i = 1; i <= 5; i++) {
    if (counter >= 1) {
      starEls.push(
        <i
          key={i}
          className="fa fa-star title is-6"
          style={{color: '#ed6c63'}}
        />
      );
      counter -= 1;
    }
    else if (counter > 0) {
      starEls.push(
        <span key={i} id="fa-stack">
          <i
            id="star-left-half"
            className="fa fa-star-half title is-6"
            style={{color: '#ed6c63'}}
          />
          <i
            id="star-right-half"
            className="fa fa-star-o title is-6"
            style={{color: '#ed6c63'}}
          />
        </span>
      );
      counter -= 0.5;
    }
    else if (counter === 0) {
      starEls.push(
        <i
          key={i}
          className="fa fa-star-o title is-6"
          style={{color: '#ed6c63'}}
        />
      );
    }
  }

  return (
    <div id="DetailReview-starRating">
      { rating ? starEls : <div></div> }
    </div>
  )
}

export default DetailStars;
