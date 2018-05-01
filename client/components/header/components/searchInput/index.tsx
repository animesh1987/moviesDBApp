import * as React from "react";
import 'material-design-icons';

interface SearchInputProps {
  value?: string,
  searchInputEnter: Function
}

import "./searchInput.scss";

export const SearchInput: React.SFC<SearchInputProps> = (props) => {
  console.log(props);
  return (
    <div className="search-input-container">
      <input
        onKeyPress={props.searchInputEnter()}
        defaultValue={props.value || undefined}
        type="text"
        placeholder="Titles, people, genres..."/>
      <i className="material-icons">keyboard_return</i>
    </div>
  )
};