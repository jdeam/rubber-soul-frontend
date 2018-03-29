import React from 'react';
import Notifications, {notify} from 'react-notify-toast';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActiveTab, showReviewForm, hideReviewForm } from '../../actions';

const DetailReviewsNav = ({
  reviewView,
  activeTab,
  setActiveTab,
  showReviewForm,
  hideReviewForm,
  user_id
}) => {
  let reviewsTabClass;
  let writeReviewTabClass;

  activeTab ? writeReviewTabClass = "is-active" : reviewsTabClass = "is-active";

  let userAuthenticated = user_id ? (e) => {showReviewForm('showForm'); setActiveTab('writeReview')} : (e) => notify.show('Please sign in to submit a review.', "error");

  return(
    <div className="tabs">
      <Notifications />
      <ul>
        <li className={reviewsTabClass? `${reviewsTabClass}` : ''}>
            <a onClick={ (e) => {hideReviewForm(); setActiveTab('');} }>Reviews</a>
        </li>
        <li className={writeReviewTabClass? `${writeReviewTabClass}` : ''}>
          <a onClick={ userAuthenticated } value="Write A Review">Write A Review</a>
        </li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({ reviewView: state.reviewView, activeTab: state.activeTab, user_id: state.userId });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setActiveTab,
  showReviewForm,
  hideReviewForm
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailReviewsNav);
