import React from 'react';
import shoes from '../../seedData/shoeData.json';
import ProductRows from './ProductRows';
import './ProductList.css';

const ProductList = () => {

  return (
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
}

export default ProductList;
