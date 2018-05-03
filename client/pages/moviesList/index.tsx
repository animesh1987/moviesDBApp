import * as React from "react";

import { Movie } from '../../models';
import { MovieCard } from '../../components/movie';
import { EmptyState } from './components/emptyState';

import './moviesList.scss';

interface Props {
  movies?: Movie[],
  goToMovie: Function
};

export class MoviesList extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    if (this.props.movies && this.props.movies.length > 0 ) {
      return (
        <div className='layout-row movies-container'>
          {
            this.props.movies.map((movie: Movie) => {
            return (
              <MovieCard
                goToMovie={(id: number) => this.props.goToMovie(id)}
                key={movie.id}
                movie={movie} />
            );
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
