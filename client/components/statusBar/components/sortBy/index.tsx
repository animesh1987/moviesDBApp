import * as React from "react";

interface Props {
  sortBy: Function,
  selected: string
}

export const SortBy: React.SFC<Props> = (props) => {

  return (
    <div>
      <span>Sort By</span>
      <span
        onClick={() => props.sortBy('release_date')}
        className={`cursor-pointer ${props.selected === 'release_date' ? 'active': ''}`}>
          release date
      </span>

      <span
        onClick={() => props.sortBy('rating')}
        className={`cursor-pointer ${props.selected === 'rating' ? 'active': ''}`}>
          rating
      </span>
    </div>
  );
};