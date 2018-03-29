import { combineReducers } from 'redux';
import {
  SHOES_RECEIVED,
  SHOE_RECEIVED,
  SHOE_CLEARED,
  SHOE_MOUSED_ON,
  SHOE_MOUSED_OFF,
  SHOESINVIEW_LOAD,
  SHOESINVIEW_APPLY_SORT,
  SHOESINVIEW_APPLY_QUERY,
  APPLIED_QUERY_SET_QUERY,
  SELECTEDSIZE_SET_SIZE,
  SELECTEDSIZE_CLEARED,
  SEARCHQUERY_SET_QUERY,
  QTY_INCREASED,
  QTY_DECREASED,
  QTY_RESET,
  SET_ACTIVE_TAB,
  CLEAR_ACTIVE_TAB,
  SHOW_REVIEW_FORM,
  HIDE_REVIEW_FORM,
  SET_REVIEW_TITLE,
  CLEAR_REVIEW_TITLE,
  SET_REVIEW_CONTENT,
  CLEAR_REVIEW_CONTENT,
  SET_REVIEW_RATING,
  CLEAR_REVIEW_RATING,
  REVIEW_SUBMITTED,
  REVIEW_CLEARED,
  CART_ID_RECEIVED,
  CART_ITEMS_RECEIVED
} from '../actions';
import { returnShoeData } from './searchFunctions';

function shoes(state = [], action) {
  switch (action.type) {
    case SHOES_RECEIVED: {
      return action.shoes;
    }
    default:
      return state;
  }
}

function shoesById(state = {}, action) {
  switch (action.type) {
    case SHOES_RECEIVED: {
      return action.shoes.reduce((byId, shoe) => {
        byId[shoe.id] = shoe;
        return byId;
      }, {});
    }
    default:
      return state;
  }
}

function shoesInView(state = [], action) {
  switch(action.type) {
    case SHOESINVIEW_LOAD: {
      return action.shoes;
    }
    case SHOESINVIEW_APPLY_SORT: {
      let newState = [...state];
      let param = action.sortType.sort;
      if (action.sortType.direction === 'Low') {
        newState.sort((a, b) => {
          if (a[param] < b[param]) return -1;
          if (a[param] > b[param]) return 1;
          return 0;
        });
      } else {
        newState.sort((a, b) => {
          if (a[param] > b[param]) return -1;
          if (a[param] < b[param]) return 1;
          return 0;
        });
      }
      return newState;
    }
    case SHOESINVIEW_APPLY_QUERY: {
      let newState = returnShoeData(action.shoes, action.queryStr, action.sizes);
      return newState;
    }
    default: {
      return state;
    }
  }
}

function searchQuery(state = '', action) {
  switch(action.type) {
    case SEARCHQUERY_SET_QUERY: {
      return action.queryStr;
    }
    default: {
      return state;
    }
  }
}

function appliedQuery(state = '', action) {
  switch(action.type) {
    case APPLIED_QUERY_SET_QUERY: {
      return action.queryStr;
    }
    default: {
      return state;
    }
  }
}

function selectedSize(state = null, action) {
  switch (action.type) {
    case SELECTEDSIZE_SET_SIZE: {
      return action.selectedSize
    }
    case SELECTEDSIZE_CLEARED: {
      return null;
    }
    default: {
      return state;
    }
  }
}

function shoeDetail(state = null, action) {
  switch (action.type) {
    case SHOE_RECEIVED: {
      return action.shoe;
    }
    case SHOE_CLEARED: {
      return null;
    }
    default:
      return state;
  }
}

function hoverId(state = null, action) {
  switch (action.type) {
    case SHOE_MOUSED_ON: {
      return action.hoverId;
    }
    case SHOE_MOUSED_OFF: {
      return null;
    }
    default:
      return state;
  }
}

function selectedQty(state = 1, action) {
  switch(action.type) {
    case QTY_INCREASED: {
      return state + 1;
    }
    case QTY_DECREASED: {
      return state - 1;
    }
    case QTY_RESET: {
      return 1;
    }
    default:
      return state;
  }
}

function activeTab(state = '', action) {
  switch(action.type) {
    case SET_ACTIVE_TAB: {
      return action.tab;
    }
    case CLEAR_ACTIVE_TAB: {
      return '';
    }
    default:
      return state;
  }
}

function reviewView(state = '', action) {
  switch(action.type) {
    case SHOW_REVIEW_FORM: {
      return action.viewName;
    }
    case HIDE_REVIEW_FORM: {
      return '';
    }
    default:
      return state;
  }
}

function reviewTitle(state = null, action) {
  switch(action.type) {
    case SET_REVIEW_TITLE: {
      return action.title;
    }
    case CLEAR_REVIEW_TITLE: {
      return null;
    }
    default:
      return state;
  }
}

function reviewContent(state = null, action) {
  switch(action.type) {
    case SET_REVIEW_CONTENT: {
      return action.content;
    }
    case CLEAR_REVIEW_CONTENT: {
      return null;
    }
    default:
      return state;
  }
}

function reviewRating(state = null, action) {
  switch(action.type) {
    case SET_REVIEW_RATING: {
      return action.rating;
    }
    case CLEAR_REVIEW_RATING: {
      return null;
    }
    default:
      return state;
  }
}

function addReview(state = {}, action) {
  switch(action.type) {
    case REVIEW_SUBMITTED: {
      return action.review;
    }
    case REVIEW_CLEARED: {
      return {};
    }
    default:
      return state;
  }
}

function cartId(state = null, action) {
  switch(action.type) {
    case CART_ID_RECEIVED: {
      return action.cartId;
    }
    default:
      return state;
  }
}

function cartItems(state = [], action) {
  switch(action.type) {
    case CART_ITEMS_RECEIVED: {
      return action.items;
    }
    default:
      return state;
  }
}

export default combineReducers({
  shoes,
  shoesById,
  shoesInView,
  shoeDetail,
  hoverId,
  selectedSize,
  searchQuery,
  selectedQty,
  appliedQuery,
  activeTab,
  reviewView,
  reviewTitle,
  reviewContent,
  reviewRating,
  addReview,
  cartId,
  cartItems
});
