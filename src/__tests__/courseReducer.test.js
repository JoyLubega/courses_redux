import courseReducer from '../reducers/courseReducer';
import * as actions from '../actions/courseActions';

    describe('courseReducer', () => {
        it('should add course when passed CREATE_COURSE_SUCCESS', () => {
        const initialState = [
            {title: 'react'},
            {title: 'redux'}
        ];
        const newCourse = {title: 'js'};
        const action = actions.createCourseSuccess(newCourse);
        const newState = courseReducer(initialState, action);

        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('react');
        expect(newState[1].title).toEqual('redux');
        expect(newState[2].title).toEqual('js');
        });

        it('should load course when passed LOAD_COURSES_SUCCESS', () => {
            const initialState = [
                {title: 'react'},
                {title: 'redux'}
            ];
            const newCourse = {title: 'js'};
            const action = actions.loadCoursesSuccess(newCourse);
            const newState = courseReducer(initialState, action);
            expect(newState.title).toEqual('js');
            });
        
        it('should delete course when passed DELETE_COURSE_SUCCESS', () => {
            const initialState = [];
            const newCourse = {title: 'js'};
            const action = actions.deleteCourse(newCourse);
            const newState = courseReducer(initialState, action);
            expect(newState).toEqual([]);
            });
        it('should load course when passed UPDATE_COURSE_SUCCESS', () => {
            const initialState = [
                {title: 'react'},
                {title: 'redux'}
            ];
            const newCourse = {title: 'js'};
            const action = actions.updateCourseSuccess(newCourse);
            const newState = courseReducer(initialState, action);
            expect(newState[0].title).toEqual('js');
            });
    })
    