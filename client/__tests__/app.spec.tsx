import * as React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import { App } from '../app';

describe('Movies List Test', () => {

  it('Empty state renders correctly', () => {
    const component = create(
      <App/>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should set toggle type', () => {

    const component = mount(<App />);
    component.find('.header-bar__searchBy button')
      .at(0)
      .simulate('click');
    expect(component.state().genreSelected).toBe('title');
  });

  it('should set toggle type', () => {
    const component = mount(<App />);

    const input = component.find('input');
    input.simulate('change', {
      target: {
        value: 'a'
      }
    });

    expect(component.state().searchInput).toBe('a');
  });
  it('should set toggle type', () => {
    const component = mount(<App />);
    const input = component.find('input');
    input.simulate('change', {
      target: {
        value: 'a'
      }
    });
    expect(component.state().movies.length).toBe(0);
    component.find('.primary.long').simulate('click');
    expect(component.state().movies.length).toBe(10);
  });
  it('should set toggle type', () => {
    const component = mount(<App />);
    const input = component.find('input');
    input.simulate('change', {
      target: {
        value: 'a'
      }
    });
    component.find('.primary.long').simulate('click');
    component.update();
    console.log(component.html());
  });
  it('should set toggle type', () => {});
  it('should set toggle type', () => {});
  it('should set toggle type', () => {});

});
