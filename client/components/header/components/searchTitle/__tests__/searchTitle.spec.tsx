import * as React from 'react';
import { create } from 'react-test-renderer';

import { SearchTitle } from '../index';

describe('Search Title Test', () => {

  it('renders correctly', () => {
    const component = create(<SearchTitle />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});