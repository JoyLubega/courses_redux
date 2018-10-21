import React from 'react';
import PropTypes from 'prop-types'
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = (props) => {
    const { course, allAuthors, onSave, onChange, saving, errors, onDelete}= props;
    let urlParams = new URLSearchParams(window.location.search);
    let deleted = urlParams.get('delete');
  return (
    <form className="container">
        {deleted ? <h1>Add Course</h1> :
        <h1>Edit Course</h1>
        }
      
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}/>

      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange} 
        error={errors.authorId}/>

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}/>

      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-success"
        onClick={onSave}/>
        {}
        
        {deleted ? <div/>:
        <input
        type="submit"
        disabled={saving}
        value="Delete"
        className="btn btn-danger "
        onClick={onDelete}
        />
        }
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;