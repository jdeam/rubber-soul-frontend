import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const FilterSubDropDown = ({ filter, filterList }) => {
    return ( 
        <div className="column">
            <div className="field">
                <label className="label">{filter} List</label>
                <div className="control">
                    <div className="select">
                        <select value={"default"}>
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


const mapStateToProps = (state) => ({ filter: state.filter, filterList: state.filterList });

const mapDispatchToProps = (dispatch) => bindActionCreators({
    
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FilterSubDropDown);