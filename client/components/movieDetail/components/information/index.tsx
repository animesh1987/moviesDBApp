import * as React from "react";

interface Props {
  movie: any
}

export const MovieInformation: React.SFC<Props> = (props) => {

  const { movie } = props;
  return (
    <div className="layout-column">
      <div className="layout-row layout-align-center">
        <span className="title">{movie.title}</span>
        <span className="average">{movie.vote_average}</span>
      </div>
      <div className="tagline">{movie.tagline}</div>
      <div className="layout-row">
        <span className="date">{movie.release_date.substring(0,4)}</span>
        <span className="length">{movie.runtime} min</span>
      </div>
      <p className="description">
        {movie.overview}
      </p>
    </div>
  );
};