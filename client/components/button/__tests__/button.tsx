import * as React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import { Button } from '../index';

describe('Movie Banner Test', () => {
  const isActive =  true;
  const isPrimary =  true;
  const isLong =  true;

  let clickFn = () => {};

  it('renders correctly', () => {
    const component = create(<Button onClick={clickFn()}/>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('active added successfully', () => {
    const component = shallow(<Button isActive={isActive} />);
    expect(component.find('button').hasClass('active')).toBe(true);
  });

  it('active added successfully', () => {
    const component = shallow(<Button isLong={isLong} />);
    expect(component.find('button').hasClass('long')).toBe(true);
  });

  it('active added successfully', () => {
    const component = shallow(<Button isPrimary={isPrimary} />);
    expect(component.find('button').hasClass('primary')).toBe(true);
  });
});