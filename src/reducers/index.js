import { combineReducers } from 'redux';
import { SHOES_RECEIVED, SHOE_RECEIVED } from '../actions';

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

export default combineReducers({ shoes, shoeDetail });
