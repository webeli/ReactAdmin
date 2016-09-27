import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as authActions from '../actions/authActions';

class HeaderAdmin extends Component {

    signOut() {
        this.props.signOut();
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand><Link to={`/projects`}>TIVAL Admin</Link></Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#" onClick={() => this.signOut()}>SignOut</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        projects: state.projects
    };
}
function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(authActions.signOutUser())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderAdmin);
