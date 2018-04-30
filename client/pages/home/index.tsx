import * as React from "react";
import { State } from './models';

import { Header } from './components/header';

interface Props {}

export class Home extends React.Component<Props, State> {

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
      <div>
        <Header
          genreSelected={this.state.genreSelected}
          toggleGenre={(genre: string) => this.toggleGenre(genre)}/>
        <div>This is for the rest</div>
      </div>
    )
  }
};