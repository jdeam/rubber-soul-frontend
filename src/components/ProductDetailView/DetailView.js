import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleShoe, resetQty } from '../../actions';
import DetailTitle from './DetailTitle';
import DetailImg from './DetailImg';
import DetailPrice from './DetailPrice';
import DetailReviewBar from './DetailReviewBar';
import DetailDescription from './DetailDescription';
import DetailSizeDropdown from './DetailSizeDropdown';
import DetailQtySelect from './DetailQtySelect';
import DetailAddToCartButton from './DetailAddToCartButton';
import DetailItemTable from './DetailItemTable';
import DetailReviews from './DetailReviews';

class DetailView extends Component {
  componentDidMount() {
    this.props.fetchSingleShoe(this.props.match.params.id);
    this.props.resetQty();
    window.scrollTo(0, 0);
  }

  render() {
    return this.props.shoe ? (
      <div className="main-container">
        {/* <DetailTitle
          shoeBrand={ this.props.shoe.brand }
          shoeModel={ this.props.shoe.model }
        /> */}
        <div id="Detail-main" className="section">
          <div id="Detail-main-container" className="container">
            <div className="columns">
              <DetailImg
                shoeImg={ this.props.shoe.imgURL }
              />

              <div className="column is-5 is-offset-1">
                <DetailTitle
                  shoeBrand={ this.props.shoe.brand }
                  shoeModel={ this.props.shoe.model }
                />
                {/* <DetailPrice
                  shoePrice={ this.props.shoe.price }
                /> */}
                <hr />
                <br />
                <DetailReviewBar
                  shoeReviews={ this.props.shoe.reviews }
                />
                <br />
                <DetailDescription
                  shoeDescription={ this.props.shoe.description }
                />
                <br />
                <br />
                <DetailSizeDropdown
                  sizes={ this.props.shoe.sizes }
                />
                <DetailQtySelect
                  sizes={ this.props.shoe.sizes }
                />
                <DetailAddToCartButton />
                <br />
                <DetailItemTable
                  shoeColor={ this.props.shoe.color }
                  shoeTags={ this.props.shoe.tags }
                />
              </div>
            </div>
          </div>
        </div>

        <DetailReviews reviews={ this.props.shoe.reviews ? (this.props.shoe.reviews) : [] } />
      </div>
    ) : (<div></div>);
  }
}

const mapStateToProps = (state) => ({ shoe: state.shoeDetail });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchSingleShoe,
  resetQty
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailView);
