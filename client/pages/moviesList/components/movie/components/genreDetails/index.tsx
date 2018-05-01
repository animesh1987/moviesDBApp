import * as React from "react";
import './genreDetails.scss'

interface Props {
  genres: string[]
}

export const MovieGenreDetails: React.SFC<Props> = (props) => {
  return (
    <div className="genre-details">
      {props.genres.join(' ')}
    </div>
  )
};