import React, { Component } from 'react';
import ProductRows from './ProductRows';
import './ProductList.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearShoe } from '../../actions';

class ProductList extends Component {
  componentDidMount() {
    this.props.clearShoe()
  }

  render () {
    return (
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <div className="title">All Shoes</div>
            </div>
          </div>
          <hr />
          <ProductRows shoes={ this.props.shoes } />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ shoes: state.shoes });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  clearShoe
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
