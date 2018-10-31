import React from 'react';
import { mount} from 'enzyme';
import CourseForm from '../../components/course/CourseForm';
import TextInput from '../../components/common/TextInput';
import SelectInput from '../../components/common/SelectInput';

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
  
    return mount(<CourseForm {...props} />);
}
describe('<CourseForm />', () => {
    it('should render the CourseForm correctly and h1 ', () => {
        const wrapper = setup(false);
        expect(wrapper).toHaveLength(1)
    }); 
    it('should render the Form  ', () => {
        const wrapper = setup(false);
        expect(wrapper.find('form')).toHaveLength(1);
        
        // expect(wrapper.find('h1').text()).toEqual('Manage Course');
    }); 
    it('should render the TextInput  ', () => {
        const wrapper = setup(false);
        expect(wrapper.find('TextInput')).toHaveLength(3);
        
        // expect(wrapper.find('h1').text()).toEqual('Manage Course');
    }); 
    it('should render the SelectInput  ', () => {
        const wrapper = setup(false);
        expect(wrapper.find('SelectInput')).toHaveLength(1);
        
        // expect(wrapper.find('h1').text()).toEqual('Manage Course');
    }); 
});
