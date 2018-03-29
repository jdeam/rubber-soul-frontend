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
  hideReviewForm
}) => {
  let reviewsTabClass;
  let writeReviewTabClass;

  activeTab ? writeReviewTabClass = "is-active" : reviewsTabClass = "is-active";

  //FIXME validation for auth, if not auth display 'Please sign in to submit a review'

  // let userAuth = false;
  let userAuth = true;
  let userAuthenticated = userAuth ? (e) => {showReviewForm('showForm'); setActiveTab('writeReview')} : (e) => notify.show('Please sign in to submit a review.', "error");

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
