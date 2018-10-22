import React from 'react';
import {Route} from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import AboutPage from './components/about/AboutPage';

export default (
  <div>
    <App/>
      <Route exact path="/" component={HomePage}/>
      <Route path="/courses" component={CoursesPage}/>
      <Route  exact path="/course" component={ManageCoursePage}/>
      <Route exact path="/course/:id" component={ManageCoursePage}/>
    <Route path="/about" component={AboutPage}/>
  </div>
);