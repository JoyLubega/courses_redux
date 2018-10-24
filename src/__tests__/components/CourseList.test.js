import React from 'react';
import { shallow} from 'enzyme';
import CourseList from '../../components/course/CourseList';
import CourseListRow from '../../components/course/CourseListRow';


const setup=() =>{
    const props = {
      courses:[],
      
    }
    return shallow(<CourseList {...props} />);
}
test('renders the CourseList component', () => {
  const wrapper = setup(true);
  expect(wrapper.find('table')).toHaveLength(1);
});

describe('<CourseList /> component contains child componenets', () => {
  test('renders the CourseList component', () => {
    const wrapper = setup(true);
    expect(wrapper.find('CourseListRow')).toMatchSnapshot();
  });
});
