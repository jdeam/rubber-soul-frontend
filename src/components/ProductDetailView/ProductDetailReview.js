import React from 'react'
import './ProductDetailReview.css'

const ProductDetailReview = ({ review }) => {
  console.log(review)

  return (
    <div className="box">
      <div id="ProductDetailReview-rating">
        <div id="ProductDetailReview-starRating">
          <i className="fas fa-star title is-5" style={{color: '#ed6c63'}} />
          <i className="fas fa-star title is-5" style={{color: '#ed6c63'}} />
          <i className="fas fa-star title is-5" style={{color: '#ed6c63'}} />
          <i className="fas fa-star title is-5" />
          <i className="fas fa-star title is-5" />
          <p id="ProductDetailReview-starCount">{(review.star_count).toFixed(1)}</p>
        </div>
        <p id="ProductDetailReview-date">{(review.updated_at).slice(0, 10)}</p>
      </div>
      <h5 id="ProductDetailReview-title">{review.title}</h5>
      <p>{review.content}</p>
      <p id ="ProductDetailReview-user">{`${review.first_name} ${review.last_name}`}</p>
      <div id="ProductDetailReview-thumbs">
        <div id="ProductDetailReview-thumbsUp">
          <p>{review.thumbs_up}</p>
          <i id="thumb-up-icon" class="fas fa-thumbs-up"></i>
        </div>
        <div id="ProductDetailReview-thumbsDown">
          <p>{review.thumbs_down}</p>
          <i id="thumb-down-icon" class="fas fa-thumbs-down"></i>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailReview
