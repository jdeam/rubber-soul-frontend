import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActiveTab, showReviewForm, hideReviewForm } from '../../actions';

const DetailReviewsNav = ({
  reviewView,
  activeTab,
  setActiveTab,
  showReviewForm,
  hideReviewForm
}) => {
  let reviewsTabClass;
  let writeReviewTabClass;

  activeTab ? writeReviewTabClass = "is-active" : reviewsTabClass = "is-active";

  return(
    <div className="tabs">
      <ul>
        <li className={reviewsTabClass? `${reviewsTabClass}` : ''}>
            <a onClick={ (e) => {hideReviewForm(); setActiveTab('');} }>Reviews</a>
        </li>
        <li className={writeReviewTabClass? `${writeReviewTabClass}` : ''}>
          <a onClick={ (e) => {showReviewForm('showForm'); setActiveTab('writeReview'); } } value="Write A Review">Write A Review</a>
        </li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({ reviewView: state.reviewView, activeTab: state.activeTab});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setActiveTab,
  showReviewForm,
  hideReviewForm
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailReviewsNav);
