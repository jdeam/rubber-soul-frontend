import React from 'react';
import ProductRows from './ProductRows';
import SearchBar from '../SearchBar/SearchBar.js';
import './ProductList.css';
import { connect } from 'react-redux';

const ProductList = ({ shoesInView }) => (
  <div className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-12">
          <div className="title">All Shoes</div>
        </div>
      </div>
      <hr />
      <SearchBar />
      <ProductRows shoes={ shoesInView } />
    </div>
  </div>
);

const mapStateToProps = (state) => ({ shoesInView: state.shoesInView });

export default connect(mapStateToProps)(ProductList);
