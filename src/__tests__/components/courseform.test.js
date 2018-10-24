import React from 'react';
import { shallow} from 'enzyme';
import CourseForm from '../../components/course/CourseForm';

const setup=(saving) =>{
    const props = {
      allAuthors: [],
      course: [],
      saving: saving,
      errors: {},
      onSave: () => {},
      onChange: () => {},
      onDelete: () => {}
    };
  
    return shallow(<CourseForm {...props} />);
}
describe('<CourseForm />', () => {
    test('should render the CourseForm correctly and h1 ', () => {
        const wrapper = setup(false);
        expect(wrapper).toHaveLength(1)
    }); 
    test('should render the Form  ', () => {
        const wrapper = setup(false);
        expect(wrapper.find('form')).toHaveLength(1);
        // expect(wrapper.find('h1').text()).toEqual('Manage Course');
    });  
});
