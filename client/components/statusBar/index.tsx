import * as React from "react";
import './status-bar.scss';
import { Movie } from '../../models';

import { ResultsCount } from './components/resultsCount';
import { SortBy } from './components/sortBy';
import { ByGenre } from './components/genre';

interface Props {
  count?: number,
  sortBy: Function
  movieSelected: Movie
}

export const StatusBar: React.SFC<Props> = (props) => {
  const { movieSelected, count } = props;
  return (
    <div
      className="status-bar">
      {
        movieSelected.id ?
        <div className="layout-row layout-align-center layout-align-space-between">
          <ByGenre genre={movieSelected.genres[0]}/>
        </div> :
          count && count > 0 ?
            <div className="layout-row layout-align-center layout-align-space-between">
              <ResultsCount count={count} />
              <SortBy
                sortBy={(type: string) => props.sortBy(type)} />
            </div>
            : null
      }
    </div>
  );
};
