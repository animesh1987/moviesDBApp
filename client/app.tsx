import * as React from "react";
import { MoviesList } from './pages/moviesList'
import { ErrorBoundary } from './errorBoundary';
import { MOVIES } from './data';

import { State, Movie } from './models';

import { Header } from './components/header';
import { StatusBar } from './components/statusBar';
import { Footer } from './components/footer';

let movies: Movie[] = [];
interface Props {};

export class App extends React.Component<Props, State> {

  state: State;
  moviesList: Movie[] = MOVIES.data;

  constructor(props) {

    super(props);
    this.state = {
      searchInput: '',
      genreSelected: 'title',
      movieSelected: {},
      isMovieSelected: false,
      movies,
    };
  }

  toggleType(genre: string) {
    this.setState({ genreSelected: genre });
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

  changeSearchInput = (event: any) => {
    this.setState({ searchInput: event.target.value });
  };

  getSearchInput = (event: any) => {
    if (event.key === 'Enter') {
      this.triggerSearch();
    }
  };

  triggerSearch = () => {
    this.setState({ movies: this.moviesList });
  };

  reset() {
    this.setState({ isMovieSelected: false });
    this.setState({ movieSelected: {} });
    this.setState({ movies: this.moviesList });
  };

  public render() {
    return (
      <ErrorBoundary>
        <Header
          reset={() => this.reset()}
          movie={this.state.movieSelected}
          isMovieSelected={this.state.isMovieSelected}
          onSearchClick={() => this.triggerSearch()}
          searchInput={this.state.searchInput}
          onChangeInput={() => this.changeSearchInput}
          searchInputEnter={() => this.getSearchInput}
          genreSelected={this.state.genreSelected}
          toggleType={(genre: string) => this.toggleType(genre)} />

        <StatusBar
          movieSelected={this.state.movieSelected}
          count={this.state.movies && this.state.movies.length} />
        <MoviesList
          movies={this.state.movies}
          goToMovie={(id: number) => this.goToMovie(id)} />
        <Footer />
      </ErrorBoundary>
    )
  }
}
