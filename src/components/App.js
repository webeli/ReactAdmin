import React, { Component } from 'react';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import './../styles/App.css';
import Projects from './Projects/Projects';
import EditProject from './EditProject/EditProject'

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Projects} />
                <Route path='/editproject/:projectKey' component={EditProject} />
            </Router>
        );
    }
}

export default App;
