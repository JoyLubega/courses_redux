import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../components/home/HomePage'

describe('<HomePage />', () => {
  test('should render the aboutPage correctly ', () => {
    const wrapper = shallow(
    <HomePage />
    
    );
    expect(wrapper).toHaveLength(1)
  });
});