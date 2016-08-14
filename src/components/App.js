import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import './../styles/App.css';
import Projects from './Projects/Projects';
import EditProject from './EditProject/EditProject'
import store from '../store';

store.subscribe(() => {
    console.log("store changed", store.getState())
});

class App extends Component {
    render() {
        console.log(store.getState());
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Projects} />
                <Route path='/editproject/:projectKey' component={EditProject} />
            </Router>
        );
    }
}

export default App;
