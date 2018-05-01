import * as React from "react";

import { Movie } from '../../models';
import { MovieCard } from './components/movie';
import { EmptyState } from './components/emptyState';

import './moviesList.scss';

interface Props {
  movies?: Movie[]
};

export class MoviesList extends React.Component<Props> {

  movies: Movie[] | undefined;

  constructor(props: Props) {
    super(props);

    this.movies= props.movies;
  }

  render() {
    if (this.movies && this.movies.length > 0 ) {
      return (
        <div className='layout-row movies-container'>
          {
            this.movies.map((movie: Movie) => {
            return (
              <MovieCard
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