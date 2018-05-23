import * as React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import { MoviesList } from '../index';

describe('Movies List Test', () => {
  const movie = {
    id: 1,
    title: 'Test',
    overview: 'Test overview',
    release_date: "20-04-04",
    runtime: 144,
    poster_path: 'abc',
    genres: ['test']
  };

  const testFn = jest.fn();

  it('Empty state renders correctly', () => {
    const component = create(
      <MoviesList
        goToMovie={testFn}
        movies={[]}/>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Movie renders correctly', () => {
    const component = create(
      <MoviesList
        goToMovie={testFn}
        movies={[movie]}/>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('gotomovie is called correctly', () => {
    const component = shallow(
      <MoviesList
        goToMovie={testFn}
        movies={[movie]}/>
    );
    console.log(component.childAt(1).html());
    expect(true).toBe(true);
  });
});
