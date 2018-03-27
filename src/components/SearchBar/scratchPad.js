state = { shoes: [], filter: undefined, sort: undefined, selectedSizes: [], tags: [], sizes: [], colors: [], brands: [] };

// componentDidMount() {
    //     let tagsList = [];
    //     let sizesList = [];
    //     let colorsList = [];
    //     let brandsList = [];
    //     shoeData.forEach(shoe => {
    //         if (!colorsList.includes(shoe.color)) colorsList.push(shoe.color);
    //         if (!brandsList.includes(shoe.brand)) brandsList.push(shoe.brand);
    //         shoe.sizes.forEach(size => {
    //             for (let num in size) {
    //                 if (!sizesList.includes(num)) sizesList.push(num);
    //             }
    //         });
    //         shoe.tags.forEach(tag => {
    //             if (!tagsList.includes(tag)) tagsList.push(tag);
    //         });
    //     });
    //     this.setState({ shoes: shoeData, tags: tagsList, sizes: sizesList, colors: colorsList, brands: brandsList });
    // }

    // queryShoes = (e, sizesState = []) => {
    //     let searchQuery = e.target.value.toLowerCase();
    //     let selectedSizes = sizesState;
    //     let filter;
    //     let sort;
    //     // if (this.state.selectedSizes.length > 0) selectedSizes = [...this.state.selectedSizes];
    //     if (this.state.filter) filter = this.state.filter.toLowerCase();
    //     if (this.state.sort) sort = this.state.sort;
    //     let newState = this.returnShoeData(searchQuery, shoeData, selectedSizes, filter, sort);
    //     this.setState({ shoes: newState });
    // }

    // returnShoeData = (queryStr, shoeArray, selectedSizes, filter, sort) => {
    //     let newShoeArray = [...shoeArray];
    //     if (filter || queryStr.length < 4) {
    //         newShoeArray = newShoeArray.filter(shoe => {
    //             let propArray = [];
                
    //             if (filter) {
    //                 let propToCheck = shoe[filter];
    //                 if (filter !== 'tags') {
    //                     propToCheck = shoe[filter.slice(0, -1)];
    //                 }
                    
    //                 if (Array.isArray(propToCheck)) {
    //                     propArray = [...propToCheck];
    //                 } else {
    //                     propArray = [propToCheck];
    //                 }
    //             } else {
    //                 propArray = [shoe.model, shoe.brand, shoe.color, ...shoe.tags];
    //             }

    //             let sizeArrToCheck = shoe.sizes.filter(size => {
    //                 let key = Object.keys(size)[0];
    //                 return selectedSizes.includes(key);
    //             });
                
    //             for (let j = 0; j < sizeArrToCheck.length; j++) {
    //                 let key = Object.keys(sizeArrToCheck[j])[0];
    //                 let qty = sizeArrToCheck[j][key];
    //                 if (!qty) return false;
    //             }

    //             for (let i = 0; i < propArray.length; i++) {
    //                 let strCheck = propArray[i].toLowerCase();
    //                 if (strCheck.includes(queryStr)) return true;
    //             }

    //             return false;
    //         });
    //     } else {
    //         newShoeArray = newShoeArray.filter(shoe => {
    //             let propArray = [shoe.model, shoe.brand, shoe.color, ...shoe.tags];

    //             let sizeArrToCheck = shoe.sizes.filter(size => {
    //                 let key = Object.keys(size)[0];
    //                 return selectedSizes.includes(key);
    //             });
                
    //             for (let j = 0; j < sizeArrToCheck.length; j++) {
    //                 let key = Object.keys(sizeArrToCheck[j])[0];
    //                 let qty = sizeArrToCheck[j][key];
    //                 if (!qty) return false;
    //             }

    //             for (let i = 0; i < propArray.length; i++) {
    //                 let strCheck = propArray[i].toLowerCase();
    //                 let editDist = levenshtein.get(strCheck, queryStr);
    //                 let diffRate = editDist / strCheck.length;
    //                 if (diffRate < 0.5) {
    //                     return true;
    //                 }
    //             }
    //             return false;
    //         });
    //     }
    //     if (sort) {
    //         switch(sort) {
    //             case 'Price - Low': {
    //                 newShoeArray.sort((a,b) => {
    //                     if(a.price < b.price) return -1;
    //                     if(a.price > b.price) return 1;
    //                     return 0;
    //                 });
    //                 break;
    //             }
    //             case 'Price - High': {
    //                 newShoeArray.sort((a,b) => {
    //                     if(a.price > b.price) return -1;
    //                     if(a.price < b.price) return 1;
    //                     return 0;
    //                 });
    //                 break;
    //             }
    //             default: {
    //                 console.log('Unhandled Exception');
    //             } 
    //         }
    //     }
    //     return newShoeArray;
    // }