import * as React from 'react';
import { create } from 'react-test-renderer';

import { Title } from '../index';

describe('Title Test', () => {

  it('renders correctly', () => {
    const component = create(<Title />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});