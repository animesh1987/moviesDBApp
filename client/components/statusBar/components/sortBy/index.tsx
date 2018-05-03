import * as React from "react";

interface Props {
  sortBy: Function
}

export const SortBy: React.SFC<Props> = (props) => {
  return (
    <div>
      <span>Sort By</span>
      <span
        onClick={() => props.sortBy('release_date')}
        className="active cursor-pointer">release date</span>
      <span
        onClick={() => props.sortBy('rating')}
        className="cursor-pointer">rating</span>
    </div>
  );
};