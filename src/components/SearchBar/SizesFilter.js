import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleSelectedSize } from '../../actions';

const determineSizeToToggle = (e, action) => {
    action(parseFloat(e.target.textContent));
}

const sizeIsSelected = (size, selectedSizes) => {
    if (selectedSizes.includes(size)) return "is-dark"
}

const SizesFilter = ({ sizes, selectedSizes, toggleSelectedSize }) => {
    return (
        <div className="tags">
           <label className="label">Sizes</label>
            {sizes.map(size => {
                return (
                    <span className={"tag " + sizeIsSelected(size, selectedSizes)} onClick={(e) => determineSizeToToggle(e, toggleSelectedSize)}>{size}</span>
                );
            })} 
        </div>
    );
};

const mapStateToProps = (state) => ({ sizes: state.sizes, selectedSizes: state.selectedSizes });

const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleSelectedSize
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SizesFilter);