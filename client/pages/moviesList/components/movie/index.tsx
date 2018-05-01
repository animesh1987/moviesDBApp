import * as React from "react";
import { Movie } from '../../../../models';

interface MovieCardProps {
  key: number,
  movie: Movie
}

export const MovieCard: React.SFC<MovieCardProps> = (props) => {
  console.log(props);
  return (
    <div className='movie-card'>{props.movie.title}</div>
  );
};