import React from 'react';
import { shallow} from 'enzyme';
import {CoursesPage, mapDispatchToProps, mapStateToProps } from '../../components/course/CoursesPage';
// import { mapStateToProps } from '../../components/course/ManageCoursePage';

const setup=() =>{
    const props = {
      courses:[],
      actions:{}
    }
    return shallow(<CoursesPage {...props} />);
}
  it('renders the CourseList component', () => {
    const wrapper = setup(true);
    expect(wrapper.find('table')).toMatchSnapshot();
  });
  it('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).actions;
    expect(dispatch.mock.calls).toMatchSnapshot();
  });
  it('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).actions;
    expect(dispatch.mock.calls).toMatchSnapshot();
  });
  it ('It renders mapStateToprops',()=>{
    const state={
      courses:[]
    }
    expect(mapStateToProps(state)).toEqual(state)
  });

describe('<CourseList /> component contains child componenets', () => {
  it('renders the CourseList component', () => {
    const wrapper = setup(true);
    expect(wrapper.find('CourseListRow')).toMatchSnapshot();
  });
});
