import * as React from 'react';
import { create } from 'react-test-renderer';

import { EmptyState } from '../index';

describe('Empty State Test', () => {

  it('renders correctly', () => {
    const component = create(
      <EmptyState />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
