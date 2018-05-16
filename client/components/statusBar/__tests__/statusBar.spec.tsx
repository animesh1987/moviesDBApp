import * as React from 'react';
import { create } from 'react-test-renderer';
/*import {shallow} from "enzyme";*/

import { StatusBar } from '../index';
import {Movie} from "../../../models";

describe('Sort By Test', () => {

  const sortBy = jest.fn();
  const sortedBy = 'release_date';
  const movie: Movie = {
    id: 1,
    title: 'Test',
    overview: 'Test overview',
    release_date: "20-04-04",
    runtime: 144,
    tagline: 'Test',
    genres: [
      'action'
    ],
  };;

  it('renders correctly', () => {
    const component = create(
      <StatusBar
        count={0}
        movieSelected={movie}
        sortBy={sortBy}
        sortedBy={sortedBy}
      />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  /*it('renders correctly', () => {
    const component = create(
      <StatusBar
        count={0}
        movieSelected={movie}
        sortBy={sortBy}
        sortedBy={sortedBy}
      />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });*/
});
