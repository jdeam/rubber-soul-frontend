import React from 'react';
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
import './ProductDetail.css'
import axios from 'axios'
// const shoes = require('../../seedData/shoeData.json')
const BASE_URL = 'http://localhost:8080';

// const ProductDetail = () => {
class ProductDetail extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        shoe: null,
      }
  }

  async componentWillMount() {
    this.getShoe();
  }

  async getShoe() {
    const response = await axios.get(`${BASE_URL}/api/shoes/1`);

    const shoe = response.data.data;

    this.setState({
      shoe
    });
  }

  render() {
    // console.log(shoes);
    console.log('STATE?', this.state)

    return this.state.shoe ? (
      <div className="main-container">
        <ProductDetailTitle
          shoeBrand={this.state.shoe.brand}
          shoeModel={this.state.shoe.model}
        />
        <div id="ProductDetail-main" className="section">
          <div id="ProductDetail-main-container" className="container">
            <div className="columns">
              <ProductDetailImg
                shoeImg={this.state.shoe.imgURL}
              />

              <div className="column is-5 is-offset-1">
                <ProductDetailPrice
                  shoePrice={this.state.shoe.price}
                />
                <hr />
                <br />
                <ProductDetailReviewBar
                  shoeReviews={this.state.shoe.reviews}
                />
                <br />
                <ProductDetailDescription
                  shoeDescription={this.state.shoe.description}
                />
                <br />
                <br />
                <ProductDetailSizeDropdown
                  shoeSizes={this.state.shoe.sizes}
                />
                <ProductDetailQtySelect
                  shoeSizes={this.state.shoe.sizes}
                />
                <ProductDetailAddToCartButton />
                <br />
                <ProductDetailItemTable
                  shoeColor={this.state.shoe.color}
                  shoeTags={this.state.shoe.tags}
                />
              </div>
            </div>
          </div>
        </div>

        <div id="ProductDetail-reviews-div" className="section">
          <div id="ProductDetail-reviews-container" className="container">
            <div className="tabs">
              <ul>
                <li className="is-active"><a>Reviews</a></li>
                {/* <li className="is-active"><a>Overview</a></li>
                <li><a>Details</a></li>
                <li><a>Reviews</a></li>
                <li><a>Shipping Calculator</a></li> */}
              </ul>
            </div>
            <div className="box">
              {/* <ProductDetailReviews
                shoeReviews={this.state.shoe.reviews}
              /> */}
            </div>
          </div>
        </div>
      </div>
    ) : <div>{ "blah" }</div>
  }
}

export default ProductDetail
