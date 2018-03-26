import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleShoe } from '../../actions';
import ProductDetailTitle from './ProductDetailTitle';
import ProductDetailImg from './ProductDetailImg';
import ProductDetailPrice from './ProductDetailPrice';
import ProductDetailReviewBar from './ProductDetailReviewBar';
import ProductDetailDescription from './ProductDetailDescription';
import ProductDetailSizeDropdown from './ProductDetailSizeDropdown';
import ProductDetailQtySelect from './ProductDetailQtySelect';
import ProductDetailAddToCartButton from './ProductDetailAddToCartButton';
import ProductDetailItemTable from './ProductDetailItemTable';
import ProductDetailReviews from './ProductDetailReviews';
import './ProductDetail.css';

class ProductDetail extends Component {
  componentDidMount() {
    this.props.fetchSingleShoe(this.props.match.params.id);
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="main-container">
        <ProductDetailTitle
          shoeBrand={ this.props.shoe.brand }
          shoeModel={ this.props.shoe.model }
        />
        <div id="ProductDetail-main" className="section">
          <div id="ProductDetail-main-container" className="container">
            <div className="columns">
              <ProductDetailImg
                shoeImg={ this.props.shoe.imgURL }
              />

              <div className="column is-5 is-offset-1">
                <ProductDetailPrice
                  shoePrice={ this.props.shoe.price }
                />
                <hr />
                <br />
                <ProductDetailReviewBar
                  shoeReviews={ this.props.shoe.reviews }
                />
                <br />
                <ProductDetailDescription
                  shoeDescription={ this.props.shoe.description }
                />
                <br />
                <br />
                <ProductDetailSizeDropdown
                  sizes={ this.props.shoe.sizes }
                />
                <ProductDetailQtySelect
                  sizes={ this.props.shoe.sizes }
                />
                <ProductDetailAddToCartButton />
                <br />
                <ProductDetailItemTable
                  shoeColor={ this.props.shoe.color }
                  shoeTags={ this.props.shoe.tags }
                />
              </div>
            </div>
          </div>
        </div>

        <ProductDetailReviews reviews={ this.props.shoe.reviews ? (this.props.shoe.reviews) : [] } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ shoe: state.shoeDetail });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchSingleShoe
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
