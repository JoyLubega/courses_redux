import React from 'react';
import App from '../../components/App';
import { shallow} from 'enzyme';
import Header from '../../components/common/Header';

const setup=() =>{
    const props = {
      loading:true,
      children:{}
    };
  
    return shallow(<App {...props} />);
}

test('renders the app component', () => {
  const wrapper = setup(true)
  expect(wrapper).toHaveLength(1);
});
