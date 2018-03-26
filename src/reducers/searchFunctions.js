import levenshtein from 'fast-levenshtein';

export function returnShoeData (shoeData, queryStr) {
    let newShoeData = [...shoeData];
    if (queryStr.length < 4) {
        newShoeData = shortFilter(shoeData, queryStr);
    } else {
        newShoeData = longFilter(shoeData, queryStr);
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