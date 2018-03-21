import React, { Component } from 'react';
import ProductDetail from './components/ProductDetail';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductDetail />
      </div>
    );
  }
}

export default App;
