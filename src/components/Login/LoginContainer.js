import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from 'react-bootstrap';
import * as authActions from '../../actions/authActions';

class LoginContainer extends Component {

    loginUser() {
        this.props.loginUser('t@t.com', 't');
    }

    render() {
        return (
            <Grid>
                <Button bsStyle="default" onClick={() => this.loginUser()}>SignIn</Button>
            </Grid>
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
        loginUser: (email, password) => dispatch(authActions.loginUser(email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);