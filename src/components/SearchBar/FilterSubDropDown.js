import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { queryShoes } from '../../actions';

const queryByFilterStr = (e, action, data) => {
    action(e.target.value, data);
}

const FilterSubDropDown = ({ filter, filterList, queryShoes, shoes }) => {
    return ( 
        <div className="column">
            <div className="field">
                <label className="label">{filter} List</label>
                <div className="control">
                    <div className="select">
                        <select value={"default"} onChange={(e) => queryByFilterStr(e, queryShoes, shoes)}>
                            <option>- Select Option -</option>
                            {filterList.map(filterItem => {
                                return <option>{filterItem}</option>
                            })}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    ); 
};


const mapStateToProps = (state) => ({ filter: state.filter, filterList: state.filterList, shoes: state.shoes });

const mapDispatchToProps = (dispatch) => bindActionCreators({
    queryShoes
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FilterSubDropDown);