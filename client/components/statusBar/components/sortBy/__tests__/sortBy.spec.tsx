import * as React from 'react';
import { create } from 'react-test-renderer';
import {shallow} from "enzyme";

import { SortBy } from '../index';

describe('Sort By Test', () => {

  const sortBy = jest.fn();

  it('renders correctly', () => {
    const component = create(
      <SortBy
        sortBy={sortBy} selected={'status'}/>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Sort By function works correctly', () => {
    const component = shallow(
      <SortBy
        sortBy={sortBy} selected={'rating'}/>);
    component.childAt(1).simulate('click');
    expect(sortBy).toBeCalled();
    expect(
      component.childAt(2).hasClass('active')).toBeTruthy();
    component.childAt(2).simulate('click');
    expect(sortBy).toBeCalled();
  });

  it('Active class applied correctly', () => {
    const component = shallow(
      <SortBy
        sortBy={sortBy} selected={'release_date'}/>);
    expect(
      component.childAt(1).hasClass('active')).toBeTruthy();
  });
});