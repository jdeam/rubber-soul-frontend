import React from 'react';
import DetailStarInput from './DetailStarInput';
import './DetailReviewForm.css';
import Notifications, {notify} from 'react-notify-toast';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {   setReviewTitle, clearReviewTitle, setReviewContent, clearReviewContent, setReviewRating, clearReviewRating, submitReview, hideReviewForm, clearActiveTab, clearReviewForm } from '../../actions';

const DetailReviewForm = ({
  shoeBrand,
  shoeModel,
  setReviewTitle,
  clearReviewTitle,
  setReviewContent,
  clearReviewContent,
  setReviewRating,
  clearReviewRating,
  submitReview,
  clearActiveTab,
  hideReviewForm,
  clearReviewForm,
  addReview,
  reviewTitle,
  reviewContent,
  reviewRating = 5
}) => {
  let shoeBrandModel = `${shoeBrand} ${shoeModel}`;

  let user_id;  // FIXME delete after hooking up auth
  const review = {
    user_id,  // FIXME grab real user_id after hooking up auth
    title: reviewTitle,
    content: reviewContent,
    star_count: reviewRating
  }

  let confirmSubmit;
  if (reviewTitle && reviewContent && reviewRating) {
    confirmSubmit = true;
  } else {
    confirmSubmit = false;
  }

  let submitAction = confirmSubmit ? (e) => notify.show('Review Submitted!', "success") : (e) => notify.show('Please complete all review fields', "error")

  return (
    <div>
      <Notifications />
      <h3 className="title is-3">{`Review "${shoeBrandModel}"`}</h3>
      <div id="review-title" className="field">
        <label className="label">Title</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Review Title"
            onChange={ (e) => setReviewTitle(e.target.value) }
          />
        </div>
      </div>
      <div id="review-content" className="field">
        <label className="label">Review</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder={ `Your review of ${shoeBrandModel}` }
            defaultValue={""}
            onChange={ (e) => setReviewContent(e.target.value) }
          />
        </div>
      </div>
      <div id="review-rating" className="field">
        <label className="label">Rating</label>
        <DetailStarInput />
      </div>
      <div id="submit-cancel" className="field is-grouped">
        <div className="control">
          <button onClick={submitAction} className="button is-link">Submit</button>
        </div>
        <div className="control">
          <button onClick={ (e) => {hideReviewForm(); clearActiveTab(); clearReviewTitle(); clearReviewContent(); clearReviewRating();} } className="button is-text">Cancel</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  addReview: state.addReview,
  reviewTitle: state.reviewTitle,
  reviewContent: state.reviewContent,
  reviewRating: state.reviewRating
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setReviewTitle,
  clearReviewTitle,
  setReviewContent,
  clearReviewContent,
  setReviewRating,
  clearReviewRating,
  submitReview,
  hideReviewForm,
  clearActiveTab,
  clearReviewForm
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailReviewForm);
