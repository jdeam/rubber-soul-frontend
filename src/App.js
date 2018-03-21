import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
          {/* <Route path="/list" component={  }/>
          <Route path="/detail" component={  }/> */}
        <Footer />
      </div>
    );
  }
}

export default App;
