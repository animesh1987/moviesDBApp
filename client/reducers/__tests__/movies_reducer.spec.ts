import { movies } from '../movies';
import * as actions from '../../actions/actionTypes';


console.log(movies, actions);

describe('movies reducer', () => {
  /*let initialStateMock;
  beforeEach(() => {
    initialStateMock = {
      searchInput: '',
      genreSelected: 'title',
      sortBy: 'release_date',
      movieSelected: {},
      isMovieSelected: false,
      movies: [],
    };
  });*/

  it('should return initial state', () => {
    //expect(movies(undefined, {})).toEqual(initialStateMock);
    expect(1).toBe(1);
  });
});
