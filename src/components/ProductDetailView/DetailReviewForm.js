import React from 'react';
import DetailStarInput from './DetailStarInput';
import './DetailReviewForm.css';
import axios from 'axios';
import Notifications, {notify} from 'react-notify-toast';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  setReviewTitle, clearReviewTitle, setReviewContent, clearReviewContent, setReviewRating, clearReviewRating, hideReviewForm, clearActiveTab, clearReviewForm, fetchSingleShoe } from '../../actions';

const DetailReviewForm = ({
  shoe_id,
  shoeBrand,
  shoeModel,
  setReviewTitle,
  clearReviewTitle,
  setReviewContent,
  clearReviewContent,
  setReviewRating,
  clearReviewRating,
  clearActiveTab,
  hideReviewForm,
  clearReviewForm,
  addReview,
  user_id,
  reviewTitle,
  reviewContent,
  reviewRating,
  fetchSingleShoe
}) => {
  const BASE_URL = `http://localhost:8080`;
  let shoeBrandModel = `${shoeBrand} ${shoeModel}`;

  const review = {
    user_id,
    shoe_id,
    title: reviewTitle,
    content: reviewContent,
    star_count: reviewRating
  }

  const submitReview = (review) => {
    const token = localStorage.getItem('token');
    return axios.post(`${BASE_URL}/auth/reviews`, review, { headers: {token} })
  }

  let confirmSubmit;
  if (reviewTitle && reviewContent && reviewRating) {
    confirmSubmit = true;
  } else {
    confirmSubmit = false;
  }

  let submitAction;
  if (confirmSubmit) {
    submitAction = (e) => {
      return submitReview(review)
        .then(res => {
          notify.show('Review Submitted!', "success", 2500);
          fetchSingleShoe(shoe_id);
          hideReviewForm();
          clearActiveTab();
          clearReviewTitle();
          clearReviewContent();
          clearReviewRating();
        })
        .catch(err => {
          console.log(err);
        });
    }
  } else {
    submitAction = (e) => {
      notify.show('Please complete all review fields', "error", 3000)
    }
  }

  return (
    <div>
      <Notifications />
      <h3 className="title is-3">{`Review "${shoeBrandModel}"`}</h3>
      <div id="review-title" className="field">
        <label className="label">Title</label>
        <div className="control">
          <input
            className="input is-focused"
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
  shoe_id: state.shoeDetail.id,
  reviewTitle: state.reviewTitle,
  reviewContent: state.reviewContent,
  reviewRating: state.reviewRating,
  user_id: state.userId
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setReviewTitle,
  clearReviewTitle,
  setReviewContent,
  clearReviewContent,
  setReviewRating,
  clearReviewRating,
  hideReviewForm,
  clearActiveTab,
  clearReviewForm,
  fetchSingleShoe
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailReviewForm);
