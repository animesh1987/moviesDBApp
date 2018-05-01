import * as React from "react";

export const SortBy = () => {
  return (
    <div>
      <span>Sort By</span>
      <span className="cursor-pointer">release date</span>
      <span className="active cursor-pointer">rating</span>
    </div>
  );
};