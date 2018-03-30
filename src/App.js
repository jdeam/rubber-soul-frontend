import React, { Component } from 'react';
import DetailView from './components/ProductDetailView/DetailView';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductListView/ProductList';
import Checkout from './components/CheckoutView/Checkout';
import Modal from './components/Modal/Modal';
import 'bulma/css/bulma.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={ ProductList }/>
            <Route path="/checkout" component={ Checkout } />
            <Route path="/:id" component={ DetailView }/>
          </Switch>
          <Footer />
          <Modal />
        </div>
      </Router>
    );
  }
}

export default App;
