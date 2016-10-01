import { combineReducers } from 'redux';
import project from './projectReducer';
import projects from './projectsReducer';
import option from './optionReducer';
import options from './optionsReducer';
import auth from './authReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    project,
    projects,
    option,
    options,
    auth,
    routing: routerReducer
});