import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { movies } from './movies';

export const reducers = combineReducers({
  movies: movies,
  router: routerReducer
});
