import React, { Component } from 'react';
import ProductRows from './ProductRows';
import SortDropDown from '../SearchBar/SortDropDown';
import './ProductList.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearShoe, queryShoes, clearSelectedSize, hideReviewForm, clearReviewForm, clearActiveTab, applySortToShoes, saveSort, setUserInfo } from '../../actions';

class ProductList extends Component {
  componentDidMount() {
    this.props.clearShoe();
    this.props.clearSelectedSize();
    this.props.clearActiveTab();
    this.props.hideReviewForm();
    this.props.clearReviewForm();
    if (this.props.user_id) this.props.setUserInfo(this.props.user_id);
    this.props.saveSort({});
    this.props.queryShoes(this.props.searchQuery, this.props.shoes);
    this.props.applySortToShoes(this.props.sortType);
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <div className="title is-2 ProductList-title">
                  { "All Shoes" + (this.props.appliedQuery ?
                    ` matching "${this.props.appliedQuery}"` : "") }
                </div>
                <div className="ProductList-sortDrop">
                  <SortDropDown />
                </div>
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
  selectedSize: state.selectedSize,
  sort: state.sort,
  searchQuery: state.searchQuery,
  user_id: state.userId
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  clearShoe,
  queryShoes,
  applySortToShoes,
  clearSelectedSize,
  hideReviewForm,
  clearReviewForm,
  clearActiveTab,
  saveSort,
  setUserInfo
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
