import React from 'react';
import ProductDetailTitle from './ProductDetailTitle';
import ProductDetailImg from './ProductDetailImg';
import ProductDetailPrice from './ProductDetailPrice';
import ProductDetailReviewBar from './ProductDetailReviewBar';
import ProductDetailDescription from './ProductDetailDescription';
const shoes = require('../seedData/shoeData.json')

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
      <div className="section">
        <div className="container">
          <div className="columns">
            <ProductDetailImg shoeImg={shoeImg} />

            <div className="column is-5 is-offset-1">
              <ProductDetailPrice shoePrice={shoePrice} />
              <hr />
              <br />
              <ProductDetailReviewBar shoeReviews={shoeReviews}/>
              <br />
              <ProductDetailDescription shoeDescription={shoeDescription} />
              <br />
              <br />

              <p><strong>Size</strong></p>
              <div className="dropdown">
                <div className="dropdown-trigger">
                  <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                    <span>Select Size</span>
                    <span className="icon is-small">
                      <i className="fas fa-angle-down" aria-hidden="true" />
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                  <div className="dropdown-content">
                    <a href="#" className="dropdown-item">
                      Overview
                    </a>
                    {/* <a href="#" className="dropdown-item">
                      Modifiers
                    </a>
                    <a href="#" className="dropdown-item">
                      Grid
                    </a>
                    <a href="#" className="dropdown-item">
                      Form
                    </a>
                    <a href="#" className="dropdown-item">
                      Elements
                    </a>
                    <a href="#" className="dropdown-item">
                      Components
                    </a>
                    <a href="#" className="dropdown-item">
                      Layout
                    </a> */}
                    <hr className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      More
                    </a>
                  </div>
                </div>
              </div>

              <p><strong>Quantity</strong></p>
              <div className="dropdown">
                <div className="dropdown-trigger">
                  <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                    <span>Select Quantity</span>
                    <span className="icon is-small">
                      <i className="fas fa-angle-down" aria-hidden="true" />
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                  <div className="dropdown-content">
                    <a href="#" className="dropdown-item">
                      Overview
                    </a>
                    {/* <a href="#" className="dropdown-item">
                      Modifiers
                    </a>
                    <a href="#" className="dropdown-item">
                      Grid
                    </a>
                    <a href="#" className="dropdown-item">
                      Form
                    </a>
                    <a href="#" className="dropdown-item">
                      Elements
                    </a>
                    <a href="#" className="dropdown-item">
                      Components
                    </a>
                    <a href="#" className="dropdown-item">
                      Layout
                    </a> */}
                    <hr className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      More
                    </a>
                  </div>
                </div>
              </div>

              <p className>
                {/* <a href="#">
                  <i className="fas fa-minus cart-icon" />
                </a>
                &nbsp;
                <input type="text" name className="input has-text-centered" defaultValue={1} style={{width: 40}} />
                &nbsp;
                <a href="#">
                  <i className="fas fa-plus cart-icon" />
                </a> */}
                {/* &nbsp; &nbsp; &nbsp; */}
                <a className="button is-primary">Add to cart</a>
              </p>
              <br />
              <table className="table">
                <tbody>
                  <tr>
                    <td className="has-text-right">
                      <strong>Item ID</strong>
                    </td>
                    <td>1234</td>
                  </tr>
                  <tr>
                    <td className="has-text-right">
                      <strong>Color</strong>
                    </td>
                    <td>{`${shoeColor}`}</td>
                  </tr>
                  <tr>
                    <td className="has-text-right">
                      <strong>Tags</strong>
                    </td>
                    <td>{`${shoeTags}`}</td>
                  </tr>
                  <tr>
                    <td className="has-text-right">
                      <strong>Views</strong>
                    </td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
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
            <p>
              Sample text for Reviews
              {`${shoeReviews}`}
            </p><br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
