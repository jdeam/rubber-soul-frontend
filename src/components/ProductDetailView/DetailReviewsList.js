import React from 'react'
import DetailReview from './DetailReview'

const DetailReviewsList = ({ reviews }) => {
  let reviewEls = reviews.map((review, i) => {
    return <DetailReview key={ i } review={ review }/>
  })

  return (
    <div>
      { reviewEls }
    </div>
  )
}


export default DetailReviewsList
