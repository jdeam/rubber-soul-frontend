import React from 'react';
import ProductRows from './ProductRows';
import './ProductList.css';
import { connect } from 'react-redux';

const ProductList = ({ shoes }) => (
  <div className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-12">
          <div className="title">All Shoes</div>
        </div>
      </div>
      <hr />
      <ProductRows shoes={ shoes } />
    </div>
  </div>
);

const mapStateToProps = (state) => ({ shoes: state.shoes });

export default connect(mapStateToProps)(ProductList);
