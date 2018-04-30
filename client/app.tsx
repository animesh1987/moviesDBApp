import * as React from "react";
import { Home } from './pages/home'
import { ErrorBoundary } from './errorBoundary';

import { State } from './models';

import { Header } from './components/header';

export class App extends React.Component<State> {

  state: State;

  constructor(props) {

    super(props);
    this.state = {
      genreSelected: 'title'
    };

  }

  toggleGenre(genre: string) {
    this.setState({genreSelected: genre});
  }

  public render() {
    return (
      <ErrorBoundary>
        <Header
          genreSelected={this.state.genreSelected}
          toggleGenre={(genre: string) => this.toggleGenre(genre)}/>
        <Home />
      </ErrorBoundary>
    )
  }
}