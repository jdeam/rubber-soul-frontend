import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { fetchShoes, loadSizes, loadCartId, fetchCart } from './actions';

store.dispatch(fetchShoes());
store.dispatch(loadSizes());
store.dispatch(loadCartId());
store.dispatch(fetchCart());

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
