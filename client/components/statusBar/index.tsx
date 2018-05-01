import * as React from "react";
import './status-bar.scss';

import { ResultsCount } from './components/resultsCount';
import { SortBy } from './components/sortBy';

export const StatusBar = () => {
  return (
    <div
      className="status-bar layout-row layout-align-center layout-align-space-between">
      <ResultsCount count={7} />
      <SortBy />
    </div>
  );
};