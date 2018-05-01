import * as React from "react";
import 'material-design-icons';

interface SearchInputProps {
  value?: string,
  searchInputEnter: Function,
  onChangeInput: Function
}

import "./searchInput.scss";

export const SearchInput: React.SFC<SearchInputProps> = (props) => {
  return (
    <div className="search-input-container">
      <input
        onChange={props.onChangeInput()}
        onKeyPress={props.searchInputEnter()}
        value={props.value}
        type="text"
        placeholder="Titles, people, genres..."/>
      <i className="material-icons">keyboard_return</i>
    </div>
  )
};