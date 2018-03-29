import React, { Component } from 'react';
import DetailView from './components/ProductDetailView/DetailView';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductListView/ProductList';
import SignupView from './components/SignupView/SignupView';
import 'bulma/css/bulma.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleModal } from './actions';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={ ProductList }/>
          <Route path="/:id" component={ DetailView }/>
          <Route path="/signup" component={ SignupView } />
          <Footer />
          <div className={"modal " + (this.props.modal ? "is-active" : "")}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <SignupView />
            </div>
            <button onClick={() => this.props.toggleModal()} className="modal-close is-large" aria-label="close"></button>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({ 
  user_id: state.user_id, modal: state.modal
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleModal
}, dispatch);

export default connect(
  mapStateToProps, mapDispatchToProps
)(App);
