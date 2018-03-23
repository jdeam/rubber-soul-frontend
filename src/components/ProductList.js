import React from 'react';
import shoes from '../seedData/shoeData.json';
import './ProductList.css';

const ProductList = () => (
  <div className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-8">
          <div className="title">All shoes</div>
        </div>
        <div className="column is-4 has-text-right">
          <a className="button is-active">
            <i className="fa fa-th title is-5" />
          </a>
          <a className="button">
            <i className="fa fa-align-justify title is-5" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ProductList;
