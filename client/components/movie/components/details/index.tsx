import * as React from "react";
import './details.scss';

interface Props {
  title: string,
  release_date: string,
}

export const MovieDetails: React.SFC<Props> = (props) => {
  return (
    <div className="layout-row layout-align-space-between layout-align-center">
      <span className="movie-title">{props.title}</span>
      <span className="release-date">{props.release_date.substring(0, 4)}</span>
    </div>
  )
};