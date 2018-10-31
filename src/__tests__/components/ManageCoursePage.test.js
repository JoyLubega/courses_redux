import React from 'react';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage, mapDispatchToProps, mapStateToProps, getCourseById} from '../../components/course/ManageCoursePage';
import CourseForm from '../../components/course/CourseForm';

import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore({});


    const props = {
        authors: [],
        actions: { 
            saveCourse: () => { return Promise.resolve();},
            deleteCourse: () => { return Promise.resolve();},
        },
        course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''},
        allAuthors: [],
        errors: {},
        onSave: () => {},
        onChange: () => {},
        onDelete: () => {},
        history:{
            push: () =>{}
        },
        options:[],
        match:{
            params:{
                id:'react'
            }
        },
        courses:[
            {id: 'react', watchHref: '', title: '', authorId: '', length: '', category: ''}
        ]
    };


describe ('ManageCoursePage', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ManageCoursePage {...props}/>)
    });

    it('Renders the ManageCourse Component', () => {
        wrapper.setState({loading:false})
        expect(wrapper.find('CourseForm')).toMatchSnapshot();
    });
    it('mapDispatchToProps', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).actions;
        expect(dispatch.mock.calls).toMatchSnapshot();
    });
    it('renders mapStateToProps', () => {
        const state={
            loading: true,
            courses:[],
            authors:[]
        }
        const expected ={
            authors: state.authors,
            course:props.course
        }
        expect(mapStateToProps(state, {...props})).toEqual(expected)
    });
    it('renders getCouseByID', () => {
        const id = 'react'
        expect(getCourseById(props.courses, id)).toEqual(props.courses[0])
    });

    describe('updateCourseState', () => {
        it('should set state when update course event occurs', () => {
            const event = {
                target: {
                    name: 'title',
                    value: 'some title'
                }
            }
            wrapper.instance().updateCourseState(event);
            expect(wrapper.state().course.title).toBe('some title')
        })
    })
    describe('SaveorUpdateCourse', () => {
        it('should save or update data', () => {
            const event = {
                preventDefault:()=>{}
            }
            wrapper.instance().saveOrUpdateCourse(event);
            expect(wrapper.state().course.title).toBe('')
        });
        
        
    })
    describe('DeleteCourse', () => {
        it('should delete a course', () => {
            const event = {
                preventDefault:()=>{}
            }
            wrapper.instance().deleteCourse(event);
            expect(wrapper.state().course.title).toBe('')
        });
        
        
    })
    
});



