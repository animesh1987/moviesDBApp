import * as actions from './actionTypes';

const API_ADDRESS = 'http://react-cdp-api.herokuapp.com/movies';

function transformURL(values: Object, api: string): string {
  const baseURL = new URL(`${api}`);
  for (let value in values) {
    if(value === 'filter') {
      values[value].forEach(type => {
        baseURL.searchParams.append(value, type);
      });
    } else {
      baseURL.searchParams.append(value, values[value]);
    }
  }
  return baseURL.href;
}

async function callApi(baseUrl) {
  return await (await fetch(baseUrl)).json();
}

export const getMovies = params => async(dispatch) => {
  const baseURL = transformURL(params, API_ADDRESS);
  const data = await callApi(baseURL);
  dispatch({
    type: actions.GET_MOVIES,
    movies: data.data
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

export const sortBy = params => async(dispatch) => {
  const baseURL = transformURL(params, API_ADDRESS);
  const data = await callApi(baseURL);
  dispatch({
    type: actions.SORT_MOVIES,
    movies: data.data,
    sortBy: params.sortBy
  });
};

export const goToMovie = id => async(dispatch) => {
  const movie = await callApi(`${API_ADDRESS}/${id}`);
  const params = {
    filter: [...movie.genres]
  };
  const baseURL = transformURL(params, API_ADDRESS);
  const data = await callApi(baseURL);
  dispatch({
    type: actions.GET_MOVIE,
    movies: data.data,
    movieSelected: movie,
    isMovieSelected: true
  });
};

export const reset = () => ({
  type: actions.RESET
});
