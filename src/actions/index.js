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
export function queryShoes(queryStr, shoes) {
  return (dispatch) => {
    dispatch({
      type: SHOESINVIEW_APPLY_QUERY,
      queryStr,
      shoes
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

export const SELECTEDSIZE_SET_SIZE = 'SELECTEDSIZE_SET_SIZE';
export function setSelectedSize(selectedSize) {
  return async (dispatch) => {
    dispatch({
      type: SELECTEDSIZE_SET_SIZE,
      selectedSize
    })
  }
}

export const SELECTEDSIZE_CLEARED = 'SELECTEDSIZE_CLEARED';
export function clearSelectedSize() {
  return (dispatch) => {
    dispatch({ type: SELECTEDSIZE_CLEARED });
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
  };
}

export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';
export function setActiveTab(tab) {
  return (dispatch) => {
    dispatch({
      type: SET_ACTIVE_TAB,
      tab
    })
  }
}

export const CLEAR_ACTIVE_TAB = 'CLEAR_ACTIVE_TAB';
export function clearActiveTab() {
  return (dispatch) => {
    dispatch({ type: CLEAR_ACTIVE_TAB })
  }
}

export const SHOW_REVIEW_FORM = 'SHOW_REVIEW_FORM';
export function showReviewForm(viewName) {
  return (dispatch) => {
    dispatch({
      type: SHOW_REVIEW_FORM,
      viewName
    })
  }
}

export const HIDE_REVIEW_FORM = 'HIDE_REVIEW_FORM';
export function hideReviewForm() {
  return (dispatch) => {
    dispatch({ type: HIDE_REVIEW_FORM })
  }
}

export const SET_REVIEW_TITLE = 'SET_REVIEW_TITLE';
export function setReviewTitle(title) {
  return (dispatch) => {
    dispatch({
      type: SET_REVIEW_TITLE,
      title
    })
  }
}

export const CLEAR_REVIEW_TITLE = 'CLEAR_REVIEW_TITLE';
export function clearReviewTitle() {
  return (dispatch) => {
    dispatch({ type: CLEAR_REVIEW_TITLE })
  }
}

export const SET_REVIEW_CONTENT = 'SET_REVIEW_CONTENT';
export function setReviewContent(content) {
  return (dispatch) => {
    dispatch({
      type: SET_REVIEW_CONTENT,
      content
    })
  }
}

export const CLEAR_REVIEW_CONTENT = 'CLEAR_REVIEW_CONTENT';
export function clearReviewContent() {
  return (dispatch) => {
    dispatch({ type: CLEAR_REVIEW_CONTENT })
  }
}

export const SET_REVIEW_RATING = 'SET_REVIEW_RATING';
export function setReviewRating(rating) {
  return (dispatch) => {
    dispatch({
      type: SET_REVIEW_RATING,
      rating
    })
  }
}

export const CLEAR_REVIEW_RATING = 'CLEAR_REVIEW_RATING';
export function clearReviewRating() {
  return (dispatch) => {
    dispatch({ type: CLEAR_REVIEW_RATING })
  }
}

export const REVIEW_SUBMITTED = 'REVIEW_SUBMITTED';
export function submitReview(review) {
  return (dispatch) => {
    dispatch({ type: REVIEW_SUBMITTED })
  }
}

export const REVIEW_CLEARED = 'REVIEW_CLEARED';
export function clearReviewForm() {
  return (dispatch) => {
    dispatch({ type: REVIEW_CLEARED })
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

export function setCartId(cartId) {
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
    const { items } = response.data.data;
    dispatch({ type: CART_ITEMS_RECEIVED, items });
  }
}
