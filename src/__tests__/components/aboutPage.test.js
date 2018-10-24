import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from '../../components/about/AboutPage';
describe('<AboutPage/>', () => {
  it('should render the aboutPage correctly ', () => {
    const wrapper = shallow(
    <AboutPage />
    
    );
    expect(wrapper).toHaveLength(1)
  });
});