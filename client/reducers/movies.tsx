import * as actions from "../actions/actionTypes";
import {sortBy} from "../actions";

const initialState = {
  movies: [],
  searchBy: 'title',
  isMovieSelected: false,
  movieSelected: {},
  searchInput: '',
  sortBy: 'release_date',
};

export const movies = (state = initialState, action) => {
  switch (action.type) {

    case actions.GET_MOVIES:
      return {
        ...state,
        movies: action.movies
      };

    case actions.TOGGLE_TYPE:
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

    default:
      return state;
  }
};
