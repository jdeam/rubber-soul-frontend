import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setQueryString } from '../../actions';

const updateQueryStr = (e, action) => {
    action(e.target.value);
}

const SearchInput = ({ setQueryString, shoes, searchQuery, selectedSizes }) => {
  console.log(searchQuery);
    return(
        <div className="field">
            <div className="control has-icons-left">
                <input
                  ref={(input) => { this.searchInput = input; }}
                  className="input is-rounded"
                  type="search"
                  placeholder="Search shoes"
                  value={searchQuery}
                  onChange={(e) => updateQueryStr(e, setQueryString)}
                />
                <span className="icon is-small is-left">
                    <i className="fas fa-search"></i>
                </span>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({ shoes: state.shoes, searchQuery: state.searchQuery, selectedSizes:state.selectedSizes });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setQueryString
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
