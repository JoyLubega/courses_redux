import React from 'react';
import { shallow} from 'enzyme';
import TextInput from '../../components/common/TextInput';

const setup=() =>{
    const props = {
      name:'',
      label: '',
      placeholder: '',
      error: '',
      value:2,
      onChange: () => {}
    }
    return shallow(<TextInput {...props} />);
}

test('renders the Textinput component', () => {
    
  const wrapper = setup(true);
  expect(wrapper).toHaveLength(1);
});

