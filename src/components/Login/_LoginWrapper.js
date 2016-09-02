import React, { Component } from 'react';
import Header from '../Header';
import LoginContainer from './LoginContainer';

class Login extends Component {
    render() {
        return (
            <div>
                <Header />
                <LoginContainer />
            </div>
        );
    }
}

export default Login;
