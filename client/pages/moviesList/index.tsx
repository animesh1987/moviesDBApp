import * as React from "react";

import { Movie } from '../../models';
import { MovieCard } from './components/movie';
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
        <div className='movies-container'>
          {
            this.props.movies.map(movie => {
            return (
              <MovieCard
                key={movie.id}
                movie={movie} />
            )
           })
          }
        </div>
      )
    } else {
      return (
        <EmptyState />
      )
    }
  }
};