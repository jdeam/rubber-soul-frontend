import levenshtein from 'fast-levenshtein';

export function returnShoeData (shoeData, queryStr, sizes) {
    let newShoeData = [...shoeData];
    if (queryStr.length < 4) {
        newShoeData = shortFilter(shoeData, queryStr);
    } else {
        newShoeData = longFilter(shoeData, queryStr);
    }
    if (sizes) {
        newShoeData = filterBySize(shoeData, sizes)
    }
    return newShoeData;
}

function shortFilter(shoeData, queryStr) {
    return shoeData.filter(shoe => {
        let propArray = loadPropArray(shoe);
        for (let i = 0; i < propArray.length; i++) {
            let strCheck = propArray[i].toLowerCase();
            if (strCheck.includes(queryStr)) return true;
        }
        return false;
    });
}

function longFilter(shoeData, queryStr) {
    return shoeData.filter(shoe => {
        let propArray = loadPropArray(shoe);
        for (let i = 0; i < propArray.length; i++) {
            let strCheck = propArray[i].toLowerCase();
            let editDist = levenshtein.get(strCheck, queryStr);
            let diffRate = editDist / strCheck.length;
            if (diffRate < 0.5) return true;
        }
        return false;
    })
}

function loadPropArray(shoe) {
    let modelBySpaces = shoe.model.split(' ');
    let brandBySpaces = shoe.brand.split(' ');
    return [...modelBySpaces, ...brandBySpaces, shoe.model, shoe.brand, shoe.color, ...shoe.tags];
}

function filterBySize(shoeData, sizes) {
    return shoeData.filter(shoe => {
        let sizeArrToCheck = shoe.sizes.filter(size => {
            let key = Object.keys(size)[0];
            return sizes.includes(key);
        });
        for (let i = 0; i < sizeArrToCheck.length; i++) {
            let key = Object.keys(sizeArrToCheck[i])[0];
            let qty = sizeArrToCheck[i][key];
            if (!qty) return false;
        }
        return true;
    });
}