import * as React from "react";
import { Movie } from '../../../../models';

import { MovieBanner } from './components/bannerImage';
import { MovieDetails } from './components/details';
import { MovieGenreDetails } from './components/genreDetails';

import './movie.scss';

interface MovieCardProps {
  movie: Movie
}

export const MovieCard: React.SFC<MovieCardProps> = (props) => {

  const { movie } = props;

  return (
    <div className='movie-card' key={movie.id}>
      <MovieBanner imageUrl={movie.poster_path} />
      <MovieDetails
        title={movie.title}
        release_date={movie.release_date}/>
      <MovieGenreDetails genres={movie.genres} />
    </div>
  );
};