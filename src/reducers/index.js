import { combineReducers } from 'redux';
import project from './projectReducer';
import options from './optionReducer'

export default combineReducers({
    project,
    options
});