import { combineReducers } from 'redux';
import {
  SHOES_RECEIVED,
  SHOE_RECEIVED,
  SHOE_ON_ENTER,
  SHOE_ON_LEAVE
} from '../actions';

function shoes(state  = [], action) {
  switch (action.type) {
    case SHOES_RECEIVED: {
      return action.shoes;
    }
    default:
      return state;
  }
}

function shoeDetail(state = {}, action) {
  switch (action.type) {
    case SHOE_RECEIVED: {
      return action.shoe;
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

export default combineReducers({ shoes, shoeDetail, hover_id });
