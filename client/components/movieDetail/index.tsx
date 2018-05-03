import * as React from "react";

import { Movie } from '../../models';
import './movieDetails.scss';

import { MovieBanner } from '../bannerImage';
import { MovieInformation } from './components/information';

interface Props {
  movie: Movie
}

export const MovieDetail: React.SFC<Props> = (props) => {
  return (
    <div className="movie-detail layout-row">
      <MovieBanner imageUrl={props.movie.poster_path} />
      <MovieInformation movie={props.movie} />
    </div>
  )
};
