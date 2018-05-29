import * as React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import { App } from '../app';

describe('Movies List Test', () => {

  it('Empty state renders correctly', () => {
    const component = create(
      <App/>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should set toggle type', () => {

    const component = mount(<App />);
    component.find('.header-bar__searchBy button')
      .at(0)
      .simulate('click');
    expect(component.state().genreSelected).toBe('title');
  });

  it('sets search input correctly', () => {
    const component = mount(<App />);

    const input = component.find('input');
    input.simulate('change', {
      target: {
        value: 'a'
      }
    });

    expect(component.state().searchInput).toBe('a');
  });

  it('click on search button works correctly', () => {
    const component = mount(<App />);
    const input = component.find('input');
    input.simulate('change', {
      target: {
        value: 'a'
      }
    });
    expect(component.state().movies.length).toBe(0);
    component.find('.primary.long').simulate('click');
    expect(component.state().movies.length).toBe(10);
  });

  it('sort by is applied correctly', () => {
    const component = mount(<App />);
    component.instance().triggerSearch();
    component.update();
    component.find('.status-bar span')
      .at(3).simulate('click');
    expect(component.state().sortBy).toBe('rating');
  });

  it('app resets correctly', () => {
    const component = mount(<App />);
    component.instance().triggerSearch();
    component.update();
    component
      .find('.movies-container .movie-card')
      .at(0)
      .simulate('click');
    component.update();
    component
      .find('.movie-selected button')
      .simulate('click');
    expect(component.state().isMovieSelected).toBe(false);
  });

  it('search is triggered when enter is pressed', () => {
    const component = mount(<App />);
    const input = component.find('input');
    input.simulate('keypress', {key: 'Enter'});
    component.update();
    expect(component.state().movies.length).toBe(10);
  });

});
