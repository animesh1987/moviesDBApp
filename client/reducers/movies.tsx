import * as actions from "../actions/actionTypes";

const initialState = {
  searchInput: '',
  genreSelected: 'title',
  sortBy: 'release_date',
  movieSelected: {},
  isMovieSelected: false,
  movies: [],
};

export const movies = (state = initialState, action) => {
  switch (action.type) {

    case actions.GET_MOVIES:
      console.log('reducer called');
      return {
        ...state,
        movies: action.movies
      };

    /* case actions.TOGGLE_TYPE:
      return {
        ...state,
        searchBy: action.type,
        movies: action.movies
      };

    case actions.CHANGE_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.searchInputEnter
      };

    case actions.TRIGGER_SEARCH:
      return {
        ...state,
        movies: action.movies
      };

    case actions.GET_MOVIE:
      return {
        ...state,
        movie: action.movie,
        movies: action.movies
      };

    case actions.RESET:
      return {
        ...state,
        ...initialState
      };

    case actions.SORT_MOVIES:
      return {
        ...state,
        movies: action.movies,
        sortBy: sortBy
      };
*/
    default:
      return state;
  }
};
