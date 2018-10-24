import React from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';


 export class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this)
  }
  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }
 
  redirectToAddCoursePage(event,id){ 
    this.props.history.push("/course?delete=false");
  } 
  render() {
    const {courses} = this.props;
    return (
      <div className="container">
        <h1>Courses</h1>  
        <button type="button"
               className="btn btn-warning"
               onClick={this.redirectToAddCoursePage}
              >Add Course</button>
              <br/>
        <CourseList courses={courses}/>
      </div>
    );
  }
}
CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};
const mapStateToProps=(state, ownProps)=> {
  return {
    courses: state.courses
  };
};
const mapDispatchToProps=(dispatch)=> {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);