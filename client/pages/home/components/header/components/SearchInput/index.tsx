import * as React from "react";
import 'material-design-icons';

import "./searchInput.scss";

export const SearchInput = () => {
  return (
    <div className="search-input-container">
      <input
        type="text"
        placeholder="Titles, people, genres..."/>
      <i className="material-icons">keyboard_return</i>
    </div>
  )
};