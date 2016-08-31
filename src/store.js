import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

export default createStore(
    reducer,
    applyMiddleware(thunk, routerMiddleware(browserHistory))
);