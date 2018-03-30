import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';
import { SHOE_MOUSED_ON, SHOE_MOUSED_OFF } from './actions';

const logger = createLogger({
  predicate: (getState, action) => (
    action.type !== SHOE_MOUSED_ON && action.type !== SHOE_MOUSED_OFF
  )
});

const middlewares = [ thunkMiddleware ];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
);

export default store;
