import { createHashHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers';

export const history = createHashHistory();

const middleware = applyMiddleware(routerMiddleware(history), thunk, logger);

export default createStore(
  connectRouter(history)(reducer),
  compose(middleware)
);
