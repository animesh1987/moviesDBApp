import * as React from "react";
import './resultsCount.scss';

interface Props {
  count: number
}

export const ResultsCount: React.SFC<Props> = (props) => {
  return (
    <span className="results">{props.count} movies found</span>
  );
};