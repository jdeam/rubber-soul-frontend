import React from 'react'

const DetailStars = ({ rating, shoeReviews }) => {
  console.log('RAINT', rating);
  console.log('REVIEWS', shoeReviews);
  let stars = Math.round(rating * 2) / 2;
  console.log(stars);
  // if (rating) {
  //   numReviews = shoeReviews.length;
  //   reviewStars = Math.round(shoeReviews.reduce((total, review) => {
  //     return total + review.star_count;
  //   }, 0) / shoeReviews.length * 2) / 2;
  // }

  let starEls = [];
  for (let i = 1; i <= 5; i++) {
    let diff = i - rating;
    if (i <= rating) {
      starEls.push(<i key={i} className="fa fa-star title is-5" style={{color: '#ed6c63'}} />)
    } else if (diff === 0.5) {
      starEls.push(<i key={i} className="fa fa-star-half-full title is-5" style={{color: '#ed6c63'}} />)
    } else {
      starEls.push(<i key={i} className="fa fa-star title is-5" />)
    }
    // if (stars >= 1) {
    //   starEls.push(<i className="fa fa-star title is-5" style={{color: '#ed6c63'}} />);
    //   stars -= 1;
    // }
    // else if (stars > 0) {
    //   starEls.push(<i className="fa fa-star-half-full title is-5" style={{color: '#ed6c63'}}></i>)
    //   stars -= 0.5;
    // }
    // else if (stars === 0){
    //   starEls.push(<i className="fa fa-star title is-5" />);
    // }
  }

  console.log(starEls);

  return (
    <div id="DetailReview-starRating">
      { starEls }
      <p>{rating}</p>
    </div>
  )
}

export default DetailStars
// map to create array of stars
