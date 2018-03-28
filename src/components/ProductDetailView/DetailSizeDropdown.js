import React from 'react';
import './DetailSizeDropdown.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedSize, clearSelectedSize } from '../../actions';;

const DetailSizeDropdown = ({ sizes, selectedSize, setSelectedSize, clearSelectedSize }) => {

  const availableSizes = sizes ?
    sizes.filter(size => {
      return Object.values(size)[0];
    }).map(size => {
      return Object.keys(size)[0];
    }) : [];


  return (
    <div id="Detail-size-dropdown">
      <p><strong>Size</strong></p>
        <div className="control">
          <div className="select">
            <select
              value={ selectedSize ? selectedSize : '' }
              onChange={ (e) => e.target.value === 'Select Size' ? clearSelectedSize() : setSelectedSize(e.target.value) }
            >
              <option>Select Size</option>
              { availableSizes.map((size, i) => {
                return (
                  <option key={i}>{`${size}`}</option>
                )
              }) }
            </select>
          </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => ({selectedSize: state.selectedSize});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setSelectedSize,
  clearSelectedSize
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailSizeDropdown);
