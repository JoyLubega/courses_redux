import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import './styles/styles.css';

const store = configureStore();

store.dispatch(loadCourses());
store.dispatch(loadAuthors());
ReactDOM.render(
    <Provider store={store}>
        <Router>
            {routes}
        </Router>
   </Provider>, 
    document.getElementById('root'));


