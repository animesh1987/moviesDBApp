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

  toggleType(genre: string) {
    this.setState({genreSelected: genre});
  }

  public render() {
    return (
      <ErrorBoundary>
        <Header
          genreSelected={this.state.genreSelected}
          toggleType={(genre: string) => this.toggleType(genre)}/>
        <Home />
      </ErrorBoundary>
    )
  }
}