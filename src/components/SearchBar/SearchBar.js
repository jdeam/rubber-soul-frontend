import React, { Component } from 'react';

import 'bulma/css/bulma.css';
import './SearchBar.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleSelectedSize } from '../../actions';

import shoeData from '../../seedData/shoeData.json';
import levenshtein from 'fast-levenshtein';
import SearchInput from './SearchInput';
import SortDropDown from './SortDropDown';
import FilterDropDown from './FilterDropDown';
import FilterSubDropDown from './FilterSubDropDown';
import SizesFilter from './SizesFilter';

const SearchBar = ({ filter }) => {
    return(
        <div>
            <SearchInput />
            <div className="columns">
                <div className="column">
                    <div className="columns">
                        <div className="column">
                            <SortDropDown />
                        </div>
                        <div className="column">
                            <FilterDropDown />
                        </div>
                        <div className="column">
                            {filter ? <FilterSubDropDown /> : ''}
                        </div>
                    </div>
                </div>
                <div className="column">
                    <SizesFilter />
                </div>
            </div>
            
        </div>
    );
}

const mapStateToProps = (state) => ({ filter: state.filter });

export default connect(mapStateToProps)(SearchBar);
