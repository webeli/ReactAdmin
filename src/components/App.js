import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import './../styles/App.css';
import Projects from './Projects/_ProjectsWrapper';
import EditProject from './EditProject/_EditProjectWrapper';
import Login from './Login/_LoginWrapper';
import { syncHistoryWithStore } from 'react-router-redux';
import store from '../store';

const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Route path='/' component={Login} />
                <Route path='projects' component={Projects} />
                    <Route path='editproject/:projectKey' component={EditProject} />
            </Router>
        );
    }
}

export default App;
