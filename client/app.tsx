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

  getSearchInput = (event: any) => {
    if (event.key === 'Enter') {
      this.triggerSearch(event.target.value);
    }
  }

  triggerSearch = (searchString: string) => {
    console.log(`Trigger search with ${searchString}`);
  }

  public render() {
    return (
      <ErrorBoundary>
        <Header
          searchInput={this.state.searchInput}
          searchInputEnter={() => this.getSearchInput}
          genreSelected={this.state.genreSelected}
          toggleType={(genre: string) => this.toggleType(genre)}/>

        <MoviesList movies={this.state.movies} />
      </ErrorBoundary>
    )
  }
}