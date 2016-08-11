import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { } from 'react-router';

class Project extends Component {

    render() {
        console.log(this.props);
        return (
            <Grid>
                <Row className="show-grid">
                    <h2>{this.props.project.pName}</h2>
                </Row>
            </Grid>
        );
    }
}

export default Project;