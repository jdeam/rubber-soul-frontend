import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFilter, loadFilterList } from '../../actions';

const determineFilter = (e, action, action2) => {
    if (e.target.value !== '- Select Option -') {
        action(e.target.value);
        action2(e.target.value);
    } else {
        action('');
    }
}

const FilterDropDown = ({ setFilter, loadFilterList }) => {
    return (
        <div className="field">
            <label className="label">Filter</label>
            <div className="control">
                <div className="select">
                    <select onChange={(e) => determineFilter(e, setFilter, loadFilterList)}>
                        <option>- Select Option -</option>
                        <option>Brands</option>
                        <option>Colors</option>
                        <option>Tags</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setFilter, loadFilterList
}, dispatch);

export default connect(null, mapDispatchToProps)(FilterDropDown);