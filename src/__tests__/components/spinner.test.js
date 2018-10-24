import React from 'react';
import { shallow} from 'enzyme';
import AwesomeComponent from '../../components/common/spinner';

const setup=() =>{
    const props = {     
    }
    return shallow(<AwesomeComponent {...props} />);
}
test('renders the Spinner component', () => {
  const wrapper = setup(true);
  expect(wrapper).toHaveLength(1);
});

