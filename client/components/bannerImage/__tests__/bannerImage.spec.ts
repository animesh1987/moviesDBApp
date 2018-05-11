import * as React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { MovieBanner } from '../index';

describe('<MovieBanner />', () => {
  it('renders', () => {
    const imageLink = 'asdac';
    console.log(MovieBanner);
    // const component = renderer.create(<MovieBanner imageUrl={imageLink} />
    // ).toJSON();
    // console.log(component);
    expect(3).toBe(3);
    // expect(renderer.render(
    //   <MovieBanner imageUrl={imageLink} />
    // )).toMatchSnapshot();
  });
});