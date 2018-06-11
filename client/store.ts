import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import { reducers } from './reducers';

export const history = createHistory();

const middleware = routerMiddleware(history);

export const store = createStore(
  reducers,
  compose(applyMiddleware(middleware, thunk))
);
