import * as React from "react";
import './searchBy.scss';

import { Button } from '../../../../../../components/button';

interface SearchByProps {
  toggleGenre: Function,
  containerClass: string,
  genreSelected?: string
}

export const SearchBy: React.SFC<SearchByProps> = (props) => {
  return (
    <div className={props.containerClass}>
      <span className="search-by">Search By</span>
      <Button
          value="title"
          onClick={props.toggleGenre}
          isActive={props.genreSelected === 'title'}>
        Title
      </Button>
      <Button
        value="genre"
        onClick={props.toggleGenre}
        isActive={props.genreSelected === 'genre'}>
        Genre
      </Button>
    </div>
  )
};