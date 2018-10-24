import React from 'react';
import { shallow} from 'enzyme';
import {CoursesPage} from '../../components/course/CoursesPage';

const setup=() =>{
    const props = {
      courses:[],
      actions:{}
      
    }
    return shallow(<CoursesPage {...props} />);
}
test('renders the CourseList component', () => {
  const wrapper = setup(true);
  expect(wrapper.find('table')).toMatchSnapshot();
});

describe('<CourseList /> component contains child componenets', () => {
  test('renders the CourseList component', () => {
    const wrapper = setup(true);
    expect(wrapper.find('CourseListRow')).toMatchSnapshot();
  });
});
