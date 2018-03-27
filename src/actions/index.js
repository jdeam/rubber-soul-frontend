import axios from 'axios';
const BaseURL = 'http://localhost:8080';

export const SHOES_RECEIVED = 'SHOES_RECEIVED';
export function fetchShoes() {
  return async (dispatch) => {
    const response = await axios.get(`${BaseURL}/api/shoes`);
    const shoes = response.data.data;
    dispatch({
      type: SHOES_RECEIVED,
      shoes
    });
    dispatch({
      type: SHOESINVIEW_LOAD,
      shoes
    })
  };
}

export const SHOESINVIEW_LOAD = 'SHOESINVIEW_LOAD';
export function loadShoesIntoView(shoes) {
  return async (dispatch) => {
    dispatch({
      type: SHOESINVIEW_LOAD,
      shoes
    })
  }
}

export const SHOESINVIEW_APPLY_SORT = 'SHOES_APPLY_SORT';
export function applySortToShoes(sortType) {
  return async (dispatch) => {
    dispatch({
      type: SHOESINVIEW_APPLY_SORT,
      sortType
    })
  }
}

export const SHOESINVIEW_APPLY_QUERY = 'SHOES_APPLY_QUERY';
export const SEARCHQUERY_SET_QUERY = 'SEARCHQUERY_SET_QUERY';
export function queryShoes(queryStr, shoes, sizes) {
  return async (dispatch) => {
    dispatch({
      type: SHOESINVIEW_APPLY_QUERY,
      queryStr,
      shoes,
      sizes
    })
    dispatch({
      type: SEARCHQUERY_SET_QUERY,
      queryStr
    })
  }
}

export const FILTER_SET_FILTER = 'FILTER_SET_FILTER';
export function setFilter(filter) {
  return async (dispatch) => {
    dispatch({
      type: FILTER_SET_FILTER,
      filter
    })
  }
}

export const FILTERLIST_LOAD = 'FILTERLIST_LOAD';
export function loadFilterList(filter) {
    return async(dispatch) => {
      const response = await axios.get(`${BaseURL}/api/shoes/${filter.toLowerCase()}`);
      const filterList = response.data.data;
      dispatch({
        type: FILTERLIST_LOAD,
        filterList
      })
    }
}

export const SIZES_LOAD = 'SIZES_LOAD';
export function loadSizes() {
  return async(dispatch) => {
    const response = await axios.get(`${BaseURL}/api/shoes/sizes`);
    const sizesList = response.data.data;
    dispatch({
      type: SIZES_LOAD,
      sizesList
    })
  }
}

export const SELECTEDSIZE_TOGGLE_SIZE = 'SELECTEDSIZE_TOGGLE_SIZE';
export function toggleSelectedSize(size) {
  return async (dispatch) => {
    dispatch({
      type: SELECTEDSIZE_TOGGLE_SIZE,
      size
    })
  }
}

export const SHOE_RECEIVED = 'SHOE_RECEIVED';
export function fetchSingleShoe(id) {
  return async (dispatch) => {
    const response = await axios.get(`${BaseURL}/api/shoes/${id}`);
    const shoe = response.data.data;
    console.log(shoe);
    dispatch({
      type: SHOE_RECEIVED,
      shoe
    });
  };
}

export const SHOE_ON_ENTER = 'SHOE_ON_ENTER';
export function showSizes(id) {
  return (dispatch) => {
    console.log(id);
    dispatch({
      type: SHOE_ON_ENTER,
      hover_id: id
    });
  };
}

export const SHOE_ON_LEAVE = 'SHOE_ON_LEAVE';
export function hideSizes() {
  return (dispatch) => {
    console.log(null);
    dispatch({ type: SHOE_ON_LEAVE });
  };
}
