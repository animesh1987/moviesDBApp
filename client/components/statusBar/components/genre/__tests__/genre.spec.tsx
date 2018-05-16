import * as React from 'react';
import { create } from 'react-test-renderer';

import { ByGenre } from '../index';

describe('Genre Test', () => {
  const genre = 'Test';

  it('renders correctly', () => {
    const component = create(<ByGenre genre={genre}/>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});