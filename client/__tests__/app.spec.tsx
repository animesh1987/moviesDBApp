import * as React from 'react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
/*import { mount } from 'enzyme';*/
const configureStore = require('redux-mock-store');
/*import thunk from 'redux-thunk';*/

import App from '../app';

const mockStore = configureStore();

describe('Movies List Test', () => {

  const initialStateMock = {
    searchInput: '',
    genreSelected: 'title',
    sortBy: 'release_date',
    movieSelected: {},
    isMovieSelected: false,
    movies: [],
  };

  beforeEach(() => {

  });

  it('Empty state renders correctly', () => {
    const store = mockStore(initialStateMock);
    console.log(store);
    const component = create(
      <Provider store={store}>
        <App/>
      </Provider>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  /*it('should set toggle type', () => {

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
  });*/

});
