import * as React from 'react';
import { create } from 'react-test-renderer';

import { SearchInput } from '../index';

describe('Search Input Test', () => {

  const onChangeInput = jest.fn();
  const searchInputEnter = jest.fn();

  it('renders correctly', () => {
    const component = create(
      <SearchInput
        onChangeInput={onChangeInput}
        searchInputEnter={searchInputEnter}
        value="Search Input"
      />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});