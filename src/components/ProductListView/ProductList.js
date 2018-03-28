import React, { Component } from 'react';
import ProductRows from './ProductRows';
import './ProductList.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearShoe, queryShoes, clearSelectedSize } from '../../actions';

class ProductList extends Component {
  componentDidMount() {
    this.props.clearShoe();
    this.props.clearSelectedSize();
    this.props.queryShoes('', this.props.shoes);
  }

  render () {
    return (
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <div className="title"> {this.props.appliedQuery ? `Displaying All Shoes Matching: "${this.props.appliedQuery}"` : `All Shoes`}</div>
            </div>
          </div>
          <hr />
          <ProductRows shoes={ this.props.shoesInView } />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  shoesInView: state.shoesInView,
  appliedQuery: state.appliedQuery,
  shoes: state.shoes,
  selectedSize: state.selectedSize
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  clearShoe,
  queryShoes,
  clearSelectedSize,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
