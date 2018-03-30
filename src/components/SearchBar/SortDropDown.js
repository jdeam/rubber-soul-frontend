import React from 'react';
import 'bulma/css/bulma.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { applySortToShoes, saveSort } from '../../actions';

const determineSortType = (e, action, action2) => {
    let sortType = {};
    switch(e.target.value) {
        case 'Price - Low': {
            sortType.sort = 'price';
            sortType.direction = 'Low';
            break;
        }
        case 'Price - High':{
            sortType.sort = 'price';
            sortType.direction = 'High';
            break;
        }
        case 'Rating - Low': {
            sortType.sort = 'avg_star_count';
            sortType.direction = 'Low';
            break;
        }
        case 'Rating - High': {
            sortType.sort = 'avg_star_count';
            sortType.direction = 'High';
            break;
        }
        case 'Alphabetical A-Z':{
            sortType.sort = 'model';
            sortType.direction = 'Low';
            break;
        }
        case 'Alphabetical Z-A':{
            sortType.sort = 'model';
            sortType.direction = 'High';
            break;
        }
        default: {
            
        }
    }
    action2(sortType);
    action(sortType);
}

const SortDropDown = ({ applySortToShoes, saveSort }) => {
    return (
        <div className="field">
            <label className="label">Sort</label>
            <div className="control">
                <div className="select">
                    <select onChange={(e) => determineSortType(e, applySortToShoes, saveSort)} >
                        <option>- Select Option -</option>
                        <option>Price - Low</option>
                        <option>Price - High</option>
                        <option>Rating - Low</option>
                        <option>Rating - High</option>
                        <option>Alphabetical A-Z</option>
                        <option>Alphabetical Z-A</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    applySortToShoes, saveSort
}, dispatch);

export default connect(null, mapDispatchToProps)(SortDropDown);