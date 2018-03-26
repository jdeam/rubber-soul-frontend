import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './SearchBar.css';
import shoeData from '../../seedData/shoeData.json';
import levenshtein from 'fast-levenshtein';
import SearchInput from './SearchInput';
import SortDropDown from './SortDropDown';
import FilterDropDown from './FilterDropDown';
import FilterSubDropDown from './FilterSubDropDown';

export default class extends Component {
    state = { shoes: [], filter: undefined, sort: undefined, selectedSizes: [], tags: [], sizes: [], colors: [], brands: [] };

    componentDidMount() {
        let tagsList = [];
        let sizesList = [];
        let colorsList = [];
        let brandsList = [];
        shoeData.forEach(shoe => {
            if (!colorsList.includes(shoe.color)) colorsList.push(shoe.color);
            if (!brandsList.includes(shoe.brand)) brandsList.push(shoe.brand);
            shoe.sizes.forEach(size => {
                for (let num in size) {
                    if (!sizesList.includes(num)) sizesList.push(num);
                }
            });
            shoe.tags.forEach(tag => {
                if (!tagsList.includes(tag)) tagsList.push(tag);
            });
        });
        this.setState({ shoes: shoeData, tags: tagsList, sizes: sizesList, colors: colorsList, brands: brandsList });
    }

    queryShoes = (e, sizesState = []) => {
        let searchQuery = e.target.value.toLowerCase();
        let selectedSizes = sizesState;
        let filter;
        let sort;
        // if (this.state.selectedSizes.length > 0) selectedSizes = [...this.state.selectedSizes];
        if (this.state.filter) filter = this.state.filter.toLowerCase();
        if (this.state.sort) sort = this.state.sort;
        let newState = this.returnShoeData(searchQuery, shoeData, selectedSizes, filter, sort);
        this.setState({ shoes: newState });
    }

    returnShoeData = (queryStr, shoeArray, selectedSizes, filter, sort) => {
        let newShoeArray = [...shoeArray];
        if (filter || queryStr.length < 4) {
            newShoeArray = newShoeArray.filter(shoe => {
                let propArray = [];
                
                if (filter) {
                    let propToCheck = shoe[filter];
                    if (filter !== 'tags') {
                        propToCheck = shoe[filter.slice(0, -1)];
                    }
                    
                    if (Array.isArray(propToCheck)) {
                        propArray = [...propToCheck];
                    } else {
                        propArray = [propToCheck];
                    }
                } else {
                    propArray = [shoe.model, shoe.brand, shoe.color, ...shoe.tags];
                }

                let sizeArrToCheck = shoe.sizes.filter(size => {
                    let key = Object.keys(size)[0];
                    return selectedSizes.includes(key);
                });
                
                for (let j = 0; j < sizeArrToCheck.length; j++) {
                    let key = Object.keys(sizeArrToCheck[j])[0];
                    let qty = sizeArrToCheck[j][key];
                    if (!qty) return false;
                }

                for (let i = 0; i < propArray.length; i++) {
                    let strCheck = propArray[i].toLowerCase();
                    if (strCheck.includes(queryStr)) return true;
                }

                return false;
            });
        } else {
            newShoeArray = newShoeArray.filter(shoe => {
                let propArray = [shoe.model, shoe.brand, shoe.color, ...shoe.tags];

                let sizeArrToCheck = shoe.sizes.filter(size => {
                    let key = Object.keys(size)[0];
                    return selectedSizes.includes(key);
                });
                
                for (let j = 0; j < sizeArrToCheck.length; j++) {
                    let key = Object.keys(sizeArrToCheck[j])[0];
                    let qty = sizeArrToCheck[j][key];
                    if (!qty) return false;
                }

                for (let i = 0; i < propArray.length; i++) {
                    let strCheck = propArray[i].toLowerCase();
                    let editDist = levenshtein.get(strCheck, queryStr);
                    let diffRate = editDist / strCheck.length;
                    if (diffRate < 0.5) {
                        return true;
                    }
                }
                return false;
            });
        }
        if (sort) {
            switch(sort) {
                case 'Price - Low': {
                    newShoeArray.sort((a,b) => {
                        if(a.price < b.price) return -1;
                        if(a.price > b.price) return 1;
                        return 0;
                    });
                    break;
                }
                case 'Price - High': {
                    newShoeArray.sort((a,b) => {
                        if(a.price > b.price) return -1;
                        if(a.price < b.price) return 1;
                        return 0;
                    });
                    break;
                }
                default: {
                    console.log('Unhandled Exception');
                } 
            }
        }
        return newShoeArray;
    }

    sortShoesByCriteria = (e) => {
        let newState = [...this.state.shoes];
        let newSortState;
        switch(e.target.value) {
            case 'Price - Low': {
                newState.sort((a,b) => {
                    if(a.price < b.price) return -1;
                    if(a.price > b.price) return 1;
                    return 0;
                });
                newSortState = e.target.value;
                break;
            }
            case 'Price - High': {
                newState.sort((a,b) => {
                    if(a.price > b.price) return -1;
                    if(a.price < b.price) return 1;
                    return 0;
                });
                newSortState = e.target.value;
                break;
            }
            default: {
                newSortState = undefined;
                console.log('Unhandled Exception');
            }       
        }
        this.setState({ shoes: newState, sort: newSortState });
    }

    setFilter = (e) => {
        let newFilterState = this.state.filter;
        switch(e.target.value) {
            case 'Brands': 
            case 'Tags': 
            case 'Colors': {
                newFilterState = e.target.value;
                break;
            }
            default: {
                newFilterState = undefined;
                console.log('Unhandled Exception');
            }       
        }
        this.setState({ filter: newFilterState });
    }

    applyFilter = (e) => {
        this.textInput.value = e.target.value;
        let mockEvent = { target: { value: e.target.value } };
        
        this.queryShoes(mockEvent);
    }

    selectSize = (e) => {
        let selectedSize = e.target.textContent;
        let newState = [...this.state.selectedSizes];
        if (newState.includes(selectedSize)) {
            let index = newState.indexOf(selectedSize);
            newState.splice(index, 1);
        } else {
            newState.push(selectedSize);
        }
        this.setState({ selectedSizes: newState });
        let mockEvent = { target: { value: this.textInput.value }};
        this.queryShoes(mockEvent, newState);
    }

    createDropDown = () => {
        return (
        <div className="select">
            <select onChange={this.applyFilter} value={"default"}>
                <option>- Select Option -</option>
                {this.state[this.state.filter.toLowerCase()].map((item, i)=> {
                    return (
                        <option key={i}>{item}</option>
                    );
                })}
            </select>
        </div>);
    }

    render() {
        return(
            <div>
                <SearchInput />
                {/* <div className="field">
                    <label className="label">Find A Shoe</label>
                    <div className="control has-icons-left">
                        <input ref={(input) => {this.textInput = input;} } className="input" type="text" placeholder="Enter Search Query Here" onChange={this.queryShoes} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </div> */}
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
                                <FilterSubDropDown />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <label className="label">Sizes</label>
                        {this.state.sizes.map(size => {
                            return (
                                <a onClick={this.selectSize} style={this.state.selectedSizes.includes(size) ? {backgroundColor: "#a1bfd3"} : {}} className="button is-info is-rounded SearchBar-sizeBtn">{size}</a>
                            );
                        })}
                    </div>
                </div>
                
            </div>
        );
    }

}