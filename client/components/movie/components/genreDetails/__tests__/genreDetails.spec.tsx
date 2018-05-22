import * as React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import { MovieGenreDetails } from '../index';

describe('Movie Details Test', () => {
  const genres = ['Test', 'Test 2'];

  it('renders correctly', () => {
    const component = create(
      <MovieGenreDetails genres={genres}/>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
