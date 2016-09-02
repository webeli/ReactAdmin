import React, { Component } from 'react';
import { Navbar  } from 'react-bootstrap';

class HeaderLogin extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>ADMIN</Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
            </Navbar>
        );
    }
}

export default HeaderLogin;