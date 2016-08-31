import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import './../styles/App.css';
import Projects from './Projects/Projects';
import EditProject from './EditProject/EditProject';
import Login from './Login/Login';

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='login' component={Login} />
                <Route path='projects' component={Projects} />
                    <Route path='editproject/:projectKey' component={EditProject} />
            </Router>
        );
    }
}

export default App;
