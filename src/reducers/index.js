import { combineReducers } from 'redux';
import {
  SHOES_RECEIVED,
  SHOE_RECEIVED,
  SHOE_ON_ENTER,
  SHOE_ON_LEAVE,
  SHOESINVIEW_LOAD,
  SHOESINVIEW_APPLY_SORT,
  SHOESINVIEW_APPLY_QUERY,
  FILTER_SET_FILTER,
  FILTERLIST_LOAD
} from '../actions';
import { returnShoeData } from './searchFunctions';

function shoes(state  = [], action) {
  switch (action.type) {
    case SHOES_RECEIVED: {
      return action.shoes;
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
      let newState = returnShoeData(action.shoes, action.queryStr);
      return newState;
    }
    default: {
      return state;
    }
  }
}

function filter(state = '', action) {
  switch(action.type) {
    case 'FILTER_SET_FILTER': {
      return action.filter;
    }
    default: {
      return state;
    }
  }
}

function filterList(state = [], action) {
  switch(action.type) {
    case 'FILTERLIST_LOAD': {
      return action.filterList;
    }
    default: {
      return [];
    }
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

export default combineReducers({ shoes, shoesInView, shoeDetail, hover_id, filter, filterList });
