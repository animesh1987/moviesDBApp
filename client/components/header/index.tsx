import * as React from "react";
import { HeaderProps } from '../../models';

import './header.scss';

import { Button } from '../../components/button';
import { Title } from './components/title';
import { SearchTitle } from './components/searchTitle';
import { SearchInput } from './components/searchInput';
import { SearchBy } from './components/searchBy';

export const Header: React.SFC<HeaderProps> = (props) => {

  const containerClass: string = 'header-bar__searchBy';

  return (
    <div className="header-bar">

      <Title />

      <SearchTitle/>

      <SearchInput />

      <div className="layout-row layout-align-space-between">
        <SearchBy
          containerClass={containerClass}
          genreSelected={props.genreSelected}
          toggleType={ (genre: string) => props.toggleType(genre) } />

        <Button isPrimary={true} isLong={true}>Search</Button>
      </div>

    </div>
  );
};

