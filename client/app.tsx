import * as React from "react";
import { MoviesList } from './pages/moviesList'
import { ErrorBoundary } from './errorBoundary';
import { connect } from 'react-redux';

import { getMovies, toggleType, changeSearchInput, goToMovie, sortBy, reset } from './actions';

import { State } from './models';

import { Header } from './components/header';
import { StatusBar } from './components/statusBar';
import { Footer } from './components/footer';

class App extends React.Component<any, State> {

  state: State;

  componentDidMount() {
    const { match, match: { params } } = this.props;
    if (/search/gi.test(match.path)) {
      this.props.changeSearchInput(params.searchInput);
      this.props.getMovies({
        search: this.props.searchInput,
        searchBy: this.props.genreSelected
      });
    } else if (/film/gi.test(match.path)) {
      this.props.goToMovie(params.id);
    }
  }

  changeSearchInput = (event: any) => {
    this.props.changeSearchInput(event.target.value);
  };

  getSearchInput = (event: any) => {
    if (event.key === 'Enter') {
      this.triggerSearch();
    }
  };

  triggerSearch = () => {
    if (this.props.history.location.pathname !== `/search/${this.props.searchInput}`) {
      this.props.history
        .push(`/search/${this.props.searchInput}`);
    }
    this.props.getMovies({
      search: this.props.searchInput,
      searchBy: this.props.genreSelected
    });
  };

  sortBy(type: string) {
    if (type === 'rating') {
      type = 'vote_average';
    }
    this.props.sort({
      sortBy: type,
      search: this.props.searchInput,
      searchBy: this.props.genreSelected,
    });
  };

  public render() {
    return (
      <ErrorBoundary>
        <Header
          reset={() => {
            this.props.history.push('/');
            this.props.reset();
          }}
          movie={this.props.movieSelected}
          isMovieSelected={this.props.isMovieSelected}
          onSearchClick={() => this.triggerSearch()}
          searchInput={this.props.searchInput}
          onChangeInput={() => this.changeSearchInput}
          searchInputEnter={() => this.getSearchInput}
          genreSelected={this.props.genreSelected}
          toggleType={(genre: string) => this.props.toggleType(genre)} />

        <StatusBar
          sortedBy={this.props.sortBy}
          sortBy={(type:string) => this.sortBy(type)}
          movieSelected={this.props.movieSelected}
          count={this.props.movies && this.props.movies.length} />
        <MoviesList
          movies={this.props.movies}
          goToMovie={(id: number) => {
            this.props.history
              .push(`/film/${id}`);
            this.props.goToMovie(id);
          }} />
        <Footer />
      </ErrorBoundary>
    )
  }
}

const mapStateToProps = (state) => {
  state = state.movies;
  return ({
    searchInput: state.searchInput,
    genreSelected: state.genreSelected,
    sortBy: state.sortBy,
    movieSelected: state.movieSelected,
    isMovieSelected: state.isMovieSelected,
    movies: state.movies,
  });
};

const mapDispatchToProps = dispatch => ({
  getMovies: (params) => dispatch(getMovies(params)),
  toggleType: (type) => dispatch(toggleType(type)),
  changeSearchInput: (text) => dispatch(changeSearchInput(text)),
  sort: (params) => dispatch(sortBy(params)),
  goToMovie: (id) => dispatch(goToMovie(id)),
  reset: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
