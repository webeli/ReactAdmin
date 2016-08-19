import { combineReducers } from 'redux';
import project from './projectReducer';
import projects from './projectsReducer';
import options from './optionReducer'

export default combineReducers({
    project,
    projects,
    options
});