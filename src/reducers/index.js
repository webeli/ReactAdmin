import { combineReducers } from 'redux';
import project from './projectReducer';
import projects from './projectsReducer';
import options from './optionReducer';
import auth from './authReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    project,
    projects,
    options,
    auth,
    routing: routerReducer
});