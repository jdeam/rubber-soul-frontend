import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleSelectedSizes } from '../../actions';

const determineSizeToToggle = (e, action) => {
    action(parseFloat(e.target.textContent));
}

const sizeIsSelected = (size, selectedSizes) => {
    if (selectedSizes.includes(size)) return "is-dark"
}

const SizesFilter = ({ sizes, selectedSizes, toggleSelectedSizes }) => {
    return (
        <div className="tags">
           <label className="label">Sizes</label>
            {sizes.map(size => {
                return (
                    <span className={"tag " + sizeIsSelected(size, selectedSizes)} onClick={(e) => determineSizeToToggle(e, toggleSelectedSizes)}>{size}</span>
                );
            })}
        </div>
    );
};

const mapStateToProps = (state) => ({ sizes: state.sizes, selectedSizes: state.selectedSizes });

const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleSelectedSizes
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SizesFilter);
