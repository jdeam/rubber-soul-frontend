import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { queryShoes } from '../../actions';

const determineQueryStr = (e, action, data) => {
    action(e.target.value, data);
}

const SearchInput = ({ queryShoes, shoes }) => {
    return(
        <div className="field">
            <label className="label">Find A Shoe</label>
            <div className="control has-icons-left">
                <input className="input" type="text" placeholder="Enter Search Query Here" onChange={(e) => determineQueryStr(e, queryShoes, shoes)}/>
                <span className="icon is-small is-left">
                    <i className="fas fa-search"></i>
                </span>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({ shoes: state.shoes });

const mapDispatchToProps = (dispatch) => bindActionCreators({
    queryShoes
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);