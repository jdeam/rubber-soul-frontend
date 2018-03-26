import React, { Component } from 'react';
import ProductDetail from './components/ProductDetailView/ProductDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductListView/ProductList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/shoes" component={ ProductList }/>
          <Route path="/shoes/:id" component={ ProductDetail }/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
