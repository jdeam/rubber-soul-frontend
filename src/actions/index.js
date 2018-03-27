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
  };
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

export const SHOE_ON_ENTER = 'SHOE_ON_ENTER';
export function showSizes(id) {
  return (dispatch) => {
    dispatch({
      type: SHOE_ON_ENTER,
      hover_id: id
    });
  };
}

export const SHOE_ON_LEAVE = 'SHOE_ON_LEAVE';
export function hideSizes() {
  return (dispatch) => {
    dispatch({ type: SHOE_ON_LEAVE });
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
