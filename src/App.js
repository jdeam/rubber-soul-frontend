import React, { Component } from 'react';
import SearchBar from './components/SearchBar';

import ProductDetail from './components/ProductDetailView/ProductDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductListView/ProductList';
import { Route } from 'react-router-dom';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div>

        <Header />
          <Route path="/list" component={ ProductList }/>
          <Route path="/detail" component={ ProductDetail }/>
        <Footer />

      </div>
    );
  }
}

export default App;
