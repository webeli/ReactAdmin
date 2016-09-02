import React, { Component } from 'react';
import HeaderLogin from '../HeaderLogin';
import LoginContainer from './LoginContainer';

class Login extends Component {
    render() {
        return (
            <div>
                <HeaderLogin />
                <LoginContainer />
            </div>
        );
    }
}

export default Login;
