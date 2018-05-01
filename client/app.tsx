import * as React from "react";
import { MoviesList } from './pages/moviesList'
import { ErrorBoundary } from './errorBoundary';

import { State, Movie } from './models';

import { Header } from './components/header';

let movies: Movie[] = [];

export class App extends React.Component<State> {

  state: State;

  constructor(props) {

    super(props);
    this.state = {
      searchInput: '',
      genreSelected: 'title',
      movies
    };
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
    console.log(`Trigger search with ${this.state.searchInput}`);
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