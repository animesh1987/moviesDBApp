import * as React from 'react';
import { create } from 'react-test-renderer';

import { ResultsCount } from '../index';

describe('Results Count Test', () => {
  const count = 1;

  it('renders correctly', () => {
    const component = create(<ResultsCount count={count}/>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});