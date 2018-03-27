import React, { Component } from 'react';
import DetailView from './components/ProductDetailView/DetailView';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductListView/ProductList';
import 'bulma/css/bulma.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={ ProductList }/>
          <Route path="/:id" component={ DetailView }/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
