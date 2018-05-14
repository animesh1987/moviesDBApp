import * as React from 'react';
import { create } from 'react-test-renderer';

import { Footer } from '../index';

describe('Movie Banner Test', () => {

  it('renders correctly', () => {
    const component = create(<Footer />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});