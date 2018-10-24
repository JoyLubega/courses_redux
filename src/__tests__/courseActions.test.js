import * as courseActions from '../actions/courseActions'
import * as types from '../actions/actionTypes'
import nock from 'nock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

  describe('Course Actions', () => {
    describe('createCourseSuccess', () => {
      it('should create a CREATE_COURSE_SUCCESS action', () => {
        //arrange
        const course = {id: 'clean-code', title: 'Clean Code'};
        const expectedAction = {
          type: types.CREATE_COURSE_SUCCESS,
          course: course
        };
  
        //act
        const action = courseActions.createCourseSuccess(course);
  
        //assert
        expect(action).toEqual(expectedAction);
      });
    });
    describe('loadCourseSuccess', () => {
        it('should create a LOAD_COURSE_SUCCESS action', () => {
          //arrange
          const courses = {id: 'clean-code', title: 'Clean Code'};
          const expectedAction = {
            type: types.LOAD_COURSES_SUCCESS,
            courses: courses
          };
          //act
          const action = courseActions.loadCoursesSuccess(courses);
    //assert
          expect(action).toEqual(expectedAction);
        });
    });
      describe('updateCourseSuccess', () => {
        it('should create a UPDATE_COURSE_SUCCESS action', () => {
          //arrange
          const course = {id: 'clean-code', title: 'Clean Code'};
          const expectedAction = {
            type: types.UPDATE_COURSE_SUCCESS,
            course: course
          };
    
          //act
          const action = courseActions.updateCourseSuccess(course);
    
          //assert
          expect(action).toEqual(expectedAction);
        });
    });
    
  });


  //Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('Course Actions Thunk', () => {
    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {

      const expectedActions = [
        {type: types.BEGIN_AJAX_CALL},
        {type: types.LOAD_COURSES_SUCCESS, body: {course: {id: 'clean-code', title: 'Clean Code'}}}
      ];
      const store = mockStore({courses: []}, expectedActions, done);
      store.dispatch(courseActions.loadCourses()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
        done();
      });
    });

  it('should create BEGIN_AJAX_CALL and DELETE_COURSES', (done) => {

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.DELETE_COURSE_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
    ];
    const store = mockStore({courses: []}, expectedActions, done);
    store.dispatch(courseActions.deleteCourse()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.DELETE_COURSE_SUCCESS);
      done();
    });
  });

  // it('should create BEGIN_AJAX_CALL and CREATE_COURSES', (done) => {
  //   const course = {id: 'clean-code', title: 'Clean Code'};
  //   const expectedActions = [
  //     {type: types.BEGIN_AJAX_CALL},
  //     {type: types.CREATE_COURSE_SUCCESS,
  //       course: course, 
  //      }
  //   ];
  //   const store = mockStore({courses: []}, expectedActions, done);
  //   store.dispatch(courseActions.saveCourse()).then(() => {
  //     const actions = store.getActions();
  //     expect(actions[0].type).toEqual(types.DELETE_COURSE_SUCCESS);
  //     done();
  //   });
  // });


  });

  
});