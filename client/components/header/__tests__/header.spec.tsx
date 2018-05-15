import * as React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import { Header } from '../index';

describe('Header Test', () => {
  const movie = {
    title: 'Test',
    overview: 'Test overview',
    release_date: "20-04-04",
    runtime: 144,

  };

  const genre = 'title';

  const onChangeInput = jest.fn();
  const reset = jest.fn();
  const triggerSearch = jest.fn();
  const changeSearchInput = jest.fn();
  const getSearchInput = jest.fn();
  const toggleType = jest.fn();

  it('Header without movie renders correctly', () => {
    const isMovieSelected = false;
    const component = create(
      <Header
        reset={reset}
        onSearchClick={triggerSearch}
        onChangeInput={changeSearchInput}
        searchInputEnter={getSearchInput}
        toggleType={toggleType}
        searchInput=""
        movie={movie}
        genreSelected={genre}
        isMovieSelected={isMovieSelected} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Header with movie renders correctly', () => {
    const isMovieSelected = true;
    const component = create(
      <Header
        reset={reset}
        onSearchClick={triggerSearch}
        onChangeInput={changeSearchInput}
        searchInputEnter={getSearchInput}
        toggleType={toggleType}
        searchInput=""
        movie={movie}
        genreSelected={genre}
        isMovieSelected={isMovieSelected} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('active added successfully', () => {
    const isMovieSelected = false;
    const component = shallow(
      <Header
        reset={reset}
        onSearchClick={triggerSearch}
        onChangeInput={changeSearchInput}
        searchInputEnter={getSearchInput}
        toggleType={toggleType}
        searchInput=""
        movie={movie}
        genreSelected={genre}
        isMovieSelected={isMovieSelected} />
    );
    expect(component.find('.header-bar')).to.have.length(1);//.text());//.simulate('click');
    expect(3).toBe(3);
  });
});