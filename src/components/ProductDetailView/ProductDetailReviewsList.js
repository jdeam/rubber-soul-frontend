import React from 'react'
import ProductDetailReview from './ProductDetailReview'

const ProductDetailReviewsList = ({ reviews }) => {
  let reviewEls = reviews.map((review, i) => {
    return <ProductDetailReview key={ i } review={ review }/>
  })

  return (
    <div>
      { reviewEls }
    </div>
  )
}


export default ProductDetailReviewsList
