import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from '../../components/course/ManageCoursePage';
import CourseForm from '../../components/course/CourseForm';
import Notifications from 'react-notify-toast';


const setup=() =>{
    const props = {
        authors: [],
        actions: { saveCourse: () => { return Promise.resolve(); }},
        course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''},
        allAuthors: [],
        errors: {},
        onSave: () => {},
        onChange: () => {},
        onDelete: () => {}
    };
    return mount(<ManageCoursePage {...props}/>);
}

describe ('Manage Course Page', () => {
  test('Renders the ManageCourse Component', () => {
    
    const wrapper = setup(true)
    expect(wrapper).toHaveLength(1)
    // expect(wrapper.find('div')).toMatchSnapshot()
    // const saveButton = wrapper.find('input');
    // // expect(saveButton.prop('type')).toBe('submit'); 
    // saveButton.simulate('click').hostNodes();
    // expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});

// describe('<ManageCoursePage /> component contains child componenets', () => {
//     test('renders the CourseForm component', () => {
//       const wrapper = setup(true)  
//       expect(wrapper.find(<CourseForm/>)).toMatchSnapshot();
//     });
//     // test('renders the Notifications', () => {
//     //     const wrapper = setup(true)  
//     //     expect(wrapper.find(<Notifications/>)).toMatchSnapshot();
//     //   });
//   });