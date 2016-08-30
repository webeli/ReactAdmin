import React, { Component } from 'react';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import './../styles/App.css';
import Projects from './Projects/Projects';
import EditProject from './EditProject/EditProject';
import Login from './Login/Login';
import { connect } from 'react-redux';
import * as authActions from '../actions/authActions';

class App extends Component {
    render() {
        console.log(this.props.auth);
        return (
            <Router history={browserHistory}>
                <Route path='/' component={App} />
                <Route path='/Login' component={Login} />
                <Route path='/Projects' component={Projects} />
                    <Route path='/editproject/:projectKey' component={EditProject} />
            </Router>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        auth: state.auth
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onAuthStateChanged: () => dispatch(authActions.onAuthStateChanged())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
