import * as React from "react";

import { Movie } from '../../models';

interface Props {
  movie: Movie
}

export const MovieDetail: React.SFC<Props> = (props) => {
  return (
    <div className="movie-detail">
      {props.movie.title}
    </div>
  )
};