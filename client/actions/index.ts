import * as actions from './actionTypes';

import {MOVIES} from '../data';

export const getMovies = () => dispatch => {
  const movies = MOVIES.data;
  dispatch({
    type: actions.GET_MOVIES,
    movies
  });
};

export const toggleType = toggle_type => ({
  type: actions.TOGGLE_TYPE,
  toggle_type
});

export const changeSearchInput = text => ({
  type: actions.CHANGE_SEARCH_INPUT,
  text
});

export const getSearchInput = key => ({
  type: actions.TRIGGER_SEARCH,
  key
});

export const goToMovie = id => ({
  type: actions.GET_MOVIE,
  id
});

export const reset = () => ({
  type: actions.RESET
});

export const sortBy = sort_by => ({
  type: actions.SORT_MOVIES,
  sort_by
});

//https://www.youtube.com/watch?v=IABpU-AfpLQ
//https://github.com/luckyluck/burger_builder/blob/master/src/axios-orders.js