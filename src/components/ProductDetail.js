import React, { Component } from 'react';
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
    <div>
      <div className="section product-header">
        <div className="container">
          <div className="columns">
            <div className="column">
              <span className="title is-3">{`${shoeBrand}`}</span>
              <span className="title is-3 has-text-muted">&nbsp;|&nbsp;</span>
              <span className="title is-4 has-text-muted">{`${shoeModel}`}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <div className="image is-2by2">
                <img src={`${shoeImg}`} alt="product"/>
              </div>
            </div>
            <div className="column is-5 is-offset-1">
              {/* <div className="title is-2">Item Title</div> */}
              <p className="title is-3 has-text-muted">${`${shoePrice}`}</p>
              <hr />
              <br />
              <p className>
                <i className="fas fa-star title is-5" style={{color: '#ed6c63'}} />
                <i className="fas fa-star title is-5" style={{color: '#ed6c63'}} />
                <i className="fas fa-star title is-5" style={{color: '#ed6c63'}} />
                <i className="fas fa-star title is-5" />
                <i className="fas fa-star title is-5" />
                &nbsp; &nbsp;
                <strong>41 Reviews</strong>
                &nbsp; &nbsp;
                <a href="#">show all</a>
              </p>
              <br />
              <p>{`${shoeDescription}`}</p>
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
