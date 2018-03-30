import React, { Component } from 'react';
import DetailView from './components/ProductDetailView/DetailView';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductListView/ProductList';
import Checkout from './components/CheckoutView/Checkout';
import Modal from './components/Modal/Modal';
import Cart from './components/CartView/Cart';
import 'bulma/css/bulma.css';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserInfo } from './actions';


class App extends Component {

  componentDidMount() {
    if (this.props.user_id) this.props.setUserInfo(this.props.user_id);
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/checkout" component={ Checkout } />
            <Route path="/cart" component={ Cart } />
            <Route path="/:id" component={ DetailView }/>
            <Route path="/" component={ ProductList }/>
          </Switch>
          <Footer />
          <Modal />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  user_id: state.userId
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setUserInfo
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
