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
const shoes = require('../../seedData/shoeData.json')

const ProductDetail = () => {
  // console.log(shoes);
  console.log('1', shoes[0]);
  let shoeBrand = shoes[0].brand;
  let shoeModel = shoes[0].model;
  let shoeImg = shoes[0].imgURL;
  let shoeDescription = shoes[0].description;
  let shoeReviews = shoes[0].reviews;
  let shoePrice = shoes[0].price;
  let shoeColor = shoes[0].color;
  let shoeSizes = shoes[0].sizes;
  let shoeTags = shoes[0].tags;

  return (
    <div className="main-container">
      <ProductDetailTitle
        shoeBrand={shoeBrand}
        shoeModel={shoeModel}
      />
      <div id="ProductDetail-main" className="section">
        <div id="ProductDetail-main-container" className="container">
          <div className="columns">
            <ProductDetailImg
              shoeImg={shoeImg}
            />

            <div className="column is-5 is-offset-1">
              <ProductDetailPrice
                shoePrice={shoePrice}
              />
              <hr />
              <br />
              <ProductDetailReviewBar
                shoeReviews={shoeReviews}
              />
              <br />
              <ProductDetailDescription
                shoeDescription={shoeDescription}
              />
              <br />
              <br />
              <ProductDetailSizeDropdown
                shoeSizes={shoeSizes}
              />
              <ProductDetailQtySelect
                shoeSizes={shoeSizes}
              />
              <ProductDetailAddToCartButton />
              <br />
              <ProductDetailItemTable
                shoeColor={shoeColor}
                shoeTags={shoeTags}
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
            <ProductDetailReviews
              shoeReviews={shoeReviews}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
