import * as React from "react";
import { MoviesList } from './pages/moviesList'
import { ErrorBoundary } from './errorBoundary';
import { connect } from 'react-redux';
import { MOVIES } from './data';
import { getMovies, toggleType, changeSearchInput } from './actions';

import { State, Movie } from './models';

import { Header } from './components/header';
import { StatusBar } from './components/statusBar';
import { Footer } from './components/footer';

class App extends React.Component<any, State> {

  /*componentWillMount() {
    console.log(this.props.getMovies);
  }*/

  state: State;
  moviesList: Movie[] = MOVIES.data;

  toggleType(genre: string) {
    this.props.toggleType(genre);
  };

  changeSearchInput = (event: any) => {
    this.props.changeSearchInput(event.target.value);
    /*this.setState({ searchInput: event.target.value });*/
  };

  getSearchInput = (event: any) => {
    if (event.key === 'Enter') {
      this.triggerSearch();
    }
  };

  triggerSearch = () => {
    this.props.getMovies({
        search: this.props.searchInput,
        searchBy: this.props.genreSelected
    });
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

const mapStateToProps = state => {
  state = state.movies;
  return ({
    searchInput: state.searchInput,
    genreSelected: state.genreSelected,
    sortBy: 'release_date',
    movieSelected: {},
    isMovieSelected: false,
    movies: state.movies,
  })
};

const mapDispatchToProps = dispatch => ({
  getMovies: (params) => dispatch(getMovies(params)),
  toggleType: (type) => dispatch(toggleType(type)),
  changeSearchInput: (text) => dispatch(changeSearchInput(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);