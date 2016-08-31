import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';

class LoginContainer extends Component {

    loginUser() {
        this.props.loginUser('t@t.com', 't');
    }

    render() {
        return (
            <div>
                <button onClick={() => this.loginUser()}>Login</button>
            </div>
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
        checkAuth: () => dispatch(authActions.checkAuth()),
        loginUser: (email, password) => dispatch(authActions.loginUser(email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);