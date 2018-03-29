import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleShoe, resetQty, setSelectedSize } from '../../actions';
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
                <div id="DetailView-size-qty">
                  <DetailSizeDropdown
                    sizes={ this.props.shoe.sizes }
                    setSelectedSize={ this.props.setSelectedSize }
                  />
                  <DetailQtySelect
                    sizes={ this.props.shoe.sizes }
                  />
                </div>
                <br />
                <DetailPrice
                  shoePrice={ this.props.shoe.price * this.props.selectedQty }
                />
                <DetailAddToCartButton
                  shoe_id={ this.props.match.params.id }
                  qty={ this.props.selectedQty }
                  size={ this.props.selectedSize }
                />
                <br />
                <DetailItemTable
                  shoeColor={ this.props.shoe.color }
                  shoeTags={ this.props.shoe.tags }
                />
              </div>
            </div>
          </div>
        </div>

        <DetailReviews
          reviews={ this.props.shoe.reviews ? (this.props.shoe.reviews) : [] }
          shoeBrand={ this.props.shoe.brand }
          shoeModel={ this.props.shoe.model }
        />
      </div>
    ) : (<div style={ { height: "100vh" } }></div>);
  }
}

const mapStateToProps = (state) => ({ shoe: state.shoeDetail, selectedQty: state.selectedQty, selectedSize: state.selectedSize });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchSingleShoe,
  resetQty,
  setSelectedSize
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailView);
