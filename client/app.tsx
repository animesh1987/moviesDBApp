import * as React from "react";
import { MoviesList } from './pages/moviesList'
import { ErrorBoundary } from './errorBoundary';
import { MOVIES } from './data';

import { State, Movie } from './models';

import { Header } from './components/header';

let movies: Movie[] = [];

export class App extends React.Component<State> {

  state: State;
  moviesList: any = MOVIES.data;

  constructor(props) {

    super(props);
    this.state = {
      searchInput: '',
      genreSelected: 'title',
      movies
    };

    console.log(this.moviesList);
  }

  toggleType(genre: string) {
    this.setState({genreSelected: genre});
  }

  changeSearchInput = (event: any) => {
    this.setState({searchInput: event.target.value});
  }

  getSearchInput = (event: any) => {
    if (event.key === 'Enter') {
      this.triggerSearch();
    }
  }

  triggerSearch = () => {
    this.setState({movies: this.moviesList});
  }

  public render() {
    return (
      <ErrorBoundary>
        <Header
          onSearchClick={() => this.triggerSearch()}
          searchInput={this.state.searchInput}
          onChangeInput={() => this.changeSearchInput}
          searchInputEnter={() => this.getSearchInput}
          genreSelected={this.state.genreSelected}
          toggleType={(genre: string) => this.toggleType(genre)}/>

        <MoviesList movies={this.state.movies} />
      </ErrorBoundary>
    )
  }
}