import { combineReducers } from 'redux';
import project from './projectReducer';
import projects from './projectsReducer';
import options from './optionReducer';
import auth from './authReducer';

export default combineReducers({
    project,
    projects,
    options,
    auth
});