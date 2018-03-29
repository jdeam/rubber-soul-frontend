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
  USER_ID_RECEIVED,
  CART_ID_RECEIVED,
  CART_ITEMS_RECEIVED,
  MODAL_TOGGLE_MODAL
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

function userId(state = null, action) {
  switch(action.type) {
    case USER_ID_RECEIVED: {
      return action.userId;
    }
    default:
      return state;
  }
}

function cartId(state = null, action) {
  switch(action.type) {
    case CART_ID_RECEIVED: {
      console.log(typeof action.cartId);
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

function modal(state= false, action) {
  switch(action.type) {
    case MODAL_TOGGLE_MODAL: {
      return !state;
    }
    default: {
      return state;
    }
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
  userId,
  cartId,
  cartItems,
  modal
});
