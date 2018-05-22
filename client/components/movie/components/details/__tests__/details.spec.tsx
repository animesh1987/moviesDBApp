import * as React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import { MovieDetails } from '../index';

describe('Movie Details Test', () => {
  const title = 'Test';
  const releaseDate = '2017-02-02';

  it('renders correctly', () => {
    const component = create(
      <MovieDetails title={title} release_date={releaseDate} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
