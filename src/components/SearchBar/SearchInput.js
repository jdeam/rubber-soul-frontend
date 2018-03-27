import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { queryShoes } from '../../actions';

const determineQueryStr = (e, action, data, sizes) => {
    action(e.target.value, data, sizes);
}

const SearchInput = ({ queryShoes, shoes, searchQuery, selectedSizes }) => {
    return(
        <div className="field">
            <div className="control has-icons-left">
                <input className="input is-rounded" type="search" placeholder="Search shoes" defaultValue={searchQuery} onChange={(e) => determineQueryStr(e, queryShoes, shoes, selectedSizes)}/>
                <span className="icon is-small is-left">
                    <i className="fas fa-search"></i>
                </span>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({ shoes: state.shoes, searchQuery: state.searchQuery, selectedSizes:state.selectedSizes });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  queryShoes
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
