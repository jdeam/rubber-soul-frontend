import React, { Component } from 'react';

import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        {/* <ProductDetail /> */}
          {/* <Route path="/list" component={  }/> */}
          <Route path="/detail" component={ ProductDetail }/>
        <Footer />
      </div>
    );
  }
}

export default App;
