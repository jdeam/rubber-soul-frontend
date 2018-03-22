import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import shoeData from '../seedData/shoeData.json';
import levenshtein from 'fast-levenshtein';

export default class extends Component {
    state = { shoes: [], filter: undefined, sort: undefined, tags: [], sizes: [], colors: [], brands: [] };

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

    queryShoes = (e) => {
        let searchQuery = e.target.value.toLowerCase();
        let filter;
        let sort;
        if (this.state.filter) filter = this.state.filter.toLowerCase();
        if (this.state.sort) sort = this.state.sort;
        let newState = this.returnShoeData(searchQuery, shoeData, filter, sort);
        this.setState({ shoes: newState });
    }

    returnShoeData = (queryStr, shoeArray, filter, sort) => {
        let newShoeArray = [...shoeArray];
        if (filter || queryStr.length < 4) {
            newShoeArray = newShoeArray.filter(shoe => {
                let propArray = [];
                let propToCheck = shoe[filter];
                if (filter) {
                    if (Array.isArray(propToCheck)) {
                        propArray = [...propToCheck];
                    } else {
                        propArray = [propToCheck];
                    }
                } else {
                    propArray = [shoe.model, shoe.brand, shoe.color, ...shoe.tags];
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
            case 'Sizes':
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

    render() {
        console.log(this.state);
        return(
            <div>
                <div className="field">
                    <label className="label">Find A Shoe</label>
                    <div className="control has-icons-left">
                        <input ref={(input) => {this.textInput = input;} } className="input" type="text" placeholder="Enter Search Query Here" onChange={this.queryShoes} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Sort</label>
                    <div className="control">
                        <div className="select">
                            <select onChange={this.sortShoesByCriteria} >
                                <option>- Select An Option -</option>
                                <option>Price - Low</option>
                                <option>Price - High</option>
                                <option>Rating - Low</option>
                                <option>Rating - High</option>
                            </select>
                        </div>
                    </div>
                </div> 
                <div className="field">
                    <label className="label">Filter</label>
                    <div className="control">
                        <div className="select">
                            <select onChange={this.setFilter}>
                                <option>- Select An Option -</option>
                                <option>Brands</option>
                                <option>Colors</option>
                                <option>Tags</option>
                                <option>Sizes</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Filter List</label>
                    <div className="control">
                        <div className="select">
                            <select onChange={this.applyFilter}>
                                <option>- Select An Option -</option>
                                {this.state.filter ? this.state[this.state.filter.toLowerCase()].map(item=> {
                                    return (
                                        <option>{item}</option>
                                    );
                                }) : ''}
                            </select>
                        </div>
                    </div>
                </div>
                
                {this.state.shoes.map(shoe => {
                    return <div>
                        <figure className="image is-128x128">
                            <img src={shoe.imgURL} width={128} height={128} />
                        </figure>
                        <ul>
                            <li>{shoe.model}</li>
                            <li>{shoe.brand}</li>
                            <li>{shoe.color}</li>
                            <li>{shoe.price}</li>
                            <ul>
                                {shoe.tags.map(tag => {
                                    return <li>{tag}</li>
                                })}
                            </ul>
                        </ul>
                    </div>
                })}
            </div>
        );
    }
}