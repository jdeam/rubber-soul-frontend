import { combineReducers } from 'redux';
import {
  SHOES_RECEIVED,
  SHOE_RECEIVED,
  SHOE_CLEARED,
  SHOE_ON_ENTER,
  SHOE_ON_LEAVE,
  QTY_INCREASED,
  QTY_DECREASED,
  QTY_RESET,
} from '../actions';

function shoes(state = [], action) {
  switch (action.type) {
    case SHOES_RECEIVED: {
      return action.shoes;
    }
    default:
      return state;
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

function hover_id(state = null, action) {
  switch (action.type) {
    case SHOE_ON_ENTER: {
      return action.hover_id;
    }
    case SHOE_ON_LEAVE: {
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

export default combineReducers({ shoes, shoeDetail, hover_id, selectedQty });
