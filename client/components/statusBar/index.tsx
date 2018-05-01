import * as React from "react";
import './status-bar.scss';

import { ResultsCount } from './components/resultsCount';
import { SortBy } from './components/sortBy';

interface Props {
  count?: number,
}

export const StatusBar: React.SFC<Props> = (props) => {
  if (props.count && props.count > 0) {
    return (
      <div
        className="status-bar layout-row layout-align-center layout-align-space-between">
        <ResultsCount count={props.count} />
        <SortBy />
      </div>
    );
  } else {
    return (
      <div className="status-bar layout-row layout-align-center layout-align-space-between"></div>
    );
  }
};