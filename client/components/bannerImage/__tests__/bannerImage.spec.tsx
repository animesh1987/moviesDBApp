import * as React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import { MovieBanner } from '../index';

describe('Movie Banner Test', () => {
  const imageLink = 'asdac';

  it('renders correctly', () => {
    const component = create(<MovieBanner imageUrl={imageLink} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Image Link applied correctly', () => {
    const component = shallow(<MovieBanner imageUrl={imageLink} />);
    expect(component.find('div').prop('style'))
      .toHaveProperty('backgroundImage', `url(${imageLink})`);
  });
});