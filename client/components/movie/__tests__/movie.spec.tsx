import * as React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import { MovieCard } from '../index';

describe('Movie Details Test', () => {
  const movie = {
    title: 'Test',
    overview: 'Test overview',
    release_date: "20-04-04",
    runtime: 144,
    poster_path: 'abc',
    genres: ['test']
  };

  const testFn = jest.fn();

  it('renders correctly', () => {
    const component = create(
      <MovieCard movie={movie} goToMovie={testFn}/>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});