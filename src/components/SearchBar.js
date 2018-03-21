import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import shoeData from '../seedData/shoeData.json';
import levenshtein from 'fast-levenshtein';

export default class extends Component {
    state = { shoes: [] };

    componentDidMount() {
        this.setState({ shoes: shoeData });
    }

    queryShoes = (e) => {
        let searchQuery = e.target.value.toLowerCase();
        if (searchQuery.length < 2) {
            this.setState({ shoes: shoeData });
            return;
        }
        let newState = shoeData.filter(shoe => {
            let array = [shoe.model, shoe.brand, shoe.color, ...shoe.tags];
            for (let i = 0; i < array.length; i++) {
                let strCheck = array[i].toLowerCase();
                let editDist = levenshtein.get(strCheck, searchQuery);
                let diffRate = editDist / strCheck.length;
                
                if (diffRate < 0.5) {
                    return true;
                }
            }
            return false;
        });
        
        this.setState({ shoes: newState });
    }
    sortShoesByCriteria = (e) => {
        let newState = [...this.state.shoes];
        switch(e.target.value) {
            case 'Price': {
                newState.sort((a,b) => {
                    if(a.price < b.price) return -1;
                    if(a.price > b.price) return 1;
                    return 0;
                });
                break;
            }
            default: {
                console.log('Unhandled Exception');
            }       
        }
        this.setState({ shoes: newState });

    }
    render() {
        return(
            <div>
                <input className="input" type="text" placeholder="Enter Search Query Here" onChange={this.queryShoes} />
                <div className="select">
                    <select onChange={this.sortShoesByCriteria}>
                        <option>Price</option>
                        <option></option>
                        <option></option>
                    </select>
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