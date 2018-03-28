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

export const SEARCHQUERY_SET_QUERY = 'SEARCHQUERY_SET_QUERY';
export function setQueryString(queryStr) {
  return (dispatch) => {
    dispatch({
      type: SEARCHQUERY_SET_QUERY,
      queryStr
    })
  }
}

export const SHOESINVIEW_APPLY_QUERY = 'SHOES_APPLY_QUERY';
export const APPLIED_QUERY_SET_QUERY = 'APPLIED_QUERY_SET_QUERY';
export function queryShoes(queryStr, shoes, sizes) {
  return (dispatch) => {
    dispatch({
      type: SHOESINVIEW_APPLY_QUERY,
      queryStr,
      shoes,
      sizes
    })
    dispatch({
      type: APPLIED_QUERY_SET_QUERY,
      queryStr
    })
    dispatch({
      type: SEARCHQUERY_SET_QUERY,
      queryStr: ''
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

export const SELECTEDSIZES_TOGGLE_SIZE = 'SELECTEDSIZES_TOGGLE_SIZE';
export function toggleSelectedSizes(size) {
  return async (dispatch) => {
    dispatch({
      type: SELECTEDSIZES_TOGGLE_SIZE,
      size
    })
  }
}

export const SELECTEDSIZE_SET_SIZE = 'SELECTEDSIZE_SET_SIZE';
export function setSelectedSize(size) {
  return (dispatch) => {
    dispatch({
      type: SELECTEDSIZE_SET_SIZE,
      size
    })
  }
}

export const SHOE_RECEIVED = 'SHOE_RECEIVED';
export function fetchSingleShoe(id) {
  return async (dispatch) => {
    const response = await axios.get(`${BaseURL}/api/shoes/${id}`);
    const shoe = response.data.data;
    dispatch({
      type: SHOE_RECEIVED,
      shoe
    });
  };
}

export const SHOE_CLEARED = 'SHOE_CLEARED';
export function clearShoe() {
  return (dispatch) => {
    dispatch({ type: SHOE_CLEARED });
  }
}

export const SHOE_MOUSED_ON = 'SHOE_ON_ENTER';
export function showSizes(id) {
  return (dispatch) => {
    dispatch({
      type: SHOE_MOUSED_ON,
      hoverId: id
    });
  };
}

export const SHOE_MOUSED_OFF = 'SHOE_ON_LEAVE';
export function hideSizes() {
  return (dispatch) => {
    dispatch({ type: SHOE_MOUSED_OFF });
  };
}

export const QTY_INCREASED = 'QTY_INCREASED';
export function increaseQty() {
  return (dispatch) => {
    dispatch({ type: QTY_INCREASED });
  };
}

export const QTY_DECREASED = 'QTY_DECREASED';
export function decreaseQty(qty) {
  return (dispatch) => {
    if (parseInt(qty, 10) > 0) {
      dispatch({ type: QTY_DECREASED })
    }
  };
}

export const QTY_RESET = 'QTY_RESET';
export function resetQty() {
  return (dispatch) => {
    dispatch({ type: QTY_RESET })
  }
}

export const CART_ID_RECEIVED = 'CART_ID_RECEIVED';
export function loadCartId() {
  return (dispatch) => {
    dispatch({
      type: CART_ID_RECEIVED,
      cartId: localStorage.getItem('cartId') });
  }
}
export function setCardId(cartId) {
  return (dispatch) => {
    localStorage.setItem('cartId', cartId);
    dispatch({ type: CART_ID_RECEIVED, cartId });
  }
}

export const CART_ITEMS_RECEIVED = 'CART_ITEMS_RECEIVED';
export function fetchCart() {
  return async (dispatch) => {
    const cartId = localStorage.getItem('cartId');
    if (!cartId) return;
    const response = await axios.get(`${BaseURL}/api/carts/${cartId}`);
    const { cart_id, items } = response.data.data;
    dispatch({ type: CART_ITEMS_RECEIVED, items });
  }
}
