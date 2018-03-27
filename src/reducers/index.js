import { combineReducers } from 'redux';
import {
  SHOES_RECEIVED,
  SHOE_RECEIVED,
  SHOE_CLEARED,
  SHOE_ON_ENTER,
  SHOE_ON_LEAVE,
  SHOESINVIEW_LOAD,
  SHOESINVIEW_APPLY_SORT,
  SHOESINVIEW_APPLY_QUERY,
  FILTER_SET_FILTER,
  FILTERLIST_LOAD,
  SIZES_LOAD,
  SELECTEDSIZE_TOGGLE_SIZE,
  SEARCHQUERY_SET_QUERY,
  QTY_INCREASED,
  QTY_DECREASED,
  QTY_RESET,
} from '../actions';
import { returnShoeData } from './searchFunctions';
import { S_IWUSR } from 'constants';

function shoes(state = [], action) {
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
      return state;
    }
  }
}

function sizes(state = [], action) {
  switch(action.type) {
    case 'SIZES_LOAD': {
      return action.sizesList;
    }
    default: {
      return state;
    }
  }
}

function selectedSizes(state = [], action) {
  switch(action.type) {
    case 'SELECTEDSIZE_TOGGLE_SIZE': {
      let newState = [...state];
      if (newState.includes(action.size)) {
        let index = newState.indexOf(action.size);
        newState.splice(index, 1);
      } else {
        newState.push(action.size);
      }
      return newState;
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

export default combineReducers({ shoes, shoesInView, shoeDetail, hover_id, filter, filterList, sizes, selectedSizes, searchQuery, selectedQty });
