import * as React from "react";
import { HeaderProps } from '../../models';

import './header.scss';

import { Button } from '../../components/button';
import { Title } from './components/title';
import { SearchTitle } from './components/searchTitle';
import { SearchInput } from './components/searchInput';
import { SearchBy } from './components/searchBy';
import { MovieDetail } from '../movieDetail';

export const Header: React.SFC<HeaderProps> = (props) => {

  const containerClass: string = 'header-bar__searchBy';
  const { movie }: {movie: any} = props;

  if (props.isMovieSelected) {
    return (
      <div className="header-bar">
        <div className="layout-row layout-align-space-between movie-selected">
          <Title />
          <Button onClick={props.reset}>Search</Button>
        </div>

        <MovieDetail movie={movie} />
      </div>
    );
  }
  return (
    <div className="header-bar">

      <Title />

      <SearchTitle/>

      <SearchInput
        onChangeInput={() => props.onChangeInput()}
        searchInputEnter={() => props.searchInputEnter()}
        value={props.searchInput} />

      <div className="layout-row layout-align-space-between">
        <SearchBy
          containerClass={containerClass}
          genreSelected={props.genreSelected}
          toggleType={ (genre: string) => props.toggleType(genre) } />

        <Button
          onClick={props.onSearchClick}
          isPrimary={true}
          isLong={true}>Search</Button>
      </div>

    </div>
  );
};

