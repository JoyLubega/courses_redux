import React from 'react';
import { shallow} from 'enzyme';
import Header from '../../components/common/Header';

const setup=() =>{
    const props = {
      loading:true
    }
    return shallow(<Header {...props} />);
}
test('renders the Header component', () => {
  const wrapper = setup(true);
  expect(wrapper).toHaveLength(1);
  expect(wrapper.find('nav')).toHaveLength(1);
});

