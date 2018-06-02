import * as actions from './actionTypes';

import {MOVIES} from '../data';

const movies = MOVIES.data;

export const getMovies = (searchInput) => dispatch => {
  console.log('search input', searchInput);
  dispatch({
    type: actions.GET_MOVIES,
    movies
  });
};

export const toggleType = toggle_type => dispatch => {
  dispatch({
    type: actions.TOGGLE_TYPE,
    toggle_type,
    movies
  });
};

export const changeSearchInput = text => dispatch => {
  dispatch({
    type: actions.CHANGE_SEARCH_INPUT,
    text
  });
};

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