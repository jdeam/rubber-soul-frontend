import React from 'react';
import './DetailReview.css';
import DetailStars from './DetailStars';
import moment from 'moment';
moment().format();

const DetailReview = ({ review }) => {

  return (
    <div className="box">
      <div id="DetailReview-rating">
        <DetailStars rating={review.star_count}/>
        <p id="DetailReview-date">{moment(review.updated_at).format('MMMM D, YYYY')}</p>
      </div>
      <h5 id="DetailReview-title">{review.title}</h5>
      <p>{review.content}</p>
      <p id ="DetailReview-user">{`${review.first_name} ${review.last_name}`}</p>
      {/* <div id="DetailReview-thumbs">
        <div id="DetailReview-thumbsUp">
          <p>{review.thumbs_up}</p>
          <i id="thumb-up-icon" className="fas fa-thumbs-up"></i>
        </div>
        <div id="DetailReview-thumbsDown">
          <p>{review.thumbs_down}</p>
          <i id="thumb-down-icon" className="fas fa-thumbs-down"></i>
        </div>
      </div> */}
    </div>
  )
}

export default DetailReview
