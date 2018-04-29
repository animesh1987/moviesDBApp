import * as React from "react";
import { State } from './models';

import { Header } from './components/header';

interface Props {

}

export class Home extends React.Component<Props, State> {

  state: State;

  constructor(props) {

    super(props);
    this.state = {
      name: 'Test',
      counter: 0
    };

  }

  updateCounter() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }));
    console.log(this.state.counter);
  }

  public render() {
    if (this.state.counter === 5) {
      throw new Error("I am crashing");
    }
    return (
      <div>
        <Header name={this.state.name} check={() => this.updateCounter()}/>
        <div>This is for the rest {this.state.counter}</div>
      </div>
    )
  }
};