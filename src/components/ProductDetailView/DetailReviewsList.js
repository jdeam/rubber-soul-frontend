import React from 'react';
import DetailReview from './DetailReview';
import DetailReviewForm from './DetailReviewForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showReviewForm, hideReviewForm } from '../../actions';

const DetailReviewsList = ({
  reviews,
  shoeBrand,
  shoeModel,
  reviewView,
  showReviewForm,
  hideReviewForm
}) => {
  let reviewEls = reviews.map((review, i) => {
    return <DetailReview key={ i } review={ review }/>
  })

  return (
    <div>
      { !reviewView ? reviewEls : <DetailReviewForm shoeBrand={ shoeBrand } shoeModel={ shoeModel } />}
    </div>
  )
}

const mapStateToProps = (state) => ({ reviewView: state.reviewView });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  showReviewForm,
  hideReviewForm
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailReviewsList);
