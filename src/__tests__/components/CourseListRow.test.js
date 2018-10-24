import React from 'react';
import { shallow} from 'enzyme';
import CourseListRow from '../../components/course/CourseListRow';


const setup=() =>{
    const props = {
      course:{}
    }
    return shallow(<CourseListRow {...props} />);
}
test('renders the CourseListRow component', () => {
  const wrapper = setup(true);
  expect(wrapper.find('tr')).toHaveLength(1);
});

