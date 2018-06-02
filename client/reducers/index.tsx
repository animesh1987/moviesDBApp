import { combineReducers } from 'redux';
import moviesReducer from './movies';

console.log(moviesReducer);

export default combineReducers({
  moviesReducer
});
