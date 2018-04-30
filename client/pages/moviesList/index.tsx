import * as React from "react";

import { Movie } from '../../models';
import { EmptyState } from './components/emptyState';

interface Props {
  movies?: Movie[]
};

export class MoviesList extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    if (this.props.movies && this.props.movies.length > 0 ) {
      return (
        <div>This is where movies go!!</div>
      )
    } else {
      return (
        <EmptyState />
      )
    }
  }
};