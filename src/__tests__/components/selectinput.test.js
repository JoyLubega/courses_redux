import React from 'react';
import { shallow} from 'enzyme';
import SelectInput from '../../components/common/SelectInput';

const setup=() =>{
    const props = {
      name:'',
      label: '',
      placeholder: '',
      error: '',
      value:2,
      defaultOptions:'',
      options:[],
      onChange: () => {}
    }
    return shallow(<SelectInput {...props} />);
}

test('renders the SelectInput component', () => {  
  const wrapper = setup(true);
  expect(wrapper).toHaveLength(1);
});

