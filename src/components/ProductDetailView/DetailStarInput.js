import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  setReviewRating, clearReviewRating } from '../../actions';
import FontAwesome from 'react-fontawesome';

class DetailStarInput extends Component {

  state = {
    hoverId: null
  }

  createStars = (rating) => {
    const starEls = [];

    for (let i = 1; i <=5 ; i++) {
      starEls.push(
        <a
          key={i}
          onClick={ () => this.props.setReviewRating(i) }
        >
          <FontAwesome
            className="title"
            name={ "star" + (rating >= i ? "": "-o" )}
            style={{color: '#ed6c63'}}
          />
        </a>
      );
    }
    return starEls;
  }

  render() {
    return (
      <div>
        { this.createStars(this.props.rating) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rating: state.reviewRating
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setReviewRating,
  clearReviewRating
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailStarInput);
