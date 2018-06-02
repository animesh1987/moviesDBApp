import * as React from "react";
import { MoviesList } from './pages/moviesList'
import { ErrorBoundary } from './errorBoundary';
import { connect } from 'react-redux';
import { MOVIES } from './data';
import { getMovies } from './actions';

import { State, Movie } from './models';

import { Header } from './components/header';
import { StatusBar } from './components/statusBar';
import { Footer } from './components/footer';

const initialState = {
  searchInput: '',
  genreSelected: 'title',
  sortBy: 'release_date',
  movieSelected: {},
  isMovieSelected: false,
  movies: [],
};

class App extends React.Component<any, State> {

  componentWillMount() {
    this.props.getMovies();
  }

  state: State;
  moviesList: Movie[] = MOVIES.data;

  /*constructor(props) {

    super(props);
    this.state = {
      searchInput: '',
      genreSelected: 'title',
      sortBy: 'release_date',
      movieSelected: {},
      isMovieSelected: false,
      movies,
    };
  }*/

  toggleType(genre: string) {
    this.setState({ genreSelected: genre });
  };

  changeSearchInput = (event: any) => {
    this.setState({ searchInput: event.target.value });
  };

  getSearchInput = (event) => {
    if (event.key === 'Enter') {
      this.triggerSearch();
    }
  };

  triggerSearch = () => {
    this.setState({ movies: this.moviesList });
  };

  goToMovie(id: number) {
    const movieSelected = this.state.movies.find(
      (movie: Movie) => movie.id === id
    );
    const genre = movieSelected.genres[0];
    const movies = this.state.movies.filter(
      (movie: Movie) => movie.genres.includes(genre)
    );
    this.setState({ isMovieSelected: true });
    this.setState({ movieSelected });
    this.setState({ movies });
  };

  reset() {
    this.setState({ isMovieSelected: false });
    this.setState({ movieSelected: {} });
    this.setState({ movies: this.moviesList });
  };

  sortBy(type: string) {
    this.setState({ sortBy: type });
  };

  public render() {
    return (
      <ErrorBoundary>
        <Header
          reset={() => this.reset()}
          movie={this.props.movieSelected}
          isMovieSelected={this.props.isMovieSelected}
          onSearchClick={() => this.triggerSearch()}
          searchInput={this.props.searchInput}
          onChangeInput={() => this.changeSearchInput}
          searchInputEnter={() => this.getSearchInput}
          genreSelected={this.props.genreSelected}
          toggleType={(genre: string) => this.toggleType(genre)} />

        <StatusBar
          sortedBy={this.props.sortBy}
          sortBy={(type:string) => this.sortBy(type)}
          movieSelected={this.props.movieSelected}
          count={this.props.movies && this.props.movies.length} />
        <MoviesList
          movies={this.props.movies}
          goToMovie={(id: number) => this.goToMovie(id)} />
        <Footer />
      </ErrorBoundary>
    )
  }
}

const mapStateToProps = () => ({
  ...initialState
});

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(getMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);