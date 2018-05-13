import * as React from 'react';
import { create } from 'react-test-renderer';
/*import { S } from 'enzyme';*/

import { MovieBanner } from '../index';

describe('Movie Banner Test', () => {
  it('renders correctly', () => {
    const imageLink = 'asdac';
    const component = create(<MovieBanner imageUrl={imageLink} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});