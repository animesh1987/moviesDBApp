import * as actions from './actionTypes';

const API_ADDRESS = 'http://react-cdp-api.herokuapp.com/movies';

function transformURL(values: Object, api: string): string {
  const baseURL = new URL(`${api}`);
  for (let value in values) {
    baseURL.searchParams.append(value, values[value])
  }
  return baseURL.href;
};

export const getMovies = (params) => dispatch => {
  const baseURL = transformURL(params, API_ADDRESS);
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: actions.GET_MOVIES,
        movies: data.data
      })
    });
};

export const toggleType = toggle_type => dispatch => {
  dispatch({
    type: actions.TOGGLE_TYPE,
    toggle_type,
  });
};

export const changeSearchInput = text => dispatch => {
  dispatch({
    type: actions.CHANGE_SEARCH_INPUT,
    text
  });
};

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
