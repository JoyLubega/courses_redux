import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import Notifications, {notify} from 'react-notify-toast';

let danger = { background: 'Red', text: "White" };
let success = { background: 'Green', text: "White" };
class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
    };
    this.saveOrUpdateCourse = this.saveOrUpdateCourse.bind(this);
    this.deleteCourse= this.deleteCourse.bind(this);
    this.updateCourseState = this.updateCourseState.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }
  updateCourseState(event) {
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({course: course});
  }
  deleteCourse(event){
    event.preventDefault();
    this.props.actions.deleteCourse(this.state.course.id)
    .then(() => this.redirect())
    .catch(error => {
      notify.show(error, "custom", 5000, danger);
      });
  }
  saveOrUpdateCourse(event) {
    event.preventDefault();
    this.setState({ saving:true });
    this.props.actions.saveCourse(this.state.course)
        .then(() => this.redirect())
        .catch(error => {
          notify.show(error, "custom", 5000, danger);
            this.setState({saving: false});
          });       
}
redirect(){
    this.props.history.push('/courses'); 
}
  render() {
    
    return (
      <div>
      <Notifications />
      <CourseForm
        course={this.state.course}
        onChange={this.updateCourseState}
        onSave={this.saveOrUpdateCourse}
        errors={this.state.errors}
        allAuthors={this.props.authors}
        onDelete={this.deleteCourse}
        saving={this.state.saving}
      />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired

};

ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

const getCourseById = (courses, id) => {
    const course = courses.filter(course => course.id === id);
    if (course) return course[0]; //since filter returns an array, have to grab the first.
    return null;
  };

const mapStateToProps=(state, props)=> {
  
    const courseId = props.match.params.id; // this id is coming from  the path `/course/:id`
    let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
    if (courseId && state.courses.length > 0){
      
        course = getCourseById(state.courses, courseId);

    }    
    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName +' '+ author.lastName
        };
    });
    
    return {
      course: course,
      authors: authorsFormattedForDropdown
  };
};

const mapDispatchToProps=(dispatch)=> {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);