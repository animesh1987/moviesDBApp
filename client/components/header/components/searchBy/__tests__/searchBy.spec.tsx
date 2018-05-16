import * as React from 'react';
import { create } from 'react-test-renderer';
/*import { shallow } from 'enzyme';*/

import { SearchBy } from '../index';

describe('Search By test', () => {

  const toggleType = jest.fn();

  it('Search By renders correctly', () => {
    const component = create(
      <SearchBy
        containerClass={'test'}
        genreSelected={'title'}
        toggleType={toggleType}
      />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  /*it('Search by events work', () => {
    const component = shallow(
      <SearchBy
        containerClass={'test'}
        genreSelected={'title'}
        toggleType={toggleType}
      />
    );
    console.log(component.find('Button'));
    component.find('span')//.simulate('click');
    expect(toggleType).toBeCalled();
  });*/
});
