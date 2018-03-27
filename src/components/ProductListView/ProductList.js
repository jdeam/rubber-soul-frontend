import React, { Component } from 'react';
import ProductRows from './ProductRows';
import './ProductList.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearShoe, queryShoes } from '../../actions';
import SearchBar from '../SearchBar/SearchBar'

class ProductList extends Component {
  componentDidMount() {
    this.props.clearShoe()
    this.props.queryShoes('', this.props.shoes, this.props.selectedSizes)
  }

  render () {
    return (
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <div className="title">Displaying  {this.props.appliedQuery ? ` All Shoes Matching: "${this.props.appliedQuery}"` : `All Shoes`}</div>
            </div>
          </div>
          <hr />
          <ProductRows shoes={ this.props.shoesInView } />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ shoesInView: state.shoesInView, appliedQuery: state.appliedQuery, shoes: state.shoes, selectedSizes: state.selectedSizes });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  clearShoe,
  queryShoes
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
