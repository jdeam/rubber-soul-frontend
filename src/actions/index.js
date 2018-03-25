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
